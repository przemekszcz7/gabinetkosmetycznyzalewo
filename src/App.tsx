import { motion } from "motion/react";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Facebook, 
  Check, 
  Clock,
  Heart,
  Scissors,
  User,
  Star
} from "lucide-react";
import Gallery from "./components/Gallery";

export default function App() {
  const services = [
    { name: "Paznokcie", icon: <Sparkles className="w-6 h-6" /> },
    { name: "Pedicure", icon: <Heart className="w-6 h-6" /> },
    { name: "Zabiegi twarz/szyja/dekolt", icon: <User className="w-6 h-6" /> },
    { name: "Makijaż okolicznościowy", icon: <Sparkles className="w-6 h-6" /> },
    { name: "Makijaż permanentny", icon: <Scissors className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen selection:bg-brand-rose selection:text-brand-accent">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass py-5 px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            src="https://i.postimg.cc/zBKrkRJv/677331336-122117716647238653-4856609504110605076-n.jpg" 
            alt="Logo" 
            className="w-12 h-12 rounded-full border border-brand-rose object-cover shadow-sm"
          />
          <div className="flex flex-col">
            <span className="serif text-lg font-bold text-brand-text tracking-tight">Gabinet Kosmetyczny</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-brand-accent/60">Zalewo</span>
          </div>
        </div>
        <div className="hidden md:flex gap-10 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-brand-text/70">
          <a href="#o-mnie" className="hover:text-brand-accent transition-colors">O mnie</a>
          <a href="#uslugi" className="hover:text-brand-accent transition-colors">Usługi</a>
          <a href="#galeria" className="hover:text-brand-accent transition-colors">Galeria</a>
          <a href="#kontakt" className="bg-brand-accent text-white px-8 py-3 rounded-full hover:bg-brand-accent/90 transition-all elegant-shadow">Kontakt</a>
        </div>
        {/* Mobile Contact Button */}
        <a href="#kontakt" className="md:hidden bg-brand-accent text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Kontakt</a>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col justify-center items-center px-6 overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-[40rem] h-[40rem] bg-brand-rose/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-[30rem] h-[30rem] bg-indigo-50/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 text-center max-w-5xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-white/50 backdrop-blur-sm border border-brand-rose/40 rounded-full text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-12 shadow-sm"
          >
            <Clock className="w-4 h-4" /> Ponad 10 lat doświadczenia
          </motion.div>
          
          <h1 className="serif text-5xl md:text-8xl text-brand-text leading-[1.1] mb-8 tracking-tight">
            Podaruj sobie <br /> 
            <span className="italic font-normal serif-italic text-brand-accent opacity-90">chwilę zapomnienia</span>.
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text/60 font-light mb-16 serif italic tracking-wide max-w-2xl mx-auto leading-relaxed">
            Precyzja • Estetyka • Indywidualne podejście
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+534164254" 
              className="group flex items-center gap-4 bg-brand-accent text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all elegant-shadow"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Zadzwoń teraz
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/profile.php?id=61587159610284" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white text-brand-text elegant-border px-10 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all shadow-sm group"
            >
              <Facebook className="w-5 h-5 text-blue-500/80 group-hover:scale-110 transition-transform" />
              Obserwuj nas
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.5em] font-bold text-brand-accent/40">Odkryj</span>
            <div className="w-px h-16 bg-gradient-to-b from-brand-accent/40 to-transparent" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="o-mnie" className="py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-brand-rose rounded-[3rem] overflow-hidden elegant-shadow relative z-10 group">
               <img 
                src="https://i.postimg.cc/zBKrkRJv/677331336-122117716647238653-4856609504110605076-n.jpg"
                alt="Gabinet Kosmetyczny" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-2 border-brand-rose rounded-[4rem] -z-0" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-rose/20 rounded-full blur-2xl -z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 text-brand-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-8">
              <Star className="w-4 h-4 fill-brand-accent/20" /> O mnie
            </div>
            <h2 className="serif text-5xl md:text-6xl text-brand-text mb-10 leading-tight tracking-tight">Z pasji do <span className="italic text-brand-accent/80 serif-italic">piękna</span> i doskonałości.</h2>
            <p className="text-lg text-brand-text/70 mb-10 leading-relaxed font-light">
              W moim gabinecie w Zalewie stawiam na to, co najważniejsze: absolutną precyzję wykonania, ponadczasową estetykę oraz głęboko indywidualne podejście. Dekada doświadczenia pozwoliła mi wypracować standardy, które doceniają najbardziej wymagające klientki.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Atmosfera relaksu",
                "Najlepsze produkty",
                "Higiena i bezpieczeństwo",
                "Indywidualny dobór usług"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-brand-text/80 text-sm font-medium">
                  <div className="w-8 h-8 rounded-full bg-brand-rose/50 flex items-center justify-center">
                    <Check className="w-4 h-4 text-brand-accent" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-40 px-6 bg-brand-pink/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="serif text-5xl md:text-6xl text-brand-text mb-6 tracking-tight">Katalog Usług</h2>
            <p className="text-brand-accent/60 uppercase tracking-[0.4em] text-[10px] font-bold">Profesjonalna OPieka</p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group bg-white p-12 rounded-[2.5rem] elegant-shadow elegant-border hover:border-brand-accent/20 hover:scale-[1.03] transition-all w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)] min-w-[320px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-rose/10 rounded-bl-[4rem] group-hover:scale-110 transition-transform" />
                <div className="w-20 h-20 bg-brand-rose/40 rounded-3xl flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="serif text-2xl text-brand-text mb-6 tracking-tight font-semibold">{service.name}</h3>
                <p className="text-brand-text/50 font-light text-sm leading-relaxed mb-6">
                  Mistrzowskie wykonanie z użyciem luksusowych produktów, by zapewnić Ci spektakularny efekt i pełen komfort.
                </p>
                <div className="flex items-center gap-2 text-brand-accent font-bold text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                  Dowiedz się więcej <Heart className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <section id="kontakt" className="py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-text rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col lg:row gap-20 items-center">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-brand-accent/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-rose/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-[80px] pointer-events-none" />

            <div className="text-center lg:text-left text-white relative z-10 max-w-2xl">
              <h2 className="serif text-5xl md:text-7xl mb-10 tracking-tight leading-[1.1]">Zarezerwuj swój <span className="italic text-brand-rose/60 serif-italic">czas piękna</span>.</h2>
              <p className="text-brand-rose/40 text-xl font-light mb-16 leading-relaxed max-w-xl mx-auto lg:mx-0 uppercase tracking-widest text-sm">
                Zalewo • Zapraszam do kontaktu w celu ustalenia terminu.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-12">
                <a href="tel:+534164254" className="flex flex-col items-center lg:items-start gap-4 group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:bg-brand-accent transition-all duration-300">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-brand-rose/30 tracking-[0.4em] mb-2">Telefon</div>
                    <div className="text-2xl font-medium tracking-tight">+53 41 64254</div>
                  </div>
                </a>
                <div className="flex flex-col items-center lg:items-start gap-4 group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-brand-rose/30 tracking-[0.4em] mb-2">Lokalizacja</div>
                    <div className="text-2xl font-medium tracking-tight">Zalewo</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto min-w-[320px] md:min-w-[450px] bg-white rounded-[3rem] p-10 md:p-14 elegant-shadow relative z-10">
              <h3 className="serif text-3xl text-brand-text mb-10 font-bold tracking-tight">Napisz do mnie</h3>
              <div className="space-y-6">
                <motion.a 
                  whileHover={{ y: -5 }}
                  href="https://www.facebook.com/profile.php?id=61587159610284" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-8 bg-blue-50/50 text-blue-600 rounded-3xl hover:bg-blue-100 transition-all font-bold group"
                >
                  <div className="flex items-center gap-5">
                    <Facebook className="w-7 h-7 group-hover:rotate-6 transition-transform" /> 
                    <span className="uppercase tracking-[0.2em] text-xs">Wiadomość FB</span>
                  </div>
                  <MessageCircle className="w-5 h-5 opacity-40" />
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }}
                  href="https://m.me/61587159610284" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full p-8 bg-brand-rose text-brand-accent rounded-3xl hover:bg-brand-rose/80 transition-all font-bold group"
                >
                   <div className="flex items-center gap-5">
                    <MessageCircle className="w-7 h-7 group-hover:rotate-6 transition-transform" /> 
                    <span className="uppercase tracking-[0.2em] text-xs">Messenger</span>
                  </div>
                  <Sparkles className="w-5 h-5 opacity-40" />
                </motion.a>
                <div className="text-[9px] text-brand-text/30 text-center uppercase tracking-[0.4em] font-bold mt-10">
                  Dostępne terminy: Poniedziałek - Sobota
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 bg-brand-bg border-t border-brand-rose/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-6">
            <img 
              src="https://i.postimg.cc/zBKrkRJv/677331336-122117716647238653-4856609504110605076-n.jpg" 
              alt="Logo" 
              className="w-16 h-16 rounded-full border border-brand-rose object-cover shadow-sm grayscale-[20%]"
            />
            <div className="flex flex-col">
              <div className="serif text-2xl font-bold text-brand-text tracking-tight">Gabinet Kosmetyczny</div>
              <div className="text-[10px] text-brand-accent/50 uppercase font-black tracking-[0.4em]">Zalewo • Od 2014</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[10px] font-black uppercase tracking-[0.3em] text-brand-text/50">
            <a href="#" className="hover:text-brand-accent transition-colors">Początek</a>
            <a href="#uslugi" className="hover:text-brand-accent transition-colors">Usługi</a>
            <a href="#galeria" className="hover:text-brand-accent transition-colors">Galeria</a>
            <a href="#kontakt" className="hover:text-brand-accent transition-colors">Terminy</a>
          </div>
          <div className="text-brand-text/20 text-[10px] font-black uppercase tracking-[0.5em]"></div>
        </div>
      </footer>
    </div>
  );
}

