import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  index: number;
  key?: string | number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/collection`} className="block overflow-hidden relative aspect-[3/4] mb-6">
        <motion.img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-solar/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="bg-ivory px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-medium shadow-xl">
            Découvrir
          </span>
        </div>
      </Link>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-serif italic mb-1">{product.name}</h3>
          <p className="text-[10px] uppercase tracking-widest text-solar font-medium">
            {product.category === 'bikini' ? 'Ensemble Bikini' : 'Maillot Une Pièce'}
          </p>
        </div>
        <span className="text-sm font-light">{product.price}</span>
      </div>
    </motion.div>
  );
}
