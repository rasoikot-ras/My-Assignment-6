const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#7C3AED] rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">D</span>
              </div>
              <span className="text-2xl font-black text-slate-800 tracking-tight">DigiTools</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Empowering creators with the world's most advanced digital tools and AI models. One subscription, infinite possibilities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#7C3AED] hover:text-white transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#7C3AED] hover:text-white transition-all">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#7C3AED] hover:text-white transition-all">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-slate-800 mb-6">Explore</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">AI Models</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Digital Assets</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">API Reference</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold text-slate-800 mb-6">Support</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#7C3AED] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-slate-800 mb-6">Stay Updated</h4>
            <p className="text-gray-500 mb-4 text-sm">Subscribe to get the latest updates and offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#7C3AED] transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#7C3AED] text-white px-4 rounded-xl font-bold hover:bg-[#6D28D9] transition-all">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-50 pt-10 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © 2026 DigiTools. Built with ❤️ by RA Soikot.
          </p>
          <div className="flex gap-8 text-sm text-gray-400 font-medium">
            <a href="#" className="hover:text-slate-800">Terms of Service</a>
            <a href="#" className="hover:text-slate-800">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;