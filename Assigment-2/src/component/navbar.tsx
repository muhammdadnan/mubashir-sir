
import {Montserrat} from "next/font/google";

const h1font = Montserrat({
weight: ['400', '700'],
style: 'normal',
subsets:['latin'],
display: 'swap'
})

export default function Navbar() {
    return (
      <>
      <nav className= {`${h1font.className} w-full h-auto flex px-4 pt-8 pl-34 lg:pl-44 justify-between items-center`}>
      <div className="text-2xl text-white font-bold">
        BRANDNAME
      </div>
      <ul className="md:flex font-semibold p-4 text-md">
        <li className={`${h1font.className} ml-4 text-white`}>Home</li>
        <li className="ml-4 text-white">Product</li>
        <li className="ml-4 text-white">Pricing</li>
        <li className="ml-4 text-white">Contact</li>
      </ul>
      <div>
        <ul className="md:flex">
          <li className="ml-4 text-lg font-semibold text-white p-2 pr-10 lg:p-4">Login</li>
          <li className="font-semibold text-white bg-[#23A6F0] p-2 rounded-xl text-md pt-4 lg:p-4 text-center">Join Us</li>
        </ul>
      </div>
      </nav>
      </>
    );
  }