import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";

const blogPosts = {
  "building-modern-web-apps": {
    title: "Building Modern Web Applications with React and TypeScript",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    category: "Development",
    image: post1,
    content: `
      <p class="text-xl text-muted-foreground mb-8">React and TypeScript have become the gold standard for building modern, scalable web applications. In this comprehensive guide, we'll explore the best practices and patterns that will help you create maintainable and performant applications.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Why React and TypeScript?</h2>
      <p class="mb-6">React's component-based architecture combined with TypeScript's static typing provides developers with a powerful toolkit for building complex user interfaces. TypeScript catches errors at compile time, making your code more robust and easier to maintain.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Component Architecture</h2>
      <p class="mb-6">A well-structured component architecture is crucial for maintainability. Follow these principles:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>Keep components small and focused on a single responsibility</li>
        <li>Use composition over inheritance</li>
        <li>Implement proper prop typing with TypeScript interfaces</li>
        <li>Separate business logic from presentation components</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">State Management Best Practices</h2>
      <p class="mb-6">Modern React provides multiple options for state management. Choose the right tool for your needs:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li><strong>Local State:</strong> Use useState for component-specific state</li>
        <li><strong>Context API:</strong> Perfect for global state that doesn't change often</li>
        <li><strong>React Query:</strong> Ideal for server state management</li>
        <li><strong>Zustand/Redux:</strong> For complex application state</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Performance Optimization</h2>
      <p class="mb-6">Performance is key to user experience. Here are essential optimization techniques:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>Use React.memo() for expensive components</li>
        <li>Implement code splitting with lazy loading</li>
        <li>Optimize re-renders with useMemo and useCallback</li>
        <li>Leverage virtual scrolling for large lists</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Conclusion</h2>
      <p class="mb-6">Building modern web applications requires careful consideration of architecture, state management, and performance. By following these best practices and leveraging the power of React and TypeScript, you can create applications that are both powerful and maintainable.</p>
    `
  },
  "future-web-development-2024": {
    title: "The Future of Web Development: Trends to Watch in 2024",
    date: "Mar 12, 2024",
    readTime: "6 min read",
    category: "Technology",
    image: post2,
    content: `
      <p class="text-xl text-muted-foreground mb-8">As we move through 2024, the web development landscape continues to evolve at a rapid pace. Let's explore the emerging technologies and methodologies that are shaping the future of our industry.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">AI-Powered Development</h2>
      <p class="mb-6">Artificial Intelligence is revolutionizing how we write code. AI-powered tools are becoming indispensable for:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>Code completion and suggestions</li>
        <li>Automated testing and bug detection</li>
        <li>Code review and optimization</li>
        <li>Documentation generation</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Edge Computing</h2>
      <p class="mb-6">Edge computing is bringing computation closer to users, resulting in faster load times and better user experiences. Platforms like Vercel Edge Functions and Cloudflare Workers are making it easier than ever to deploy code at the edge.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Web Assembly (WASM)</h2>
      <p class="mb-6">WebAssembly continues to mature, enabling high-performance applications that were previously only possible with native code. This opens up possibilities for:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>Gaming in the browser</li>
        <li>Video and audio editing tools</li>
        <li>Complex data visualization</li>
        <li>Scientific computing applications</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Serverless Architecture</h2>
      <p class="mb-6">The serverless paradigm continues to grow, allowing developers to focus on code rather than infrastructure. Benefits include automatic scaling, reduced costs, and simplified deployment.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Progressive Web Apps (PWAs)</h2>
      <p class="mb-6">PWAs bridge the gap between web and native applications, offering offline functionality, push notifications, and app-like experiences without the need for app store distribution.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Looking Ahead</h2>
      <p class="mb-6">The future of web development is exciting and full of possibilities. By staying informed about these trends and continuously learning, developers can build the next generation of web applications.</p>
    `
  },
  "mastering-css-layouts": {
    title: "Mastering CSS Grid and Flexbox for Modern Layouts",
    date: "Mar 10, 2024",
    readTime: "10 min read",
    category: "Design",
    image: post3,
    content: `
      <p class="text-xl text-muted-foreground mb-8">CSS Grid and Flexbox are two powerful layout systems that have revolutionized how we build responsive web designs. In this guide, we'll explore how to use them together to create beautiful, flexible layouts.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Understanding Flexbox</h2>
      <p class="mb-6">Flexbox is perfect for one-dimensional layouts - either rows or columns. It excels at:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>Distributing space between items</li>
        <li>Aligning items vertically and horizontally</li>
        <li>Handling dynamic content sizes</li>
        <li>Creating responsive navigation bars</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">When to Use CSS Grid</h2>
      <p class="mb-6">CSS Grid shines in two-dimensional layouts where you need control over both rows and columns. Use Grid for:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>Complex page layouts</li>
        <li>Card-based designs</li>
        <li>Photo galleries</li>
        <li>Magazine-style layouts</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Combining Grid and Flexbox</h2>
      <p class="mb-6">The real power comes from using Grid and Flexbox together. A common pattern is to use Grid for the overall page layout and Flexbox for components within grid items.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Responsive Design Patterns</h2>
      <p class="mb-6">Modern CSS layouts should be responsive by default. Key techniques include:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>Using auto-fit and auto-fill in Grid</li>
        <li>Implementing flex-wrap for flexible wrapping</li>
        <li>Utilizing min() and max() functions</li>
        <li>Creating fluid layouts with clamp()</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Common Pitfalls to Avoid</h2>
      <p class="mb-6">Even experienced developers can fall into these traps:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>Overusing Grid when Flexbox would suffice</li>
        <li>Not considering browser support</li>
        <li>Forgetting about accessibility</li>
        <li>Making layouts too rigid</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Final Thoughts</h2>
      <p class="mb-6">Mastering CSS Grid and Flexbox takes practice, but the investment is worth it. These tools give you unprecedented control over your layouts while maintaining simplicity and flexibility.</p>
    `
  },
  "react-performance-optimization": {
    title: "Performance Optimization Techniques for React Applications",
    date: "Mar 8, 2024",
    readTime: "7 min read",
    category: "Development",
    image: post1,
    content: `
      <p class="text-xl text-muted-foreground mb-8">Performance is critical for user experience. In this guide, we'll explore practical strategies to optimize your React applications for speed and efficiency.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Measuring Performance</h2>
      <p class="mb-6">Before optimizing, you need to measure. Use these tools:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>React DevTools Profiler</li>
        <li>Chrome DevTools Performance tab</li>
        <li>Lighthouse for overall metrics</li>
        <li>Web Vitals for real user metrics</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Code Splitting</h2>
      <p class="mb-6">Load only what you need, when you need it. Implement code splitting using React.lazy() and Suspense to reduce initial bundle size and improve load times.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Memoization Strategies</h2>
      <p class="mb-6">Prevent unnecessary re-renders with these techniques:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>React.memo() for component memoization</li>
        <li>useMemo() for expensive calculations</li>
        <li>useCallback() for function references</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Virtual Scrolling</h2>
      <p class="mb-6">For large lists, render only visible items using libraries like react-window or react-virtualized. This dramatically improves performance when dealing with thousands of items.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Image Optimization</h2>
      <p class="mb-6">Images often account for most of a page's weight. Optimize them by:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>Using modern formats like WebP</li>
        <li>Implementing lazy loading</li>
        <li>Responsive images with srcset</li>
        <li>Using CDNs for delivery</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Conclusion</h2>
      <p class="mb-6">Performance optimization is an ongoing process. Monitor your application regularly and apply these techniques where they make the most impact.</p>
    `
  },
  "design-systems-guide": {
    title: "Design Systems: Creating Consistency Across Your Products",
    date: "Mar 5, 2024",
    readTime: "9 min read",
    category: "Design",
    image: post2,
    content: `
      <p class="text-xl text-muted-foreground mb-8">A well-designed system is the foundation of consistent, scalable product design. Learn how to build and maintain a design system that grows with your organization.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">What is a Design System?</h2>
      <p class="mb-6">A design system is more than a component library - it's a complete set of standards, documentation, and principles that guide product development. It includes colors, typography, spacing, components, and patterns.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Building Your Foundation</h2>
      <p class="mb-6">Start with the basics:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>Define your color palette and usage</li>
        <li>Establish typography scales</li>
        <li>Create spacing and sizing scales</li>
        <li>Document accessibility standards</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Component Development</h2>
      <p class="mb-6">Build components that are reusable, accessible, and well-documented. Each component should have clear props, variants, and usage examples.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Documentation is Key</h2>
      <p class="mb-6">Your design system is only as good as its documentation. Include:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>Component guidelines and examples</li>
        <li>Design principles and philosophy</li>
        <li>Code snippets and API references</li>
        <li>Accessibility considerations</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Maintaining Your System</h2>
      <p class="mb-6">A design system is never "done." It needs regular maintenance:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li>Regular audits for consistency</li>
        <li>Version control and changelogs</li>
        <li>Feedback loops with users</li>
        <li>Continuous improvement</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Adoption Strategies</h2>
      <p class="mb-6">Getting teams to adopt your design system requires effort. Provide excellent documentation, host workshops, and gather feedback regularly to ensure your system meets real needs.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Wrapping Up</h2>
      <p class="mb-6">Building a design system is an investment that pays dividends in consistency, efficiency, and product quality. Start small, iterate often, and grow your system with your organization.</p>
    `
  },
  "typescript-beginners-guide": {
    title: "Introduction to TypeScript: A Beginner's Guide",
    date: "Mar 1, 2024",
    readTime: "5 min read",
    category: "Development",
    image: post3,
    content: `
      <p class="text-xl text-muted-foreground mb-8">TypeScript has become essential for modern JavaScript development. If you're new to TypeScript, this guide will help you get started with confidence.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">What is TypeScript?</h2>
      <p class="mb-6">TypeScript is a superset of JavaScript that adds static typing. It compiles to plain JavaScript, so it works anywhere JavaScript works. The main benefit is catching errors at compile time rather than runtime.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Basic Types</h2>
      <p class="mb-6">TypeScript provides several basic types:</p>
      <ul class="list-disc list-inside space-y-2 mb-6 ml-4">
        <li><strong>string:</strong> Text values</li>
        <li><strong>number:</strong> Numeric values</li>
        <li><strong>boolean:</strong> true or false</li>
        <li><strong>array:</strong> Collections of values</li>
        <li><strong>object:</strong> Complex data structures</li>
      </ul>

      <h2 class="text-3xl font-bold mt-12 mb-4">Interfaces and Types</h2>
      <p class="mb-6">Define the shape of objects using interfaces or type aliases. This helps catch bugs and provides excellent autocomplete in your editor.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Functions in TypeScript</h2>
      <p class="mb-6">Type your function parameters and return values for better code reliability. TypeScript will warn you if you try to pass the wrong type or use the return value incorrectly.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Generics</h2>
      <p class="mb-6">Generics allow you to write flexible, reusable code while maintaining type safety. They're especially useful for utility functions and data structures.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Getting Started</h2>
      <p class="mb-6">The best way to learn TypeScript is to start using it. Begin with simple projects, gradually add types to your code, and let the compiler guide you. The TypeScript playground is a great place to experiment.</p>

      <h2 class="text-3xl font-bold mt-12 mb-4">Next Steps</h2>
      <p class="mb-6">Once you're comfortable with the basics, explore advanced features like utility types, decorators, and module augmentation. TypeScript's documentation is excellent and should be your go-to resource.</p>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">

      {/* Hero Section */}
      <article className="animate-fade-in">
        <div className="relative overflow-hidden bg-gradient-to-b from-accent/10 to-transparent">
          <div className="container mx-auto px-4 py-12">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Blog
              </Button>
            </Link>

            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full bg-accent text-accent-foreground mb-4">
                {post.category}
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                {post.title}
              </h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {post.readTime}
                </span>
                <Button variant="ghost" size="icon" className="ml-auto hover-scale">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div
            className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-accent prose-a:story-link prose-a:no-underline prose-img:rounded-lg animate-fade-in"
            style={{ animationDelay: "0.3s" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Share this article</h3>
              <Button className="group">
                <Share2 className="mr-2 w-4 h-4 transition-transform group-hover:scale-110" />
                Share
              </Button>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="max-w-4xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Link to="/blog">
              <Button variant="outline" className="group">
                <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" />
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
