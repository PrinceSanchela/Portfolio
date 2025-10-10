import React, { useRef } from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import RevealOnScroll from "./RevealOnScroll";

const Contact: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: ""
  // });
  type Errors = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const form = useRef<HTMLFormElement>(null);

  // Validation function
  const validateForm = (): boolean => {
    let valid = true;
    const newErrors = { name: "", email: "", subject: "", message: "" };
    const name = (form.current?.user_name.value || "").trim();
    const email = (form.current?.user_email.value || "").trim();
    const subject = (form.current?.subject.value || "").trim();
    const message = (form.current?.message.value || "").trim();

    // Validate Name
    if (!name) {
      newErrors.name = "Please enter your name.";
      valid = false;
    }

    // Validate Email
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email.";
      valid = false;
    }

    // Validate Message
    if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // 🔹 Send email handler
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current || !validateForm()) return;

    emailjs
      .sendForm(
        "service_yzyclmc", // your service ID
        "template_yha283u", // your template ID
        form.current,
        "cWgs3jQaP0aS2QmiH" // your public key
      )
      .then(
        () => {
          alert(" Message sent successfully!");
          form.current?.reset();
          setErrors({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Something went wrong. Please try again later.");
        }
      );

  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // Basic validation
  //   if (!formData.name || !formData.email || !formData.message) {
  //     toast({
  //       title: "Validation Error",
  //       description: "Please fill in all required fields.",
  //       variant: "destructive"
  //     });
  //     return;
  //   }

  //   // Simulate form submission
  //   toast({
  //     title: "Message Sent!",
  //     description: "Thank you for your message. I'll get back to you soon!",
  //   });

  //   // Reset form
  //   setFormData({ name: "", email: "", subject: "", message: "" });
  // };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "princesanchela@gmail.com",
      href: "mailto:princesanchela@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 94288 33210",
      href: "tel:+919428833210"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/PrinceSanchela",
      color: "hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prince-sanchela",
      color: "hover:text-blue-500"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/princesanchela",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s <span className="text-primary">Work</span> Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I&apos;m always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm animate-fade-up">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="user_name"
                        placeholder="Your name"
                        required
                        className={`bg-background/50 focus:outline-none focus:ring-2 ${errors.name ? "ring-red-500" : "focus:ring-blue-500"
                          }`}
                      />
                      {errors.name && (
                        <span className="text-red-400 text-sm">{errors.name}</span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="user_email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className={`bg-background/50 focus:outline-none focus:ring-2 ${errors.email ? "ring-red-500" : "focus:ring-blue-500"
                          }`}
                      />
                      {errors.email && (
                        <span className="text-red-400 text-sm">{errors.email}</span>
                      )}

                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="What's this about?"
                      className={`bg-background/50 focus:outline-none focus:ring-2 ${errors.subject ? "ring-red-500" : "focus:ring-blue-500"
                        }`}
                    />
                    {errors.subject && (
                      <span className="text-red-400 text-sm">{errors.subject}</span>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      rows={6}
                      required
                      className={`bg-background/50 resize-none focus:outline-none focus:ring-2 ${errors.message ? "ring-red-500" : "focus:ring-blue-500"
                        }`}
                    />
                    {errors.message && (
                      <span className="text-red-400 text-sm">{errors.message}</span>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-glow shadow-glow hover:shadow-glow transition-all duration-300 "
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-up " style={{ animationDelay: "0.1s" }}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 bg-muted/50 rounded-lg text-muted-foreground ${social.color} transition-all duration-200 hover:scale-110`}
                          aria-label={social.label}
                        >
                          <Icon size={24} />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Quick Response</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I typically respond to messages within 24 hours. For urgent matters,
                    feel free to reach out via phone or LinkedIn for faster communication.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;