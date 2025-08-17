import { Shield, Utensils, Images, Users, Settings, HelpCircle } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { DoorPanel } from "@/components/door-panel";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { ContactForm } from "@/components/contact-form";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const doorPanels = [
    {
      icon: <Shield className="text-2xl text-king-gold" />,
      title: "الأبواب المصفحة",
      description: "أبواب مصفحة فاخرة بأحدث معايير الأمان والجودة",
      features: [
        "تصنيع سُمك عالي",
        "أنظمة غلق متعددة",
        "عزل صوت وحرارة",
        "تشطيبات فاخرة",
      ],
      dataTestId: "door-panel-doors",
    },
    {
      icon: <Utensils className="text-2xl text-king-gold" />,
      title: "المطابخ الألوميتال",
      description: "مطابخ ألوميتال عصرية بتصميمات فاخرة ومتانة عالية",
      features: [
        "مقاوم للرطوبة",
        "مفصلات هيدروليك",
        "ألوان وأنسجة معدنية",
        "تصميم حسب الطلب",
      ],
      dataTestId: "door-panel-kitchens",
    },
    {
      icon: <Images className="text-3xl text-king-gold" />,
      title: "معرض الأعمال",
      description: "شاهد مجموعة من أفضل أعمالنا المنجزة",
      features: [],
      buttonText: "عرض الصور",
      onClick: () => scrollToSection("gallery"),
      dataTestId: "door-panel-gallery",
    },
    {
      icon: <Users className="text-3xl text-king-gold" />,
      title: "آراء العملاء",
      description: "اقرأ تجارب عملائنا الكرام معنا",
      features: [],
      buttonText: "قراءة التقييمات",
      onClick: () => scrollToSection("testimonials"),
      dataTestId: "door-panel-testimonials",
    },
    {
      icon: <Settings className="text-3xl text-king-gold" />,
      title: "المواصفات التقنية",
      description: "تفاصيل فنية شاملة لجميع منتجاتنا",
      features: [],
      buttonText: "عرض المواصفات",
      dataTestId: "door-panel-specs",
    },
    {
      icon: <HelpCircle className="text-3xl text-king-gold" />,
      title: "الأسئلة الشائعة",
      description: "إجابات لأكثر الأسئلة شيوعاً",
      features: [],
      buttonText: "عرض الأسئلة",
      onClick: () => scrollToSection("faq"),
      dataTestId: "door-panel-faq",
    },
  ];

  return (
    <div className="min-h-screen bg-king-black text-white font-arabic" dir="rtl">
      <Navbar />
      <Hero />

      {/* Door Panels Section */}
      <section className="py-20 bg-gradient-to-b from-king-black to-king-gray">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 king-crown font-royal" data-testid="door-panels-title">
              منتجاتنا الملكية
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="door-panels-description">
              اكتشف مجموعتنا الفاخرة من الأبواب المصفحة والمطابخ الألوميتال
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {doorPanels.map((panel, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <DoorPanel
                  icon={panel.icon}
                  title={panel.title}
                  description={panel.description}
                  features={panel.features}
                  buttonText={panel.buttonText}
                  onClick={panel.onClick}
                  data-testid={panel.dataTestId}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Gallery />
      <Testimonials />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
}
