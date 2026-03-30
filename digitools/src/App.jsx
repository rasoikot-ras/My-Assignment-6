
import Banner from "./component/Banner";
import Models from "./component/models";
import NavBar from "./component/NavBar";
import Cart from "./component/cart";
import Steps from "./component/Steps";
import Pricing from "./component/Pricing";
import { ToastContainer } from 'react-toastify';


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
      <NavBar cartCount={carts.length} />
      <Banner />
       <div className="text-center mb-12 pt-20">
        <h2 className="text-5xl font-extrabold text-[#101727]">Premium Digital Tools</h2>
        <p className="text-gray-500 mt-4 text-lg font-medium">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>
      {/* button */}
      <div className="flex justify-center mb-16">
        <div className="bg-white border border-gray-100 p-1 rounded-full shadow-sm inline-flex">
          <button
            onClick={() => setActiveView("model")}
             aria-label={`Cart (${carts.length})`}
            className={`px-10 py-3 rounded-full font-bold transition-all ${ activeView === "model"
              ? "bg-[#7C3AED] text-white shadow-md" 
              : "text-gray-400 hover:text-slate-800"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveView("cart")}
            className={`px-10 py-3 rounded-full font-bold transition-all flex items-center gap-2 ${ activeView === "cart"
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

       <Steps />
       <Pricing />
       
       <ToastContainer/>
    </>
  );
}

export default App;

