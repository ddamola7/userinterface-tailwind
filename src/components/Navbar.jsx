

const Navbar = () => {
  return (
    <nav className="w-full h-12 shadow flex items-center justify-around bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  ">
    <div>
      <p className="text-xl font-bold text-white font-bold uppercase">Adediran</p>
    </div>

    <div>
      <a href className="me-4 hover:underline hover:text-green-900">Home</a>
      <a href className="me-4">About</a>
      <a href className="me-4">Products</a>
      <a href className="me-4">Testimonials</a>
      <a href className="me-4"> contacts</a>
    </div>


    <div>
      <button className="py-1 px-4 border rounded-full hover:animate-bounce hover:bg-gray-800 hover:text-white">Register</button>
      <button className="py-1 px-4 border rounded-full hover:animate-bounce hover:bg-green-800 hover:text-white ">login</button>
    </div>

   </nav>
  )
}

export default Navbar
