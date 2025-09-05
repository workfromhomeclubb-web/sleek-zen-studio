import { PilatesButton } from "./ui/pilates-button"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-serif font-bold text-2xl text-pilates-black">
          Elite Pilates
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#classes" className="text-pilates-gray hover:text-pilates-black transition-colors font-medium">
            Classes
          </a>
          <a href="#about" className="text-pilates-gray hover:text-pilates-black transition-colors font-medium">
            About
          </a>
          <a href="#instructors" className="text-pilates-gray hover:text-pilates-black transition-colors font-medium">
            Instructors
          </a>
          <a href="#contact" className="text-pilates-gray hover:text-pilates-black transition-colors font-medium">
            Contact
          </a>
        </div>
        
        <PilatesButton variant="outline" size="sm">
          Book Now
        </PilatesButton>
      </nav>
    </header>
  )
}

export default Header