const Footer = () => {
  return (
    <footer className="bg-pilates-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-serif font-bold text-2xl mb-4">
              Elite Pilates
            </div>
            <p className="text-white/70 leading-relaxed max-w-md">
              Transform your body and mind through the art of Pilates. 
              Join our community of wellness enthusiasts today.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#classes" className="hover:text-white transition-colors">Classes</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#instructors" className="hover:text-white transition-colors">Instructors</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-white/70 text-sm">
              <div>123 Wellness Boulevard</div>
              <div>Downtown District, NY 10001</div>
              <div className="pt-2">(555) 123-4567</div>
              <div>hello@elitepilates.com</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/50 text-sm">
          <p>&copy; 2024 Elite Pilates Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer