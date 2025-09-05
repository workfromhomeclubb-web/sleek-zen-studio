import { Card } from "./ui/card"
import { PilatesButton } from "./ui/pilates-button"

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
    <section id="classes" className="py-20 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-pilates-black mb-6">
            Our Services
          </h2>
          <p className="font-sans text-xl text-pilates-gray max-w-2xl mx-auto leading-relaxed">
            Choose from our range of expertly designed programs, each crafted to meet
            your unique wellness goals and lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 shadow-medium hover:shadow-strong transition-all duration-300 border-0 bg-card">
              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl font-semibold text-pilates-black mb-3">
                  {service.title}
                </h3>
                <div className="text-3xl font-bold text-pilates-black mb-4">
                  {service.price}
                </div>
                <p className="text-pilates-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-pilates-dark-gray">
                    <div className="w-2 h-2 bg-pilates-black rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <PilatesButton variant="outline" className="w-full">
                Book Session
              </PilatesButton>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services