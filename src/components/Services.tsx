import { GlassCard } from "./ui/glass-card"
import { PilatesButton } from "./ui/pilates-button"
import classImage from "@/assets/pilates-class.jpg"

const Services = () => {
  const services = [
    {
      title: "Private Sessions",
      description: "One-on-one personalized training tailored to your specific goals and fitness level.",
      price: "From $120",
      features: ["Personalized attention", "Custom workout plans", "Flexible scheduling", "Progress tracking"]
    },
    {
      title: "Group Classes",
      description: "Small group sessions that combine community energy with expert instruction.",
      price: "From $45",
      features: ["Small class sizes", "All levels welcome", "Equipment included", "Community support"]
    },
    {
      title: "Duet Sessions",
      description: "Semi-private sessions perfect for partners, friends, or family members.",
      price: "From $85",
      features: ["Shared experience", "Partner motivation", "Cost effective", "Social engagement"]
    }
  ]

  return (
    <section id="classes" className="py-32 bg-subtle-gradient relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={classImage} 
          alt="Pilates class in session"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <GlassCard className="inline-block p-8 mb-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-pilates-black mb-4">
              Our Services
            </h2>
            <p className="font-sans text-xl text-pilates-gray max-w-2xl leading-relaxed">
              Choose from our range of expertly designed programs, each crafted to meet
              your unique wellness goals and lifestyle.
            </p>
          </GlassCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard key={index} className="p-8 hover:scale-105 transition-all duration-500 group">
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl font-semibold text-pilates-black mb-3 group-hover:text-pilates-dark-gray transition-colors">
                  {service.title}
                </h3>
                <div className="text-4xl font-bold text-pilates-black mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.price}
                </div>
                <p className="text-pilates-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-pilates-dark-gray group-hover:text-pilates-black transition-colors">
                    <div className="w-2 h-2 bg-pilates-black rounded-full mr-4 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <PilatesButton variant="outline" className="w-full hover:scale-105">
                Book Session
              </PilatesButton>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services