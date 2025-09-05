import { PilatesButton } from "./ui/pilates-button"
import { Card } from "./ui/card"

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Begin Your Journey
          </h2>
          <p className="font-sans text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your body and mind? Contact us today to schedule
            your complimentary consultation and first class.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <h3 className="font-serif text-2xl font-semibold mb-6 text-white">
                Studio Information
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="font-medium mb-2 text-white/90">Address</div>
                  <div className="text-white/80 leading-relaxed">
                    123 Wellness Boulevard<br />
                    Downtown District, NY 10001
                  </div>
                </div>
                
                <div>
                  <div className="font-medium mb-2 text-white/90">Phone</div>
                  <div className="text-white/80">(555) 123-4567</div>
                </div>
                
                <div>
                  <div className="font-medium mb-2 text-white/90">Email</div>
                  <div className="text-white/80">hello@elitepilates.com</div>
                </div>
                
                <div>
                  <div className="font-medium mb-2 text-white/90">Studio Hours</div>
                  <div className="text-white/80 space-y-1">
                    <div>Monday - Friday: 6:00 AM - 9:00 PM</div>
                    <div>Saturday: 7:00 AM - 7:00 PM</div>
                    <div>Sunday: 8:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </Card>
            
            <div className="text-center">
              <PilatesButton variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-pilates-black">
                Schedule Tour
              </PilatesButton>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col justify-center">
            <div className="text-center">
              <h3 className="font-serif text-3xl font-bold mb-8">
                Special Offer for New Clients
              </h3>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-8">
                <div className="text-5xl font-bold mb-4">50% OFF</div>
                <div className="text-xl mb-6">Your First Private Session</div>
                <div className="text-white/80 mb-6">
                  + Complimentary consultation and studio tour
                </div>
                <PilatesButton variant="hero" size="lg" className="bg-white text-pilates-black hover:bg-white/90">
                  Claim Your Offer
                </PilatesButton>
              </div>
              
              <p className="text-white/70 text-sm">
                * Offer valid for new clients only. Limited time availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact