import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import type { BlogArticle } from "@/data/blog";

interface ArticleCardProps {
  article: BlogArticle;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
    >
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          width={1024}
          height={640}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
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
        <h3 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1">{article.description}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
