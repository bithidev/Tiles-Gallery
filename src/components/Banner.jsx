import { Button } from "@heroui/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";


const Banner = () => {
  return (
    <div>
     
      <div className="bg-[#1B1B1B] min-h-[80vh] shadow-2xl py-20 text-center text-white w-full h-full flex items-center ">
        <div className="mx-auto">
          <h1 className="text-6xl font-extrabold bg-linear-to-r from-[#ff8a77] via-[#fdde4b] to-[#13a0e5] bg-clip-text text-transparent leading-20">
              Discover Your Perfect <br /> Aesthetic.
            </h1>
              
              <p className="py-6 text-lg text-gray-300">
            Explore modern premium tiles
          </p>

            <Link href="/all-tiles">
              <Button className="bg-linear-to-r from-[#ff8a77] via-[#fdde4b] to-[#13a0e5] py-6 px-6 text-black text-lg font-semibold ">
                Browse Now
              </Button>
            </Link>

        </div>
      </div>
      <div>
         <Marquee className="bg-black py-10">
          <span className="text-white text-lg">
             New Arrivals: Ceramic Blue Tile | Weekly Feature:
            Modern Geometric Patterns | Join the Community...
          </span>
      </Marquee>
      </div>
    </div>

    
  );
};

export default Banner;