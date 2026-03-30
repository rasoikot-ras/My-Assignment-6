import Banner from "./component/Banner";
import Models from "./component/models";
import NavBar from "./component/NavBar";
import Cart from "./component/cart";

import './index.css';
import { useState } from "react";

const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}

const modelPromise = getModels()

function App() {
  const [activeView, setActiveView] = useState("model");
  const [carts, setCarts] = useState([])
 

  return (
    <>
      <NavBar cartCount={0} />
      <Banner />

      {/* button */}
      <div className="flex justify-center mb-16">
        <div className="bg-white border border-gray-100 p-1 rounded-full shadow-sm inline-flex">
          <button
            onClick={() => setActiveView("model")}
            className={`px-10 py-3 rounded-full font-bold transition-all ${ activeTab === "model"
              ? "bg-[#7C3AED] text-white shadow-md" 
              : "text-gray-400 hover:text-slate-800"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveView("cart")}
            className={`px-10 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${ activeTab === "cart"
              ? "bg-[#7C3AED] text-white shadow-md" 
              : "text-gray-400 hover:text-slate-800"
            }`}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>
       {activeView === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}
       {activeView === "cart" && <Cart  carts={carts} setCarts={setCarts}/>}
    </>
  );
}

export default App;

