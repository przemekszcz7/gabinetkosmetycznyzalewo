import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://i.postimg.cc/RFQYF1SQ/681550892-122119009719238653-180802847764470644-n.jpg",
  "https://i.postimg.cc/xCyZCGfv/681986557-122118915825238653-7664196715285986430-n.jpg",
  "https://i.postimg.cc/Pxz7xbXw/682478073-122118770007238653-1204714247426288529-n.jpg",
  "https://i.postimg.cc/d1mf1Rsj/684557042-122118770421238653-2194982733266204024-n.jpg",
  "https://i.postimg.cc/sX9LXPjP/686044071-122119049535238653-4723548337393548594-n.jpg",
  "https://i.postimg.cc/vTYN61TV/687385754-122119915227238653-7811792606325715203-n.jpg",
  "https://i.postimg.cc/qqJ5Ctqs/687569833-122119915305238653-4559332283688799424-n.jpg",
  "https://i.postimg.cc/FzrBJfzj/687641973-122119915257238653-661607017129300555-n.jpg",
  "https://i.postimg.cc/hvD57Jv1/687670718-122119915335238653-279279155451461624-n.jpg",
  "https://i.postimg.cc/XqjzyZqx/687951573-122119915365238653-6279048340288287573-n.jpg",
  "https://i.postimg.cc/sxjNZBxq/693006957-122120544189238653-2688941155327048776-n.jpg",
  "https://i.postimg.cc/1XmjNgXk/693648209-122120544207238653-8144655168836190348-n.jpg",
  "https://i.postimg.cc/d3sxT73g/693746057-122120544177238653-2999496676680008094-n.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="galeria" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="serif text-5xl md:text-6xl text-brand-text mb-4 text-center">Moje Prace</h2>
        <p className="text-brand-accent/60 text-center mb-16 max-w-2xl mx-auto italic uppercase tracking-[0.3em] text-[10px] font-bold">
          Precyzja i estetyka w każdym detalu
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(index)}
              className="w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1.4rem)] lg:w-[calc(25%-1.5rem)] aspect-[4/5] relative overflow-hidden rounded-[2rem] group cursor-pointer elegant-shadow"
            >
              <img
                src={src}
                alt={`Praca kosmetyczna ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-text/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-10 h-10" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute left-4 md:left-8 text-white/30 hover:text-white transition-all z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="w-12 h-12 md:w-16 md:h-16" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-4 md:right-8 text-white/30 hover:text-white transition-all z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="w-12 h-12 md:w-16 md:h-16" />
            </motion.button>

            <motion.div
              layoutId={`image-${selectedImage}`}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                src={images[selectedImage]}
                alt="Powiększone zdjęcie"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
