import { use } from "react";
import ModelCard from "./ModelCard";

const Models = ({ modelPromise, carts, setCarts}) => {
  const models = use(modelPromise);
    
  return (
    <div className="py-2 max-w-7xl mx-auto px-4">
     

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