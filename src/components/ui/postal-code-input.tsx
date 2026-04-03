import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PostalCodeInputProps {
  postalCode: string;
  city: string;
  onPostalCodeChange: (code: string) => void;
  onCityChange: (city: string) => void;
  postalCodeId?: string;
  cityId?: string;
  postalCodeLabel?: string;
  cityLabel?: string;
  required?: boolean;
  error?: string;
}

const PostalCodeInput = ({
  postalCode,
  city,
  onPostalCodeChange,
  onCityChange,
  postalCodeId = "postalCode",
  cityId = "city",
  postalCodeLabel = "Code postal",
  cityLabel = "Ville",
  required = false,
  error,
}: PostalCodeInputProps) => {
  const [autoCompleted, setAutoCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (postalCode.length !== 5) return;

    const controller = new AbortController();
    setLoading(true);

    fetch(`https://geo.api.gouv.fr/communes?codePostal=${postalCode}&fields=nom&limit=1`, {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          onCityChange(data[0].nom);
          setAutoCompleted(true);
        } else if (autoCompleted) {
          onCityChange("");
          setAutoCompleted(false);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postalCode]);

  const handlePostalCodeChange = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 5);
    onPostalCodeChange(cleaned);
  };

  return (
    <div className="space-y-3">
      <div>
        <Label htmlFor={postalCodeId} className="text-sm font-semibold">
          {postalCodeLabel} {required && "*"}
        </Label>
        <Input
          id={postalCodeId}
          value={postalCode}
          onChange={(e) => handlePostalCodeChange(e.target.value)}
          placeholder="Ex : 06000"
          className="mt-1.5"
          maxLength={5}
          inputMode="numeric"
        />
        {error && <p className="text-destructive text-xs mt-1">{error}</p>}
        {loading && <p className="text-xs text-muted-foreground mt-1">Recherche…</p>}
      </div>
      {(city || postalCode.length === 5) && (
        <div>
          <Label htmlFor={cityId} className="text-sm font-semibold">
            {cityLabel}
          </Label>
          <Input
            id={cityId}
            value={city}
            onChange={(e) => {
              onCityChange(e.target.value);
              setAutoCompleted(false);
            }}
            placeholder="Votre ville"
            className="mt-1.5"
            maxLength={100}
          />
          {city && postalCode.length === 5 && (
            <p className="text-xs text-muted-foreground mt-1">
              {city} ({postalCode})
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PostalCodeInput;
