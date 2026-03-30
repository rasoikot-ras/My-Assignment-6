const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black mb-6 tracking-tight">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          
          <div>
            <h4 className="font-bold mb-6 text-slate-200">Product</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Features</li>
              <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Templates</li>
              <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Integrations</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold mb-6 text-slate-200">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">About</li>
              <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-[#7C3AED] cursor-pointer transition-colors">Press</li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold mb-6 text-slate-200">Social Links</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#7C3AED] hover:text-white transition-all text-black">
                <i className="fa-brands fa-instagram text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#7C3AED] hover:text-white transition-all text-black">
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#7C3AED] hover:text-white transition-all text-black">
                <i className="fa-brands fa-x-twitter text-lg"></i>
              </div>
            </div>
          </div>
        </div>

        
        <div className="pt-8 border-t border-[#FAFAFA] flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;