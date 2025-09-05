import { PilatesButton } from "./ui/pilates-button"
import heroImage from "@/assets/pilates-hero.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern pilates studio with elegant equipment and natural lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your
          <span className="block italic">Body & Mind</span>
        </h1>
        
        <p className="font-sans text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Experience the art of movement through personalized Pilates instruction
          in our modern, luxury studio environment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <PilatesButton variant="hero" size="lg">
            Start Your Journey
          </PilatesButton>
          <PilatesButton variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-pilates-black">
            View Classes
          </PilatesButton>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-sm uppercase tracking-wider opacity-90">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">8</div>
            <div className="text-sm uppercase tracking-wider opacity-90">Expert Instructors</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">12</div>
            <div className="text-sm uppercase tracking-wider opacity-90">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero