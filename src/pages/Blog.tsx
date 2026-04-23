import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import ArticleCard from "@/components/blog/ArticleCard";
import BlogCTASection from "@/components/blog/BlogCTASection";
import { Button } from "@/components/ui/button";
import { ARTICLES, BLOG_CATEGORIES, type BlogCategory } from "@/data/blog";

type Filter = "Tous les articles" | BlogCategory;

const FILTERS: Filter[] = ["Tous les articles", ...BLOG_CATEGORIES];

const Blog = () => {
  const [filter, setFilter] = useState<Filter>("Tous les articles");

  useEffect(() => {
    document.title = "Blog MSP — Du sport sans l'organiser";
    const desc = "Conseils simples pour bouger plus facilement, sans pression, près de chez toi sur la Côte d'Azur.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  const filtered =
    filter === "Tous les articles" ? ARTICLES : ARTICLES.filter((a) => a.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Du sport sans <span className="text-gradient">l'organiser</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Des conseils simples pour bouger plus facilement, sans pression, près de chez toi.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters + Grid */}
        <section className="pb-24 bg-background">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
              {FILTERS.map((f) => {
                const active = f === filter;
                return (
                  <Button
                    key={f}
                    variant={active ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter(f)}
                    className="rounded-full"
                  >
                    {f}
                  </Button>
                );
              })}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {filtered.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground mt-12">
                Aucun article dans cette catégorie pour le moment.
              </p>
            )}
          </div>
        </section>

        <BlogCTASection />
        <Footer />
      </main>
    </div>
  );
};

export default Blog;
