import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { CrownIcon } from "./crown-icon";

export function Footer() {
  const quickLinks = [
    { href: "#doors", label: "الأبواب المصفحة" },
    { href: "#kitchens", label: "المطابخ الألوميتال" },
    { href: "#gallery", label: "معرض الأعمال" },
    { href: "#testimonials", label: "آراء العملاء" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  const services = [
    "تصنيع أبواب مصفحة",
    "مطابخ ألوميتال مخصصة",
    "تركيب وصيانة",
    "استشارات تقنية",
    "خدمة ما بعد البيع",
  ];

  const socialLinks = [
    { icon: "facebook", href: "#", label: "فيسبوك" },
    { icon: "instagram", href: "#", label: "انستجرام" },
    { icon: "linkedin", href: "#", label: "لينكد إن" },
    { icon: "youtube", href: "#", label: "يوتيوب" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-king-black border-t border-king-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-reverse space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-king-gold to-king-gold-light rounded-full flex items-center justify-center">
                <CrownIcon className="w-6 h-6 text-king-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold king-crown" data-testid="footer-logo-title">KING METAL</h3>
                <p className="text-xs text-king-gold/70">ملوك الالوميتال</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4" data-testid="footer-company-description">
              الشركة الرائدة في صناعة الأبواب المصفحة والمطابخ الألوميتال في مصر، نقدم منتجات فاخرة بأعلى معايير الجودة والأمان.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4 text-king-gold" data-testid="footer-quick-links-title">
              روابط سريعة
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-king-gold transition-colors text-right w-full"
                    data-testid={`footer-quick-link-${index}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-king-gold" data-testid="footer-services-title">
              خدماتنا
            </h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <li key={index} data-testid={`footer-service-${index}`}>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4 text-king-gold" data-testid="footer-contact-title">
              معلومات التواصل
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-king-gold ml-3 flex-shrink-0" />
                <a
                  href="tel:+201234567890"
                  className="text-gray-400 hover:text-white transition-colors"
                  data-testid="footer-contact-phone"
                >
                  +20 123 456 7890
                </a>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 text-green-400 ml-3 flex-shrink-0" />
                <a
                  href="https://wa.me/201234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  data-testid="footer-contact-whatsapp"
                >
                  واتساب
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-king-gold ml-3 flex-shrink-0" />
                <a
                  href="mailto:info@kingmetal.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  data-testid="footer-contact-email"
                >
                  info@kingmetal.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-king-gold ml-3 flex-shrink-0" />
                <span className="text-gray-400" data-testid="footer-contact-location">
                  القاهرة، مصر
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-king-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center md:text-right mb-4 md:mb-0">
            <p className="text-gray-400" data-testid="footer-copyright">
              &copy; 2024 KING METAL. جميع الحقوق محفوظة.
            </p>
          </div>
          
          <div className="flex space-x-reverse space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={social.icon}
                href={social.href}
                className="text-gray-400 hover:text-king-gold transition-colors"
                aria-label={social.label}
                data-testid={`footer-social-${social.icon}`}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {social.icon === 'facebook' && '📘'}
                  {social.icon === 'instagram' && '📷'}
                  {social.icon === 'linkedin' && '💼'}
                  {social.icon === 'youtube' && '📺'}
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
