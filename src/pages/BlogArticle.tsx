import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/landing/Footer";
import BlogCTASection from "@/components/blog/BlogCTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NotFound from "@/pages/NotFound";
import { getArticleBySlug, type ArticleSection } from "@/data/blogArticles";

const renderSection = (section: ArticleSection, idx: number) => {
  switch (section.type) {
    case "intro":
      return (
        <p key={idx} className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
          {section.text}
        </p>
      );
    case "quickAnswer":
      return (
        <div
          key={idx}
          className="bg-muted rounded-2xl p-6 md:p-8 my-8 border-l-4 border-primary"
        >
          <p className="font-bold text-base md:text-lg mb-2">{section.question}</p>
          <p className="text-muted-foreground leading-relaxed">→ {section.answer}</p>
        </div>
      );
    case "h2":
      return (
        <h2 key={idx} className="text-2xl md:text-3xl font-bold mt-12 mb-4">
          {section.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={idx} className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul key={idx} className="space-y-2 my-4 list-disc pl-6">
          {section.items.map((item, i) => (
            <li key={i} className="text-base md:text-lg text-foreground/80 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case "highlight":
      return (
        <p
          key={idx}
          className="text-xl md:text-2xl font-bold text-gradient leading-snug my-8"
        >
          {section.text}
        </p>
      );
    default:
      return null;
  }
};

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const useLocalGroupCta =
    article?.slug === "faire-du-sport-pres-de-chez-vous-nice" ||
    article?.slug === "pourquoi-je-n-arrive-pas-a-etre-regulier-dans-le-sport" ||
    article?.slug === "faire-du-sport-quand-on-travaille" ||
    article?.slug === "faire-du-sport-sans-motivation";
  useEffect(() => {
    if (!article) return;
    document.title = article.metaTitle;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", article.metaDescription);
    window.scrollTo(0, 0);
  }, [article]);

  if (!article) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour au blog
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2 flex-wrap mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {article.category}
                  </span>
                  {article.location && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      <MapPin className="w-3 h-3" />
                      {article.location}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                  {article.title}
                </h1>
                <p className="text-sm text-muted-foreground mb-3">{article.date}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cover image */}
        <section className="pb-12">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={article.image}
                  alt={article.featuredImageAlt}
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="pb-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              {article.content.map(renderSection)}
            </div>
          </div>
        </article>

        {/* CTA — same component as homepage */}
        <BlogCTASection
          buttonLabel={useLocalGroupCta ? "Rejoins un groupe près de chez toi" : undefined}
          subText={useLocalGroupCta ? "Réponse immédiate sur WhatsApp, en privé" : undefined}
          microText={
            useLocalGroupCta ? "Pas de groupe WhatsApp. Juste un échange rapide." : undefined
          }
          ctaLocation="end_article"
          pageType="article"
          articleSlug={article.slug}
        />

        {/* FAQ */}
        {article.faq.length > 0 && (
          <section className="py-20 md:py-24 bg-muted/30">
            <div className="container">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
                  Questions <span className="text-gradient">fréquentes</span>
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {article.faq.map((f, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="bg-card rounded-xl shadow-card border-none px-5"
                    >
                      <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-4 text-left">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-muted-foreground pb-4">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </div>
  );
};

export default BlogArticle;
