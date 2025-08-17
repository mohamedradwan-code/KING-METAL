import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function FAQ() {
  const faqs = [
    {
      id: "item-1",
      question: "ما هي المدة المتوقعة لتسليم الأبواب المصفحة؟",
      answer: "عادةً ما نحتاج من 2-3 أسابيع لتصنيع وتركيب الأبواب المصفحة، حسب التصميم المطلوب ومدى تعقيد المواصفات. نقدم خدمة تسليم سريعة للحالات العاجلة.",
    },
    {
      id: "item-2",
      question: "هل تقدمون ضمان على المنتجات؟",
      answer: "نعم، نقدم ضمان شامل لمدة 5 سنوات على الأبواب المصفحة و3 سنوات على المطابخ الألوميتال، يشمل الضمان أي عيوب في التصنيع أو المواد المستخدمة.",
    },
    {
      id: "item-3",
      question: "هل يمكن تخصيص التصميم حسب المساحة المتاحة؟",
      answer: "بالطبع! نقوم بزيارة موقع العمل وأخذ القياسات الدقيقة لضمان التصميم المثالي. نوفر حلول مخصصة تماماً لكل مساحة وكل احتياج.",
    },
    {
      id: "item-4",
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل الدفع نقداً أو بالتحويل البنكي. نوفر أيضاً أنظمة دفع مرنة بالتقسيط لتسهيل عملية الشراء على عملائنا الكرام.",
    },
    {
      id: "item-5",
      question: "هل تقدمون خدمة ما بعد البيع؟",
      answer: "نعم، لدينا فريق متخصص لخدمة ما بعد البيع يشمل الصيانة الدورية والإصلاحات وقطع الغيار الأصلية. نحن ملتزمون برضا العملاء على المدى الطويل.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-king-gray">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 king-crown" data-testid="faq-title">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="faq-description">
            إجابات شاملة لأكثر الأسئلة شيوعاً حول منتجاتنا وخدماتنا
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={faq.id} variants={fadeInUp}>
                <AccordionItem 
                  value={faq.id} 
                  className="glass-morphism rounded-2xl border-king-gold/20 bg-king-gray/50 px-8 data-[state=open]:border-king-gold/40"
                  data-testid={`faq-item-${index + 1}`}
                >
                  <AccordionTrigger className="text-right hover:text-king-gold transition-colors text-lg font-medium text-white py-6 hover:no-underline">
                    <span data-testid={`faq-question-${index + 1}`}>{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed pb-6">
                    <p data-testid={`faq-answer-${index + 1}`}>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
