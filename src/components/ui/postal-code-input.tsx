import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// French postal code to city mapping (06 department - Alpes-Maritimes)
const postalCodeMap: Record<string, string> = {
  "06000": "Nice",
  "06100": "Nice",
  "06200": "Nice",
  "06300": "Nice",
  "06400": "Cannes",
  "06110": "Le Cannet",
  "06130": "Grasse",
  "06140": "Vence",
  "06150": "Cannes La Bocca",
  "06160": "Antibes",
  "06210": "Mandelieu-la-Napoule",
  "06220": "Vallauris",
  "06230": "Villefranche-sur-Mer",
  "06240": "Beausoleil",
  "06250": "Mougins",
  "06260": "Puget-Théniers",
  "06270": "Villeneuve-Loubet",
  "06310": "Beaulieu-sur-Mer",
  "06320": "Cap-d'Ail",
  "06330": "Roquefort-les-Pins",
  "06340": "La Trinité",
  "06360": "Èze",
  "06370": "Mouans-Sartoux",
  "06380": "Sospel",
  "06390": "Contes",
  "06410": "Biot",
  "06420": "Isola",
  "06430": "Saint-Dalmas-de-Tende",
  "06440": "L'Escarène",
  "06450": "Roquebillière",
  "06460": "Saint-Vallier-de-Thiey",
  "06480": "La Colle-sur-Loup",
  "06500": "Menton",
  "06510": "Carros",
  "06520": "Magagnosc",
  "06530": "Peymeinade",
  "06540": "Breil-sur-Roya",
  "06550": "La Roquette-sur-Siagne",
  "06560": "Valbonne",
  "06570": "Saint-Paul-de-Vence",
  "06580": "Pégomas",
  "06590": "Théoule-sur-Mer",
  "06600": "Antibes",
  "06610": "La Gaude",
  "06620": "Le Bar-sur-Loup",
  "06630": "Les Moulins",
  "06640": "Saint-Jeannet",
  "06650": "Opio",
  "06670": "Levens",
  "06690": "Tourrette-Levens",
  "06700": "Saint-Laurent-du-Var",
  "06710": "Villars-sur-Var",
  "06720": "Castellar",
  "06730": "Saint-André-de-la-Roche",
  "06740": "Châteauneuf-Grasse",
  "06750": "Andon",
  "06800": "Cagnes-sur-Mer",
  "06810": "Auribeau-sur-Siagne",
  "06820": "Grasse",
  "06830": "Gilette",
  "06850": "Saint-Auban",
  "06860": "Théoule-sur-Mer",
  "06870": "Mougins",
  "06880": "Auribeau-sur-Siagne",
  "06890": "Beausoleil",
  "06901": "Sophia Antipolis",
  "06902": "Sophia Antipolis",
  "06903": "Sophia Antipolis",
  "06904": "Nice Cedex",
  "06905": "Nice Cedex",
};

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

  const handlePostalCodeChange = (value: string) => {
    // Only allow digits, max 5
    const cleaned = value.replace(/\D/g, "").slice(0, 5);
    onPostalCodeChange(cleaned);

    if (cleaned.length === 5 && postalCodeMap[cleaned]) {
      onCityChange(postalCodeMap[cleaned]);
      setAutoCompleted(true);
    } else if (cleaned.length === 5 && !postalCodeMap[cleaned]) {
      // Unknown postal code, clear city for manual input
      if (autoCompleted) {
        onCityChange("");
        setAutoCompleted(false);
      }
    }
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
          placeholder="06000"
          className="mt-1.5"
          maxLength={5}
          inputMode="numeric"
        />
        {error && <p className="text-destructive text-xs mt-1">{error}</p>}
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
