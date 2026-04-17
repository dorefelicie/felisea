import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-20 px-6 bg-sand/5 border-t border-solar/10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-serif italic mb-3 text-ink">Rejoignez le Club Felisea</h2>
          <p className="text-solar uppercase tracking-[0.2em] text-[10px] mb-10">
            Inscrivez-vous pour recevoir nos récits d'Ibiza et nos accès exclusifs.
          </p>
          
          <div className="w-full bg-white rounded-lg shadow-sm border border-solar/5 overflow-hidden">
            <iframe
              width="100%"
              height="480"
              src="https://9e08f380.sibforms.com/serve/MUIFAPhzkLDrpAlpGkrUBmcBIhD7VxpkY-rO_ixrgJ2OXuyiYJxCVE74ZaUPorR96OV-mIQOdX0nlDdOgsAlneiYlXJwnj0Ggy2R028yTX0ecgWViX5uDdLUamYBLvkBYaK8DeugeXanS7Il2JL_rU1VwudBJv-G5HTrZ-pZfpxMUOatMcDFIE_4HlYnBYRWhx66t3fcIJoti_tnqg=="
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              style={{ display: 'block', margin: '0' }}
              title="Newsletter Subscription"
            />
          </div>
          
          <p className="mt-8 text-[10px] text-ink/40 uppercase tracking-widest">
            En vous inscrivant, vous acceptez notre politique de confidentialité.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
