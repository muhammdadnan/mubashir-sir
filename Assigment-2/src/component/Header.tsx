"use client"

import { FaBars } from 'react-icons/fa';

export default function Header(){
  const toggleMenu = () => {
    const menu = document.getElementById('dropdownMenu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  };

  return (
    <header className="w-full container mx-auto bg-blue-500 h-24 lg:pt-8">
      <nav className=" flex 
                      lg:container lg:mx-auto lg:ml-44
                      md:container md:mx-auto md:ml-44 md:bg-black md:pt-8
      ">
        <div className="text-white text-xl font-bold flex items-center justify-between lg:text-2xl">BRANDNAME</div>
          <div className="hidden sm:flex space-x-6 text-white text-lg lg:ml-48 lg:text-[14px] 
          md:pl-14 md:text-[14px]
          ">
          <a href="#" className="hover:text-gray-200">Home</a>
          <a href="#" className="hover:text-gray-200">Product</a>
          <a href="#" className="hover:text-gray-200">Pricing</a>
          <a href="#" className="hover:text-gray-200">Contact</a>
        </div>
        <div className='md:w-20 md:h-6 md:text-white md:flex'>
          <ul className='lg:flex space-x-10 lg:text-white '>
            <li className='p-2'>Login</li>
            <li className='border-solid border rounded-xl lg:text-[14px] lg:bg-[#23A6F0] font-bold p-2 lg:w-32 lg:h-14 lg:text-center lg:leading-7 lg:tracking-wider
            md:leading-7 md:p-1'>Join Us</li>
          </ul>
        </div>
       <div
          id="menuButton"
          className="sm:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          <FaBars />
        </div>
      </nav>
      <div id="dropdownMenu" className="sm:hidden hidden p-4">
        <a href="#" className="block text-white py-2 text-center hover:bg-blue-700 hover:rounded-lg">Home</a>
        <a href="#" className="block text-white py-2 text-center hover:bg-blue-700 hover:rounded-lg">Product</a>
        <a href="#" className="block text-white py-2 text-center hover:bg-blue-700 hover:rounded-lg">Pricing</a>
        <a href="#" className="block text-white py-2 text-center hover:bg-blue-700 hover:rounded-lg">Contact</a>
      </div>
    </header>
  );
};


