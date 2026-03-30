import mybanner from '../assets/banner.png'


const Banner = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span className="text-indigo-600 text-sm font-medium">New: AI-Powered Tools Available</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#101727] leading-[1.1]">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          <p className="text-[#627382] text-lg  leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity<br /> software—all in one place. Start creating faster today.<br /> Explore Product
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-8 py-3.5 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-full shadow-lg transition-all">
              Explore Products
            </button>
            <button className="px-8 py-3.5 border-2 border-[#7C3AED] text-[#7C3AED] font-bold rounded-full hover:bg-indigo-50 transition-all flex items-center gap-2">
              ▷ Watch Demo
            </button>
          </div>
        </div>

        
        <div className="w-full md:w-auto">
          <img src={mybanner} alt="" />
        </div>
      </section>

      
      <section className="bg-[#7C3AED] py-16">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-around items-center gap-12 text-white">
          
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-2">50K+</h2>
            <p className="text-indigo-100 text-lg">Active Users</p>
          </div>

          
          <div className="hidden md:block h-16 w-px bg-indigo-300 opacity-50"></div>

          <div className="text-center">
            <h2 className="text-5xl font-bold mb-2">200+</h2>
            <p className="text-indigo-100 text-lg">Premium Tools</p>
          </div>

          <div className="hidden md:block h-16 w-px bg-indigo-300 opacity-50"></div>

          <div className="text-center">
            <h2 className="text-5xl font-bold mb-2">4.9</h2>
            <p className="text-indigo-100 text-lg">Rating</p>
          </div>

        </div>
      </section>
      
    </>
  );
};

export default Banner;