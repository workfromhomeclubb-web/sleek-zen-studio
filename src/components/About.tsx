import { PilatesButton } from "./ui/pilates-button"

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-pilates-black mb-8 leading-tight">
              Where Movement
              <span className="block italic text-pilates-gray">Meets Mindfulness</span>
            </h2>
            
            <div className="space-y-6 text-pilates-gray text-lg leading-relaxed">
              <p>
                At Elite Pilates Studio, we believe that true wellness comes from the harmony
                between physical strength and mental clarity. Our approach combines classical
                Pilates principles with modern techniques to create transformative experiences.
              </p>
              
              <p>
                Founded in 2012, our studio has been a sanctuary for those seeking to reconnect
                with their bodies and minds. Every session is designed to challenge, inspire,
                and nurture your personal journey toward optimal health.
              </p>
              
              <p>
                Our state-of-the-art equipment and serene environment provide the perfect
                backdrop for your practice, whether you're a beginner taking your first steps
                or an advanced practitioner deepening your understanding.
              </p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <PilatesButton variant="hero">
                Try Your First Class
              </PilatesButton>
              <PilatesButton variant="minimal">
                Learn Our Story →
              </PilatesButton>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-pilates-light-gray aspect-square rounded-lg flex items-center justify-center">
              <div className="text-center p-12">
                <div className="text-6xl font-bold text-pilates-black mb-4">12+</div>
                <div className="text-xl text-pilates-dark-gray mb-6">Years of Excellence</div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-pilates-black">500+</div>
                    <div className="text-sm text-pilates-gray">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pilates-black">8</div>
                    <div className="text-sm text-pilates-gray">Expert Instructors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pilates-black">15k+</div>
                    <div className="text-sm text-pilates-gray">Sessions Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pilates-black">98%</div>
                    <div className="text-sm text-pilates-gray">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About