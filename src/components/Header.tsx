import { PilatesButton } from "./ui/pilates-button"
import { GlassCard } from "./ui/glass-card"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <GlassCard className="mx-4 mt-4 rounded-2xl">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif font-bold text-2xl text-pilates-black">
            Elite Pilates
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#classes" className="text-pilates-gray hover:text-pilates-black transition-all duration-300 font-medium">
              Classes
            </a>
            <a href="#about" className="text-pilates-gray hover:text-pilates-black transition-all duration-300 font-medium">
              About
            </a>
            <a href="#instructors" className="text-pilates-gray hover:text-pilates-black transition-all duration-300 font-medium">
              Instructors
            </a>
            <a href="#contact" className="text-pilates-gray hover:text-pilates-black transition-all duration-300 font-medium">
              Contact
            </a>
          </div>
          
          <PilatesButton variant="outline" size="sm">
            Book Now
          </PilatesButton>
        </nav>
      </GlassCard>
    </header>
  )
}

export default Header