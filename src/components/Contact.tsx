import { PilatesButton } from "./ui/pilates-button"
import { GlassCard } from "./ui/glass-card"

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-hero-gradient text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <GlassCard variant="dark" className="inline-block p-10">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Begin Your Journey
            </h2>
            <p className="font-sans text-xl opacity-90 max-w-2xl leading-relaxed">
              Ready to transform your body and mind? Contact us today to schedule
              your complimentary consultation and first class.
            </p>
          </GlassCard>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <GlassCard variant="dark" className="p-10">
              <h3 className="font-serif text-3xl font-semibold mb-8 text-white">
                Studio Information
              </h3>
              
              <div className="space-y-8">
                <div className="group">
                  <div className="font-semibold mb-3 text-white/90 group-hover:text-white transition-colors text-lg">Address</div>
                  <div className="text-white/80 leading-relaxed text-lg">
                    123 Wellness Boulevard<br />
                    Downtown District, NY 10001
                  </div>
                </div>
                
                <div className="group">
                  <div className="font-semibold mb-3 text-white/90 group-hover:text-white transition-colors text-lg">Phone</div>
                  <div className="text-white/80 text-lg hover:text-white transition-colors cursor-pointer">(555) 123-4567</div>
                </div>
                
                <div className="group">
                  <div className="font-semibold mb-3 text-white/90 group-hover:text-white transition-colors text-lg">Email</div>
                  <div className="text-white/80 text-lg hover:text-white transition-colors cursor-pointer">hello@elitepilates.com</div>
                </div>
                
                <div className="group">
                  <div className="font-semibold mb-3 text-white/90 group-hover:text-white transition-colors text-lg">Studio Hours</div>
                  <div className="text-white/80 space-y-2 text-lg">
                    <div>Monday - Friday: 6:00 AM - 9:00 PM</div>
                    <div>Saturday: 7:00 AM - 7:00 PM</div>
                    <div>Sunday: 8:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </GlassCard>
            
            <div className="text-center">
              <PilatesButton variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-pilates-black backdrop-blur-glass hover:scale-110 transition-all duration-500">
                Schedule Tour
              </PilatesButton>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col justify-center">
            <GlassCard variant="dark" className="p-12 text-center hover:scale-105 transition-all duration-500">
              <h3 className="font-serif text-4xl font-bold mb-8">
                Special Offer for New Clients
              </h3>
              
              <div className="mb-10">
                <div className="text-7xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">50% OFF</div>
                <div className="text-2xl mb-6 font-medium">Your First Private Session</div>
                <div className="text-white/80 mb-8 text-lg">
                  + Complimentary consultation and studio tour
                </div>
                <PilatesButton variant="hero" size="lg" className="bg-white text-pilates-black hover:bg-white/90 hover:scale-110 transition-all duration-500">
                  Claim Your Offer
                </PilatesButton>
              </div>
              
              <p className="text-white/60 text-sm">
                * Offer valid for new clients only. Limited time availability.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact