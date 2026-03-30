import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => { 
  
  const isAlreadyInCart = carts.find((item) => item.id === model.id);

  const handleAddToCart = () => {
    if (isAlreadyInCart) {
      toast.error("Item already in cart!");
      return;
    }
    
    setCarts([...carts, model]);
    toast.success(`${model.name || "Tool"} added successfully!`);
  };

  return (
    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative group">
      
      {model.badge && (
        <div className="absolute top-5 right-5 z-10">
          <span className="bg-[#7C3AED] text-white text-[10px] font-black px-3 py-1 rounded-lg shadow-md uppercase tracking-widest">
            {model.badge}
          </span>
        </div>
      )}

      <div>
        <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
          <img src={model.image} alt="icon" className="w-8 h-8 object-contain" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3">{model.name}</h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">{model.description}</p>
        
        <div className="mb-6">
          <span className="text-3xl font-black text-slate-900">${model.price}</span>
          <span className="text-gray-400 text-sm font-medium">/{model.type || 'mo'}</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8">
          {model.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-500 font-bold">✓</span> {feature}
            </li>
          ))}
      </ul>

      <button 
        onClick={handleAddToCart}
        className={`w-full py-4 font-bold rounded-2xl transition-all shadow-lg ${
          isAlreadyInCart 
          ? "bg-green-100 text-green-600 cursor-not-allowed" 
          : "bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-indigo-100 active:scale-95"
        }`}
      >
        {isAlreadyInCart ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ModelCard;