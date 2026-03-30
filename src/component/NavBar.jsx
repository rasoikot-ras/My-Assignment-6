import mynav from '../assets/cart.png'


const NavBar = ({ cartCount }) => {
  return (
    <nav className="flex justify-between items-center py-5 px-4 md:px-12 bg-white shadow-md sticky top-0 z-50">
      <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer">
        DigiTools
      </div>

      <div className="hidden lg:flex gap-8 font-semibold text-gray-600">
        <a href="#" className="hover:text-blue-600">Products</a>
        <a href="#" className="hover:text-blue-600">Features</a>
        <a href="#" className="hover:text-blue-600">Pricing</a>
        <a href="#" className="hover:text-blue-600">Testimonials</a>
        <a href="#" className="hover:text-blue-600">FAQ</a>

      </div>

      <div className="flex items-center gap-4">
        
        <div className="relative p-4 bg-gray-100 rounded-full cursor-pointer">
          <span><img src={mynav} alt="" /></span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-white">
              {cartCount}
            </span>
          )}
        </div>
        <button className="hidden md:block font-bold text-gray-700 hover:text-blue-600">Login</button>
        <button className="px-6 py-2.5 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default NavBar;