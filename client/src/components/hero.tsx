import { motion } from "framer-motion";
import { Calendar, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CrownIcon } from "./crown-icon";
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/animations";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: "🛡️",
      title: "أمان مطلق",
      description: "أبواب مصفحة بأحدث تقنيات الأمان",
    },
    {
      icon: "💎",
      title: "جودة فاخرة",
      description: "خامات عالية الجودة وتشطيبات راقية",
    },
    {
      icon: "🔧",
      title: "خبرة احترافية",
      description: "سنوات من الخبرة في صناعة الألوميتال",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 steel-texture" />
      <div className="absolute inset-0 bg-gradient-to-bl from-king-black via-king-gray to-king-black opacity-90" />
      {/* Blue Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-king-blue-glow/20 to-transparent blur-3xl opacity-40" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-king-blue-light/15 to-transparent blur-2xl opacity-30" />
      
      {/* Animated Crown Pattern */}
      <motion.div
        className="absolute top-20 right-20 opacity-10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <CrownIcon className="w-32 h-32 text-king-gold" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-20 opacity-10"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 1,
        }}
      >
        <CrownIcon className="w-24 h-24 text-king-gold" />
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Crown Logo */}
        <motion.div className="mb-8 flex justify-center" variants={fadeIn}>
          <div className="w-32 h-32 steel-texture rounded-full flex items-center justify-center shadow-2xl blue-glow border-2 border-king-gold/30">
            <CrownIcon className="w-20 h-20 text-king-gold" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={fadeInUp}>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="king-crown font-royal" data-testid="text-main-title">KING METAL</span>
            <br />
            <span className="text-3xl md:text-5xl font-arabic text-king-gold">ملوك الالوميتال فى مصر</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div variants={fadeInUp}>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            أبواب مصفحة فاخرة ومطابخ ألوميتال بمعايير الملك
            <br />
            <span className="text-king-gold font-medium">جودة استثنائية • تصميم راقي • أمان مطلق</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={fadeInUp}
        >
          <Button
            size="lg"
            className="px-8 py-4 bg-gradient-to-r from-king-gold to-king-gold-light text-king-black font-royal font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-xl shine-effect blue-glow"
            onClick={() => scrollToSection("contact")}
            data-testid="button-book-inspection"
          >
            <Calendar className="w-5 h-5 ml-2" />
            احجز معاينة مجانية
          </Button>
          <Button
            size="lg"
            className="px-8 py-4 button-door text-white font-royal font-bold rounded-xl relative z-10"
            onClick={() => scrollToSection("gallery")}
            data-testid="button-view-gallery"
          >
            <Images className="w-5 h-5 ml-2 relative z-20" />
            <span className="relative z-20">شاهد أعمالنا</span>
          </Button>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="glass-morphism p-6 text-center border-king-gold/20 bg-king-gray/50">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold mb-2 text-white" data-testid={`feature-title-${index}`}>{feature.title}</h3>
                <p className="text-sm text-gray-400" data-testid={`feature-description-${index}`}>{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
