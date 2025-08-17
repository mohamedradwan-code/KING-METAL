import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, User } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "أحمد محمد",
      role: "مالك فيلا",
      rating: 5,
      comment: "خدمة ممتازة وجودة عالية في الأبواب المصفحة. الفريق محترف جداً والتسليم في الموعد المحدد. أنصح بشدة.",
    },
    {
      id: 2,
      name: "فاطمة علي",
      role: "صاحبة شقة",
      rating: 5,
      comment: "مطبخي الألوميتال الجديد رائع! التصميم عصري والجودة فائقة. شكراً لفريق KING METAL على الإبداع.",
    },
    {
      id: 3,
      name: "محمود سالم",
      role: "مدير شركة",
      rating: 5,
      comment: "تعاملت معهم في مشروع تجاري كبير. الاحترافية والالتزام بالمواعيد كان مثالياً. أفضل شركة ألوميتال في مصر.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-king-gray to-king-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 king-crown" data-testid="testimonials-title">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="testimonials-description">
            شهادات حقيقية من عملاء راضين عن خدماتنا المتميزة
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.id} variants={fadeInUp}>
              <Card className="glass-morphism p-8 rounded-2xl border-king-gold/20 bg-king-gray/50 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-king-gold to-king-gold-light rounded-full flex items-center justify-center ml-4">
                    <User className="w-6 h-6 text-king-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white" data-testid={`testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400" data-testid={`testimonial-role-${testimonial.id}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <div className="flex text-king-gold mb-4" data-testid={`testimonial-rating-${testimonial.id}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed" data-testid={`testimonial-comment-${testimonial.id}`}>
                  "{testimonial.comment}"
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
