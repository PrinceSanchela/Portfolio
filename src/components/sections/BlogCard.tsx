import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, date, readTime, category, image, slug }: BlogCardProps) => {
  return (
    <article className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-500 hover:-translate-y-1">
      <Link to={`/blog/${slug}`}>
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </div>
          
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent mb-3">
            {category}
          </span>
          
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors duration-300 story-link">
            {title}
          </h3>
          
          <p className="text-muted-foreground line-clamp-2">
            {excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
