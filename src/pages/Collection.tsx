import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

export default function Collection() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.4em] text-solar font-bold mb-4 block"
          >
            Édition Limitée
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif italic mb-8"
          >
            La Collection Solaire
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto text-solar font-serif text-lg italic"
          >
            Des pièces pensées pour durer, conçues dans des matières italiennes recyclées de haute qualité. Chaque coupe est étudiée pour sublimer le naturel.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
