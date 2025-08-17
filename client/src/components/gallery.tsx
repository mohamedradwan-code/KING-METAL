import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "باب مصفح فاخر",
      description: "تصميم عصري بأمان عالي",
      image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Modern metalworking facility with advanced security doors",
    },
    {
      id: 2,
      title: "مطبخ ألوميتال",
      description: "تصميم راقي ووظائف متقدمة",
      image: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Modern aluminum kitchen with sleek design",
    },
    {
      id: 3,
      title: "أنظمة الأمان",
      description: "أقفال متطورة وأمان مضاعف",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "High-quality metallic door hardware and security features",
    },
    {
      id: 4,
      title: "أبواب سكنية فاخرة",
      description: "أناقة وحماية في تصميم واحد",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Elegant black metal door with golden accents",
    },
    {
      id: 5,
      title: "تركيب مطابخ",
      description: "دقة في التنفيذ وجودة في التشطيب",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Professional aluminum kitchen installation",
    },
    {
      id: 6,
      title: "مشاريع تجارية",
      description: "حلول معدنية متكاملة للشركات",
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      alt: "Modern commercial metalwork and industrial doors",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-king-gray">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 king-crown" data-testid="gallery-title">
            معرض أعمالنا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-testid="gallery-description">
            مجموعة مختارة من أفضل مشاريعنا المنجزة بأعلى معايير الجودة
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {galleryItems.map((item, index) => (
            <motion.div key={item.id} variants={fadeInUp}>
              <Dialog>
                <DialogTrigger asChild>
                  <Card 
                    className="group cursor-pointer relative overflow-hidden rounded-xl shine-effect border-king-gold/20 hover:border-king-gold/40 transition-all duration-300"
                    onClick={() => setSelectedImage(item.image)}
                    data-testid={`gallery-item-${item.id}`}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-king-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 right-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-bold mb-1" data-testid={`gallery-item-title-${item.id}`}>
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-300" data-testid={`gallery-item-description-${item.id}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full bg-king-black border-king-gold/20">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                    />
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-bold text-king-gold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
