import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

type Category = 'all' | 'bikini' | 'one-piece' | 'jewelry';

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') as Category;
  const [activeCategory, setActiveCategory] = useState<Category>(
    ['all', 'bikini', 'one-piece', 'jewelry'].includes(initialCategory) ? initialCategory : 'all'
  );

  useEffect(() => {
    const category = searchParams.get('category') as Category;
    if (['all', 'bikini', 'one-piece', 'jewelry'].includes(category)) {
      setActiveCategory(category);
    } else if (!category) {
      setActiveCategory('all');
    }
  }, [searchParams]);

  const handleCategoryChange = (cat: Category) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'bikini', label: 'Bikinis' },
    { id: 'one-piece', label: 'Une Pièce' },
    { id: 'jewelry', label: 'Bijoux de Corps' },
  ];

  return (
    <main className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
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
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 mt-12 border-b border-solar/10 pb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id as Category)}
                className={`text-[10px] uppercase tracking-[0.3em] font-semibold transition-all relative py-2 ${
                  activeCategory === cat.id ? 'text-ink' : 'text-ink/40 hover:text-solar'
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-solar"
                  />
                )}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {activeCategory === 'jewelry' && filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-serif italic text-solar text-xl">Arrivage imminent de nos nouvelles chaînes dorées...</p>
          </div>
        )}
      </div>
    </main>
  );
}
