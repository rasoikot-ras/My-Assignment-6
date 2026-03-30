import { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise, carts, setCarts}) => {
  const models = use(modelPromise);
    
  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-[#101727]">Premium Digital Tools</h2>
        <p className="text-gray-500 mt-4 text-lg font-medium">Choose from our curated collection of digital products</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {models.map((model) => (
          <ModelCard 
            key={model.id} 
            model={model} 
            carts={carts} 
            setCarts={setCarts}
          />
        ))}
      </div>
    </div>
  );
};

export default Models;