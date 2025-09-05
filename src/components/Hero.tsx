import { PilatesButton } from "./ui/pilates-button"
import { GlassCard } from "./ui/glass-card"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Ff5393289c7ff4db7b88e9d7ae4c07f0e%2Fb720d919609d425e94b7621970f7240b?format=webp&width=800"
          alt="Pilates studio interior with reformer machines and natural light"
          className="w-full h-full object-cover scale-125 origin-center"
        />
        <div className="absolute inset-0 bg-overlay-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pt-20">
        <div className="p-12 mb-12">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block italic">Body & Mind</span>
          </h1>

          <p className="font-sans text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light leading-relaxed opacity-90">
            Experience the art of movement through personalized Pilates instruction
            in our modern, luxury studio environment.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <PilatesButton variant="hero" size="lg" className="hover:scale-110 transition-all duration-500">
            Start Your Journey
          </PilatesButton>
          <PilatesButton variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-pilates-black backdrop-blur-glass">
            View Classes
          </PilatesButton>
        </div>
        
        <GlassCard variant="dark" className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">8</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Expert Instructors</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">12</div>
              <div className="text-sm uppercase tracking-wider opacity-90">Years Experience</div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

export default Hero
