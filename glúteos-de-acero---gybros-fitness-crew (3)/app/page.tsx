import Image from 'next/image';
import { CheckCircle2, Users } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-gybros-purple selection:text-white">
      {/* Header Banner */}
      <header className="w-full bg-black border-b border-white/10 py-4 px-4 flex justify-center items-center z-50 relative">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <Image 
            src="/logo.png" 
            alt="Gybros Fitness Crew Logo" 
            fill 
            className="object-contain"
            priority
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 py-12">
        {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://69a14531d09d9185fbb09492.imgix.net/heroina_fitness.png" 
              alt="Atleta entrenando glúteos" 
              fill 
              className="object-cover object-top opacity-70" // 1. Aumentamos de 40 a 70
              priority
            />
            {/* 2. Suavizamos el degradado: de 60/80 a 30/50 */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>
          </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center mt-12">
          <div className="inline-block mb-4 px-4 py-1.5 bg-gybros-purple/20 border border-gybros-purple/50 rounded-full">
             <span className="text-gybros-purple font-roboto font-bold text-sm tracking-wider uppercase">Gybros Fitness Crew</span>
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-tight mb-6 text-white uppercase tracking-tight drop-shadow-2xl">
            ¿Entrenás hace meses y <span className="text-gybros-purple">no ves resultados?</span>
          </h1>
          <p className="font-merriweather text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl leading-relaxed">
            Obtené la <strong className="text-white">Rutina de Glúteos de Acero</strong> y dejá de perder el tiempo en el gym.
          </p>
          <a href="#formulario" className="inline-block bg-gybros-gold hover:bg-gybros-gold-hover text-black font-oswald font-bold text-2xl px-10 py-5 rounded-lg uppercase tracking-wide transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
            ¡Quiero mi rutina gratis!
          </a>
        </div>
      </section>

      {/* Sección de Dolor & Beneficios */}
      <section className="py-24 px-4 bg-zinc-950 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-6 uppercase text-white">
              La Rutina <span className="text-gybros-purple">Antiestancamiento</span>
            </h2>
            <p className="font-roboto text-lg text-gray-400 mb-10 leading-relaxed">
              Diseñada para quienes se sienten estancadas con rutinas generales y buscan una transformación real basada en ciencia (IFBB).
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-gybros-purple/10 flex items-center justify-center shrink-0 border border-gybros-purple/30">
                  <CheckCircle2 className="w-7 h-7 text-gybros-purple" />
                </div>
                <div>
                  <h3 className="font-oswald text-2xl font-bold text-white tracking-wide">Personalización Extrema</h3>
                  <p className="font-roboto text-gray-400 mt-2 leading-relaxed">No más rutinas genéricas. Adaptamos el volumen y la intensidad a tu nivel y biotipo para maximizar la hipertrofia.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-gybros-purple/10 flex items-center justify-center shrink-0 border border-gybros-purple/30">
                  <Users className="w-7 h-7 text-gybros-purple" />
                </div>
                <div>
                  <h3 className="font-oswald text-2xl font-bold text-white tracking-wide">Acompañamiento "Gymbro"</h3>
                  <p className="font-roboto text-gray-400 mt-2 leading-relaxed">Cercanía y motivación constante. No estás sola en este proceso, somos tu equipo y te empujamos a dar tu 100%.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image 
              src="https://69a14531d09d9185fbb09492.imgix.net/b7c53e3e1259eb685ef447c7b0e7ba94-fotor-bg-remover-2026022725744.png" 
              alt="Resultados reales" 
              fill 
              className="object-cover"
            />
            {/* Contenedor: Mantenemos la alineación al final pero reducimos el espacio inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end px-10 pb-5">
            {/* Texto: Bajamos a text-lg y conservamos leading-relaxed por tu preferencia */}
            <p className="font-merriweather text-lg font-bold text-white italic leading-relaxed">
              "El método IFBB que cambió mis entrenamientos para siempre."
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Prueba Social */}
      <section className="py-24 px-4 bg-black relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase text-white mb-4">Resultados <span className="text-gybros-purple">Reales</span></h2>
            <p className="font-roboto text-gray-400 text-lg max-w-2xl mx-auto">Avalado por la experiencia IFBB y cientos de alumnas que ya transformaron sus glúteos.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 relative hover:border-gybros-purple/30 transition-colors">
              <div className="text-gybros-gold mb-6 flex gap-1 text-xl">
                ★★★★★
              </div>
              <p className="font-merriweather text-gray-300 italic mb-8 leading-relaxed">"Llevaba 2 años haciendo sentadillas sin ver cambios. Con esta rutina entendí cómo aislar el glúteo. ¡Increíble!"</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-zinc-800 rounded-full overflow-hidden relative">
                   <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" alt="User" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-oswald font-bold text-white tracking-wide text-lg">Mariana L.</h4>
                  <p className="font-roboto text-sm text-gray-500">Alumna Gybros</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 relative transform md:-translate-y-6 hover:border-gybros-purple/30 transition-colors">
              <div className="text-gybros-gold mb-6 flex gap-1 text-xl">
                ★★★★★
              </div>
              <p className="font-merriweather text-gray-300 italic mb-8 leading-relaxed">"El acompañamiento es clave. Sentir que tenés a tu 'gymbro' exigiéndote más me hizo romper mis propios límites."</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-zinc-800 rounded-full overflow-hidden relative">
                   <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="User" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-oswald font-bold text-white tracking-wide text-lg">Sofía R.</h4>
                  <p className="font-roboto text-sm text-gray-500">Alumna Gybros</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 relative hover:border-gybros-purple/30 transition-colors">
              <div className="text-gybros-gold mb-6 flex gap-1 text-xl">
                ★★★★★
              </div>
              <p className="font-merriweather text-gray-300 italic mb-8 leading-relaxed">"La base científica IFBB se nota desde la primera semana. El pump y la conexión mente-músculo son de otro nivel."</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-zinc-800 rounded-full overflow-hidden relative">
                   <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop" alt="User" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-oswald font-bold text-white tracking-wide text-lg">Valentina M.</h4>
                  <p className="font-roboto text-sm text-gray-500">Atleta Amateur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Form Section */}
      <section id="formulario" className="py-24 px-4 bg-gybros-purple relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-3xl mx-auto bg-black/50 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] border border-white/10 relative z-10 text-center shadow-2xl">
          <h2 className="font-oswald text-4xl md:text-6xl font-bold text-white uppercase mb-6 tracking-tight">¿Lista para empezar?</h2>
          <p className="font-roboto text-xl text-purple-100 mb-10 max-w-xl mx-auto">Ingresá tus datos para recibir la rutina gratis en tu email y dar el primer paso hacia tu transformación.</p>
          
          <form className="flex flex-col gap-5 max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Tu Nombre" 
              required
              className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-gybros-gold focus:ring-1 focus:ring-gybros-gold transition-colors font-roboto text-lg"
            />
            <input 
              type="email" 
              placeholder="Tu Email" 
              required
              className="w-full bg-white/5 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-gybros-gold focus:ring-1 focus:ring-gybros-gold transition-colors font-roboto text-lg"
            />
            <button 
              type="submit" 
              className="w-full mt-4 bg-gybros-gold hover:bg-gybros-gold-hover text-black font-oswald font-bold text-2xl px-8 py-5 rounded-xl uppercase tracking-wide transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.4)]"
            >
              ¡Quiero mi rutina gratis!
            </button>
            <p className="text-sm text-purple-200/60 mt-4 font-roboto">Tus datos están seguros. Cero spam.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 px-4 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="relative w-40 h-40 mb-8 opacity-90">
            <Image 
              src="/logo.png" 
              alt="Gybros Fitness Crew Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-10 font-roboto text-sm text-gray-400">
            <a href="#" className="hover:text-gybros-purple transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-gybros-purple transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-gybros-purple transition-colors">Contacto</a>
          </div>
          <p className="font-roboto text-xs text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            Este sitio no es parte del sitio web de Facebook o Meta Platforms, Inc. Además, este sitio NO está respaldado por Meta de ninguna manera. FACEBOOK es una marca comercial de META PLATFORMS, Inc.
          </p>
          <p className="font-roboto text-xs text-gray-700">
            &copy; {new Date().getFullYear()} Gybros Fitness Crew. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
