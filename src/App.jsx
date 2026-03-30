
import Banner from "./component/Banner";
import Models from "./component/models";
import NavBar from "./component/NavBar";
import Cart from "./component/cart";
import Steps from "./component/Steps";
import Pricing from "./component/Pricing";
import Footer from "./Footer";
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

    
      {activeView === "model" && (
        <>
          <Banner />
        
          <div className="text-center pt-20 mb-10">
            <h2 className="text-5xl font-black text-slate-900">Premium Digital Tools</h2>
            <p className="text-[#627382] mt-4 text-base font-medium">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
          </div>

        
          <div className="flex justify-center mb-16">
            <div className="bg-white border border-[#F6F6F6] p-1 rounded-full shadow-sm inline-flex">
              <button onClick={() => setActiveView("model")} className={`px-10 py-3 rounded-full font-bold ${activeView === "model" ? "bg-[#7C3AED] text-white" : "text-gray-400"}`}>Products</button>
              <button onClick={() => setActiveView("cart")} className={`px-10 py-3 rounded-full font-bold ${activeView === "cart" ? "bg-[#7C3AED] text-white" : "text-gray-400"}`}>Cart ({carts.length})</button>
            </div>
          </div>

        
          <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>

        
          <Steps />
          <Pricing />
          <Footer />
        </>
      )}

    
      {activeView === "cart" && (
        
        <div className="min-h-screen pt-20 bg-slate-50">
          <div className="text-center mb-12 pt-20">
            <h2 className="text-5xl font-extrabold text-[#101727]">Premium Digital Tools</h2>
            <p className="text-[#627382] mt-4 text-base font-medium">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
          </div>
        
          <div className="flex justify-center mb-10">
            <div className="bg-white border border-[#F6F6F6] p-1 rounded-full shadow-sm inline-flex">
              <button onClick={() => setActiveView("model")} className="px-10 py-3 rounded-full font-bold text-gray-400">Products</button>
              <button className="px-10 py-3 rounded-full font-bold bg-[#7C3AED] text-white">Cart ({carts.length})</button>
            </div>
          </div>

        
          <Cart carts={carts} setCarts={setCarts} />
        </div>
      )}

      <ToastContainer />
    </>
  );
}

export default App;

