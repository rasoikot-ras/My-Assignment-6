const NavBar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center py-5 px-4 md:px-10 bg-white shadow-sm sticky top-0 z-50">
      {/* 1st logo */}
      <div className="text-2xl font-bold text-blue-600 cursor-pointer">
        DigiTools
      </div>

      {/* Menu Items */}
      <div className="hidden md:flex gap-8 font-medium text-gray-700">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Features</a>
        <a href="#" className="hover:text-blue-600">Pricing</a>
      </div>

      {/* Cart Icon */}
      <div className="relative cursor-pointer p-2">
        <div className="text-2xl text-gray-700">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        {/* Cart Count */}
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
            {cartCount}
          </span>
        )}
      </div>
    </nav>
  );
};

export default NavBar;