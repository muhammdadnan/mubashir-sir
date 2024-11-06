import {Montserrat} from "next/font/google";

const h1font = Montserrat({
weight: ['400', '700'],
style: 'normal',
subsets:['latin'],
display: 'swap'
})


export default function Main() {
    return (
      <div>
        <div className="w-full h-auto flex px-4 pt-48 md:pl-44 items-center">
          <div className="w-full text-center">
            <h5 className={`${h1font.className} text-[#35A6F0]`}>
              Welcome
            </h5>
            {/* main heading */}
            <h1 className={`${h1font.className} text-white font-bold lg:text-6xl lg:pt-10 text-4xl pt-5`}>
              Selling on the <br />
              internet like a pro
            </h1>
            {/* subheading */}
            <h4 className= {`${h1font.className} text-white font-normal lg:text-2xl lg:pt-10 sm:text-lg sm: pt-5`}>
              We know how large objects will act, but things on a <br />
              small scale just do not act that way.
            </h4>
            {/* both buttons */}
            <div className="w-full h-auto px-4 pt-4 mb-10">
              <button className="bg-[#35A6F0] text-white rounded p-4 mr-4">
                <span className={`${h1font.className}`}>Get Quote Now</span>
              </button>
              <button className="border border-[#35A6F0] text-[#35A6F0] rounded p-4 m-auto">
                <span className={`${h1font.className} p-4 m-auto font-bold`}>Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }