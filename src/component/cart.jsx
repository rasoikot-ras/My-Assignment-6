// import React from "react";

// const Cart = () => {
//     return (
//         <div>
//             cart
//         </div>
//     )
// }

// export default Cart


import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payement successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);

    

    toast.success("Item deleted!");
  };

  return (
    <div className=" p-10 max-w-7xl mx-auto bg-white border border-[#F2F2F2] rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Your Cart</h1>

      {carts.length === 0 ? (
        <div className="h-96 pt-30 items-center">
            <p className="text-center text-8xl mb-4"><i class="fa-solid fa-cart-shopping"></i></p>
            <p className="text-center text-2xl font-extrabold">Cart is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-5 mt-4">
            {carts.map((item) => (
              <div
                className="flex items-center justify-between bg-[#E3F6FF] border-none rounded-lg p-3"
                key={item.id}
              >
                <div className="flex  items-center gap-2">
                  <div>
                    <img
                      className="h-20 w-10 object-contain"
                      src={item.image}
                    />
                  </div>

                  <div>
                    {/* <h2 className="text-xl font-bold">{item.title}</h2> */}
                    <div className="text-left">
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <p className="text-base text-[#627382]">${item.price}</p>
                  </div>
                  </div>
                </div>


                <div className="flex">
                  
                  <button
                    onClick={() => handleDelete(item)}
                    className=" btn rounded-full btn-error"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className=" flex justify-between bg-[#627382] text-black p-5 mt-5 rounded-lg text-3xl font-bold">
            <div>Total:</div>
            <div>$ {totalPrice}</div>
          </div>

          <button
            onClick={handlePayment}
            className="btn w-full mt-5 bg-[#9514FA] text-white text-2xl  rounded-2xl hover:bg-green-400"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;