import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.4em] text-solar font-bold mb-6 block"
            >
              Contact
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-serif italic mb-10 leading-tight"
            >
              Écrivez-nous une<br />douce note.
            </motion.h1>
            
            <div className="space-y-12 mt-16">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-sand/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-solar" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold mb-2">Email</h4>
                  <p className="text-lg font-serif italic">hello@felisea.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-sand/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-solar" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold mb-2">Showroom</h4>
                  <p className="text-lg font-serif italic">Carrer de la Mar, Ibiza, Espagne</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-sand/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-solar" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold mb-2">Téléphone</h4>
                  <p className="text-lg font-serif italic">+34 971 00 00 00</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-sand/10 p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-solar">Nom</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-solar/30 py-2 focus:border-solar outline-none transition-colors font-serif italic text-lg"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-solar">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-solar/30 py-2 focus:border-solar outline-none transition-colors font-serif italic text-lg"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-semibold text-solar">Sujet</label>
                <select className="w-full bg-transparent border-b border-solar/30 py-2 focus:border-solar outline-none transition-colors font-serif italic text-lg appearance-none">
                  <option>Service Client</option>
                  <option>Presse & Collaborations</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-semibold text-solar">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-solar/30 py-2 focus:border-solar outline-none transition-colors font-serif italic text-lg resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>

              <button className="w-full bg-solar text-ivory py-4 text-xs uppercase tracking-[0.3em] font-semibold hover:bg-ink transition-colors duration-500 rounded-full">
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
