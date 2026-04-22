import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" 
            alt="Mediterranean Sea"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-ivory/40" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white mb-8 block font-semibold"
          >
            Inspiré par la lumière d'Ibiza
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-5xl md:text-8xl font-serif italic text-white leading-[1.1] mb-12"
          >
            Le soleil sur la peau,<br />l'âme face à la mer.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link 
              to="/collection"
              className="inline-block border border-white text-white px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-ink transition-all duration-500"
            >
              Découvrir la collection
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-ink/60">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-solar/60 to-transparent" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-ivory">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-t-[200px] shadow-2xl">
              <img 
                src="/image/image_remplacement.jpg" 
                alt="Natural texture"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-sand rounded-full -z-10 opacity-30 blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif italic mb-8 leading-tight">
              Une élégance naturelle,<br />sculptée par l'eau.
            </h2>
            <p className="text-solar text-lg md:text-xl font-serif leading-relaxed mb-10 italic">
              FELISEA célèbre la fluidité du corps et la force tranquille de la Méditerranée. Nos créations sont une invitation à la liberté, un hommage aux journées sans fin sous le soleil doré.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-solar" />
                <span className="text-xs uppercase tracking-widest font-semibold">Matières éco-responsables</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-solar" />
                <span className="text-xs uppercase tracking-widest font-semibold">Coupes intemporelles</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-solar" />
                <span className="text-xs uppercase tracking-widest font-semibold">Qualité artisanale</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-6 md:px-12 bg-sand/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-solar font-bold mb-4 block">Sélection</span>
              <h2 className="text-4xl md:text-5xl font-serif italic">Les Essentiels</h2>
            </div>
            <Link 
              to="/collection"
              className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-ink pb-1 hover:text-solar hover:border-solar transition-all"
            >
              Voir toute la collection
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Body Jewelry Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="order-2 md:order-1"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-solar font-bold mb-4 block">Accessoires</span>
            <h2 className="text-4xl md:text-5xl font-serif italic mb-8 leading-tight">
              L'éclat de l'or sur<br />une peau dorée.
            </h2>
            <p className="text-solar text-lg font-serif leading-relaxed mb-10 italic">
              Nos chaînes de corps et bijoux de ventre sont conçus pour sublimer vos courbes avec délicatesse. Des pièces pensées pour briller sous le soleil d'Ibiza, de la plage aux soirées étoilées.
            </p>
            <Link 
              to="/collection?category=jewelry"
              className="inline-block border border-solar text-solar px-8 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-solar hover:text-white transition-all duration-500"
            >
              Voir les bijoux
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="order-1 md:order-2 relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-full border border-solar/10 p-4">
              <img 
                src="/image/chaine_de_ventre.jpg" 
                alt="Body Jewelry Detail"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Artistic circles */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border border-solar/20 rounded-full animate-pulse" />
            <div className="absolute bottom-10 -right-5 w-20 h-20 bg-sand/30 rounded-full blur-xl" />
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 px-6 text-center bg-ivory">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-3xl md:text-5xl font-serif italic leading-snug text-solar">
            "Porter FELISEA, c'est s'envelopper de lumière et de liberté. Une connexion pure entre le corps et l'océan."
          </p>
          <div className="mt-12 flex justify-center">
            <div className="w-12 h-12 border border-solar/20 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-solar rounded-full" />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
