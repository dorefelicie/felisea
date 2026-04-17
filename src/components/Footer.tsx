import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-sand/20 border-t border-solar/10 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl tracking-[0.3em] font-light uppercase mb-6">Felisea</h2>
          <p className="text-solar font-serif italic text-lg max-w-md leading-relaxed">
            Une fusion entre l'âme et la mer. Inspirée par la lumière d'Ibiza, pensée pour durer.
          </p>
        </div>
        
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Navigation</h3>
          <ul className="flex flex-col gap-4 text-sm text-ink/70">
            <li><Link to="/" className="hover:text-solar transition-colors">Accueil</Link></li>
            <li><Link to="/collection" className="hover:text-solar transition-colors">Collection</Link></li>
            <li><Link to="/about" className="hover:text-solar transition-colors">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-solar transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold mb-6">Suivez-nous</h3>
          <ul className="flex flex-col gap-4 text-sm text-ink/70">
            <li><a href="#" className="hover:text-solar transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-solar transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-solar transition-colors">Facebook</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-solar/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-ink/40">
        <p>© 2026 FELISEA. Tous droits réservés.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-solar transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-solar transition-colors">Confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
