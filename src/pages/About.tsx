import { motion } from 'motion/react';

export default function About() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-full border-8 border-sand/20">
              <img 
                src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1000&auto=format&fit=crop" 
                alt="About Felisea"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute top-1/2 -left-10 -translate-y-1/2 hidden lg:block">
              <span className="writing-mode-vertical text-[10px] uppercase tracking-[0.5em] text-solar font-bold opacity-40">
                EST. 2026 — IBIZA
              </span>
            </div>
          </motion.div>

          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.4em] text-solar font-bold mb-6 block"
            >
              Notre Histoire
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-serif italic mb-10 leading-tight"
            >
              La rencontre entre l'âme et la mer.
            </motion.h1>
            <div className="space-y-6 text-ink/80 leading-relaxed text-lg font-light">
              <p>
                FELISEA est née d'une vision simple : créer des maillots de bain qui ne sont pas seulement des vêtements, mais des extensions de soi. Le nom fusionne une identité personnelle avec le mot "sea" (la mer), symbole ultime de liberté et de connexion.
              </p>
              <p>
                Inspirée par les paysages sauvages d'Ibiza et la lumière dorée de la Méditerranée, notre marque propose une garde-robe balnéaire intemporelle, loin des tendances éphémères.
              </p>
              <p className="text-solar font-serif italic text-xl">
                "Nous croyons en une beauté qui ne s'impose pas, mais qui se révèle."
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-24 border-t border-solar/10">
          <div className="text-center">
            <h3 className="text-2xl font-serif italic mb-4">Éco-responsabilité</h3>
            <p className="text-sm text-ink/70 leading-relaxed">
              Nous utilisons exclusivement des fibres recyclées issues de filets de pêche et de déchets plastiques récupérés dans les océans.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-serif italic mb-4">Qualité Durable</h3>
            <p className="text-sm text-ink/70 leading-relaxed">
              Chaque maillot est conçu pour résister au temps, au sel et au soleil, conservant sa forme et son éclat saison après saison.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-serif italic mb-4">Confort Absolu</h3>
            <p className="text-sm text-ink/70 leading-relaxed">
              Des coupes étudiées sur des corps réels pour offrir un maintien parfait sans jamais contraindre le mouvement.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
