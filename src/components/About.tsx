import { PilatesButton } from "./ui/pilates-button"
import { GlassCard } from "./ui/glass-card"
import instructorImage from "@/assets/pilates-instructor.jpg"
import equipmentImage from "@/assets/pilates-equipment.jpg"

const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 opacity-5">
        <img 
          src={equipmentImage} 
          alt="Pilates equipment"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <GlassCard className="p-10 mb-8">
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-pilates-black mb-6 leading-tight">
                Where Movement
                <span className="block italic text-pilates-gray">Meets Mindfulness</span>
              </h2>
            </GlassCard>
            
            <div className="space-y-8">
              <GlassCard className="p-8">
                <p className="text-pilates-gray text-lg leading-relaxed">
                  At Elite Pilates Studio, we believe that true wellness comes from the harmony
                  between physical strength and mental clarity. Our approach combines classical
                  Pilates principles with modern techniques to create transformative experiences.
                </p>
              </GlassCard>
              
              <GlassCard className="p-8">
                <p className="text-pilates-gray text-lg leading-relaxed">
                  Founded in 2012, our studio has been a sanctuary for those seeking to reconnect
                  with their bodies and minds. Every session is designed to challenge, inspire,
                  and nurture your personal journey toward optimal health.
                </p>
              </GlassCard>
              
              <GlassCard className="p-8">
                <p className="text-pilates-gray text-lg leading-relaxed">
                  Our state-of-the-art equipment and serene environment provide the perfect
                  backdrop for your practice, whether you're a beginner taking your first steps
                  or an advanced practitioner deepening your understanding.
                </p>
              </GlassCard>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <PilatesButton variant="hero" className="hover:scale-110 transition-all duration-500">
                Try Your First Class
              </PilatesButton>
              <PilatesButton variant="minimal">
                Learn Our Story →
              </PilatesButton>
            </div>
          </div>
          
          <div className="relative">
            <GlassCard className="aspect-square overflow-hidden">
              <img 
                src={instructorImage} 
                alt="Professional pilates instructor demonstrating technique"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </GlassCard>
            
            <GlassCard className="absolute -bottom-8 -right-8 p-8 bg-white/90">
              <div className="text-center">
                <div className="text-5xl font-bold text-pilates-black mb-4">12+</div>
                <div className="text-lg text-pilates-dark-gray mb-6">Years of Excellence</div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="group cursor-pointer">
                    <div className="text-2xl font-bold text-pilates-black group-hover:scale-110 transition-transform">500+</div>
                    <div className="text-xs text-pilates-gray">Happy Clients</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="text-2xl font-bold text-pilates-black group-hover:scale-110 transition-transform">8</div>
                    <div className="text-xs text-pilates-gray">Expert Instructors</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="text-2xl font-bold text-pilates-black group-hover:scale-110 transition-transform">15k+</div>
                    <div className="text-xs text-pilates-gray">Sessions Completed</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="text-2xl font-bold text-pilates-black group-hover:scale-110 transition-transform">98%</div>
                    <div className="text-xs text-pilates-gray">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About