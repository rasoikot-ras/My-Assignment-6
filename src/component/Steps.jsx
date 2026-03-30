import myStepsA from '../assets/user.png'
import myStepsB from '../assets/package.png'
import myStepsC from '../assets/rocket.png'

const Steps = () => {
  const steps = [
    { 
      id: "01", 
      title: "Create Account", 
      desc: "Sign up for free in seconds. No credit card required to get started.", 
      image: myStepsA 
    },
    { 
      id: "02", 
      title: "Choose Products", 
      desc: "Browse our catalog and select the best tools you need.", 
      image: myStepsB 
    },
    { 
      id: "03", 
      title: "Start Creating", 
      desc: "Download and start using your premium tools immediately.", 
      image: myStepsC 
    }
  ];

return (
    <section className="py-24 bg-slate-50/50">
      
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        
       
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Get Started In 3 Steps</h2>
          <p className="text-gray-500">Everything you need to build in minutes, not hours.</p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-10 rounded-[32px] border border-gray-100 relative group hover:shadow-xl transition-all h-full">
              
             
              <div className="absolute top-6 right-6 w-8 h-8 bg-[#7C3AED] text-white rounded-full flex items-center justify-center font-bold text-xs">
                {step.id}
              </div>

              
              <div className='flex justify-center items-center'>
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform p-3">
                <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
                </div>
              </div>

              
              <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;