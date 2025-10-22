import React, { useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import BlogCard from "@/components/sections/BlogCard";
import FeaturedPost from "@/components/sections/FeaturedPost";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import blogHero from "@/assets/blog-hero.jpg";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";

const Blog = () => {

  useEffect(() => {
    // ✅ Scroll to top whenever this page loads
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const featuredPost = {
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt: "Explore the best practices and patterns for creating scalable, maintainable web applications using React 18 and TypeScript. Learn about component architecture, state management, and performance optimization.",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    category: "Development",
    image: post1,
    slug: "building-modern-web-apps"
  };

  const posts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Discover the emerging technologies and methodologies shaping the future of web development, from AI integration to edge computing.",
      date: "Mar 12, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: post2,
      slug: "future-web-development-2024"
    },
    {
      title: "Mastering CSS Grid and Flexbox for Modern Layouts",
      excerpt: "A comprehensive guide to creating responsive, beautiful layouts using CSS Grid and Flexbox together in harmony.",
      date: "Mar 10, 2024",
      readTime: "10 min read",
      category: "Design",
      image: post3,
      slug: "mastering-css-layouts"
    },
    {
      title: "Performance Optimization Techniques for React Applications",
      excerpt: "Learn practical strategies to optimize your React applications for better performance and user experience.",
      date: "Mar 8, 2024",
      readTime: "7 min read",
      category: "Development",
      image: post1,
      slug: "react-performance-optimization"
    },
    {
      title: "Design Systems: Creating Consistency Across Your Products",
      excerpt: "How to build and maintain a robust design system that scales with your organization and products.",
      date: "Mar 5, 2024",
      readTime: "9 min read",
      category: "Design",
      image: post2,
      slug: "design-systems-guide"
    },
    {
      title: "Introduction to TypeScript: A Beginner's Guide",
      excerpt: "Get started with TypeScript and learn how it can improve your JavaScript development workflow.",
      date: "Mar 1, 2024",
      readTime: "5 min read",
      category: "Development",
      image: post3,
      slug: "typescript-beginners-guide"
    }
  ];

  const categories = ["All", "Development", "Design", "Technology"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${blogHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in">
              Blog & Insights
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Thoughts on design, development, and everything in between
            </p>

            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-12 h-12 bg-background/80 backdrop-blur-sm border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <div className="flex gap-3 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-scale ${category === "All"
                ? "bg-accent text-accent-foreground shadow-[var(--shadow-card)]"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 py-8 animate-scale-in" style={{ animationDelay: "0.3s" }}>
        <FeaturedPost {...featuredPost} />
      </section>

      {/* Recent Posts */}
      <section className="container mx-auto px-4 py-12 pb-24">
        <h2 className="text-3xl font-bold mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>Recent Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={post.slug} className="animate-scale-in" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
