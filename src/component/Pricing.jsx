const Pricing = () => {
  const plans = [
    { name: "Starter", price: "0", desc: "Perfect for getting started", features: ["Access to 12 free tools", "Basic templates", "Community support", "10 exports per month"], btnText: "Get Started Free" },
    { name: "Pro", price: "29", desc: "Built for professionals", features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited exports", "Cloud sync", "Advanced analytics"], popular: true, btnText: "Start Pro Trial" },
    { name: "Enterprise", price: "99", desc: "For teams and businesses", features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"], btnText: "Contact Sales" }
  ];

  return (
    <section className="pt-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-2">Simple, Transparent Pricing</h2>
          <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or cancel anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-10 rounded-[40px] border flex flex-col ${plan.popular ? 'bg-[#7C3AED] text-white border-transparent shadow-2xl scale-105 z-10' : 'bg-slate-50 border-gray-100 text-slate-800'}`}>
              {plan.popular && <div className="bg-orange-400 text-[10px] font-black uppercase px-4 py-1 rounded-full w-fit mb-4 mx-auto">Most Popular</div>}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-indigo-100' : 'text-gray-400'}`}>{plan.desc}</p>
              <div className="mb-8">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className="text-sm opacity-60">/Month</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm font-medium">
                    <span className={plan.popular ? "text-indigo-200" : "text-green-500"}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.popular ? 'bg-white text-[#7C3AED] hover:bg-indigo-50' : 'bg-[#7C3AED] text-white hover:bg-[#6D28D9]'}`}>
                {plan.btnText}
              </button>
            </div>
          ))}
        </div>
      </div>

        <div className="bg-gradient-to-br from-[#7C3AED] to-[#4F39F6] py-20 text-center text-white mt-28">
                <h2 className="text-4xl font-black mb-4">Ready To Transform Your Workflow?</h2>
                <p className="text-indigo-100 mb-10">Join thousands of professionals who are already using DigiTools.</p>
            <div className="flex justify-center gap-4">
                <button className="px-8 py-3 bg-white text-[#7C3AED] font-bold rounded-full">Explore Projects</button>
                <button className="px-8 py-3 border border-white text-white font-bold rounded-full hover:bg-white/10">See Pricing</button>
                
            </div>
            <p className="mt-4">14-day free trial • No credit card required • Cancel anytime</p>
        </div>

    </section>
    
  );
};

export default Pricing;