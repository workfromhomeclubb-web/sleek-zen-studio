import { PilatesButton } from "./ui/pilates-button"
import { GlassCard } from "./ui/glass-card"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <GlassCard className="mx-4 mt-4 rounded-2xl">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" aria-label="Home" className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff5393289c7ff4db7b88e9d7ae4c07f0e%2Fdbf5b6acfc304c70a52f2217c63529ec?format=webp&width=800"
              alt="Site logo"
              className="h-8 w-auto"
            />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#classes" className="text-white hover:text-white transition-all duration-300 font-medium">
              Classes
            </a>
            <a href="#about" className="text-white hover:text-white transition-all duration-300 font-medium">
              About
            </a>
            <a href="#instructors" className="text-white hover:text-white transition-all duration-300 font-medium">
              Instructors
            </a>
            <a href="#contact" className="text-white hover:text-white transition-all duration-300 font-medium">
              Contact
            </a>
          </div>
          
          <PilatesButton variant="outline" size="sm" className="bg-white text-pilates-black border-white hover:bg-white hover:text-pilates-black">
            Book Now
          </PilatesButton>
        </nav>
      </GlassCard>
    </header>
  )
}

export default Header
