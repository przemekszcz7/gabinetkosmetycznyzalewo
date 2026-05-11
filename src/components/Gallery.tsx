import { motion } from "motion/react";

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
              className="w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1.4rem)] lg:w-[calc(25%-1.5rem)] aspect-[4/5] relative overflow-hidden rounded-[2rem] group cursor-pointer elegant-shadow"
            >
              <img
                src={src}
                alt={`Praca kosmetyczna ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
