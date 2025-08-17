import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CrownIcon } from "./crown-icon";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#doors", label: "الأبواب المصفحة" },
    { href: "#kitchens", label: "المطابخ الألوميتال" },
    { href: "#gallery", label: "أعمالنا" },
    { href: "#testimonials", label: "آراء العملاء" },
    { href: "#specs", label: "المواصفات" },
    { href: "#faq", label: "الأسئلة الشائعة" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-blur border-b border-king-gold/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-reverse space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 bg-king-gray rounded-full flex items-center justify-center border border-king-steel/30">
              <CrownIcon className="w-8 h-8 text-king-gold" />
            </div>
            <div>
              <h1 className="text-xl font-bold king-crown" data-testid="logo-title">KING METAL</h1>
              <p className="text-xs text-king-gold/70">ملوك الالوميتال</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-reverse space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                className="text-sm hover:text-king-gold transition-colors"
                onClick={() => scrollToSection(link.href)}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                data-testid={`nav-link-${link.href.slice(1)}`}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-reverse space-x-4">
            <Button
              size="sm"
              className="bg-king-gray hover:bg-king-steel text-white border border-king-steel/30"
              asChild
              data-testid="button-call"
            >
              <a href="tel:+201234567890">
                <Phone className="w-4 h-4 ml-2" />
                اتصل الآن
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white border border-green-500/30"
              asChild
              data-testid="button-whatsapp"
            >
              <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 ml-2" />
                واتساب
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-king-steel hover:bg-king-steel text-white"
              data-testid="button-language"
            >
              EN
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2 hover:bg-king-gold/10 text-king-gold"
                data-testid="button-mobile-menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-king-black border-king-gold/20 text-white">
              <div className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    className="text-right hover:text-king-gold transition-colors text-lg"
                    onClick={() => scrollToSection(link.href)}
                    data-testid={`mobile-nav-link-${link.href.slice(1)}`}
                  >
                    {link.label}
                  </button>
                ))}
                
                <div className="flex flex-col space-y-4 pt-6 border-t border-king-gold/20">
                  <Button
                    className="bg-king-gray hover:bg-king-steel text-white"
                    asChild
                  >
                    <a href="tel:+201234567890">
                      <Phone className="w-4 h-4 ml-2" />
                      اتصل الآن
                    </a>
                  </Button>
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white"
                    asChild
                  >
                    <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 ml-2" />
                      واتساب
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
