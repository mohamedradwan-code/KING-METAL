import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Phone, MessageCircle, Mail, MapPin, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { fadeInUp, slideInFromRight, slideInFromLeft } from "@/lib/animations";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      service: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "تم إرسال طلبكم بنجاح",
        description: "سيتم التواصل معكم في أقرب وقت ممكن",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = async (data: InsertContactRequest) => {
    setIsSubmitting(true);
    submitContactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-king-gold" />,
      title: "اتصل بنا الآن",
      description: "خدمة عملاء متاحة 24/7",
      value: "+20 123 456 7890",
      href: "tel:+201234567890",
      color: "text-king-gold hover:text-king-gold-light",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-400" />,
      title: "واتساب",
      description: "رد سريع في أقل من 5 دقائق",
      value: "راسلنا على واتساب",
      href: "https://wa.me/201234567890",
      color: "text-green-400 hover:text-green-300",
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "البريد الإلكتروني",
      description: "للاستفسارات والعروض الخاصة",
      value: "info@kingmetal.com",
      href: "mailto:info@kingmetal.com",
      color: "text-blue-400 hover:text-blue-300",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-king-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 king-crown" data-testid="contact-title">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="contact-description">
            احصل على استشارة مجانية واطلب عرض سعر مخصص لمشروعك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={slideInFromRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card className="glass-morphism p-8 rounded-2xl border-king-gold/20 bg-king-gray/50">
              <h3 className="text-2xl font-bold mb-6 text-king-gold" data-testid="form-title">
                احجز معاينة مجانية
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">الاسم</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="أدخل اسمك"
                              className="bg-king-steel/50 border-king-gold/20 focus:border-king-gold text-white"
                              data-testid="input-name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">رقم الهاتف</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="01xxxxxxxxx"
                              className="bg-king-steel/50 border-king-gold/20 focus:border-king-gold text-white"
                              data-testid="input-phone"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">المدينة</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                className="bg-king-steel/50 border-king-gold/20 focus:border-king-gold text-white"
                                data-testid="select-city"
                              >
                                <SelectValue placeholder="اختر المدينة" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-king-steel border-king-gold/20 text-white">
                              <SelectItem value="cairo">القاهرة</SelectItem>
                              <SelectItem value="giza">الجيزة</SelectItem>
                              <SelectItem value="alexandria">الإسكندرية</SelectItem>
                              <SelectItem value="other">أخرى</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">نوع الخدمة</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger 
                                className="bg-king-steel/50 border-king-gold/20 focus:border-king-gold text-white"
                                data-testid="select-service"
                              >
                                <SelectValue placeholder="اختر الخدمة" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-king-steel border-king-gold/20 text-white">
                              <SelectItem value="doors">أبواب مصفحة</SelectItem>
                              <SelectItem value="kitchens">مطابخ ألوميتال</SelectItem>
                              <SelectItem value="both">كلاهما</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">رسالة</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="اكتب تفاصيل مشروعك..."
                            rows={4}
                            className="bg-king-steel/50 border-king-gold/20 focus:border-king-gold text-white resize-none"
                            data-testid="textarea-message"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-king-gray hover:bg-king-steel text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="button-submit-form"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-king-black border-t-transparent rounded-full animate-spin ml-2" />
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 ml-2" />
                        إرسال الطلب
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={slideInFromLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-morphism p-6 rounded-2xl border-king-gold/20 bg-king-gray/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-king-gold/20 rounded-full flex items-center justify-center ml-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white" data-testid={`contact-info-title-${index}`}>
                      {info.title}
                    </h4>
                    <p className="text-gray-400 text-sm" data-testid={`contact-info-description-${index}`}>
                      {info.description}
                    </p>
                  </div>
                </div>
                <a
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`${info.color} transition-colors text-lg font-medium`}
                  data-testid={`contact-info-link-${index}`}
                >
                  {info.value}
                </a>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="glass-morphism p-6 rounded-2xl border-king-gold/20 bg-king-gray/50">
              <h4 className="font-bold mb-4 text-white" data-testid="map-title">موقعنا</h4>
              <div className="w-full h-40 bg-king-steel rounded-lg flex items-center justify-center border border-king-gold/20">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-king-gold mx-auto mb-2" />
                  <p className="text-gray-300" data-testid="map-location">القاهرة، مصر</p>
                  <p className="text-sm text-gray-400">خريطة تفاعلية</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
