import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DayPicker } from "react-day-picker"; // or similar


interface FeaturedPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const FeaturedPost = ({ title, excerpt, date, readTime, category, image, slug }: FeaturedPostProps) => {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-card border border-border group hover:shadow-[var(--shadow-elegant)] transition-all duration-500">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent md:hidden" />
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground mb-4 w-fit">
            Featured
          </span>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
            <span className="text-accent">{category}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-accent transition-colors duration-300 story-link">
            {title}
          </h2>

          <p className="text-muted-foreground text-lg mb-6 line-clamp-3">
            {excerpt}
          </p>

          <Link to={`/blog/${slug}`}>
            <Button className="group/btn">
              Read Article
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPost;
