import { Button } from "@heroui/react";
import Link from "next/link";

const AllTiles = async () => {
  const res = await fetch("https://tiles-gallery-mu-two.vercel.app/data.json");
  const data = await res.json();

  return (
    // <div className="bg-[#0e0e0e]">
    //   <div className="container mx-auto py-30">
    //     <h2 className="text-5xl font-bold text-center mb-10 text-white pb-10">
    //       All Tiles
    //     </h2>
    //     {/* <input
    //     type="text"
    //     placeholder="Search tiles..."
    //     className="input input-bordered w-full mb-10"
    //     onChange={(e) => setSearch(e.target.value)}
    //   /> */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {data.map((tile) => (
    //         <div key={tile.id} className="mb-6">
    //           <img src={tile.image} alt={tile.title} className="text-center text-xl pb-6 font-semibold text-white" />
    //           <h3 className="text-xl font-semibold text-white mt-4">{tile.title}</h3>
    //           <p className="text-gray-300">{tile.description}</p>
    //           <Link href={`/tile/${tile.id}`}>
    //         <Button className="bg-linear-to-r from-[#ff8a77] via-[#fdde4b] to-[#13a0e5] py-6 px-6 text-black text-lg font-semibold items-center w-full">
    //              Details
    //           </Button>
    //       </Link>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
     <div className="bg-[#0e0e0e]">
        <div className="container mx-auto py-30 ">
        <h2 className="text-5xl font-bold text-center mb-10 text-white pb-10">
          All Tiles
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((tile) => (
            <div key={tile.id} className="card bg-[#3b3b3b71] shadow-xl mb-6 ">
              <figure>
                <img src={tile.image} alt={tile.title} className="w-full h-64 object-cover"/>
              </figure>

              <div className="pt-6">
                <h2 className="text-center text-xl font-semibold pb-2 text-white">{tile.title}</h2>
                <p className="text-[#ffffffa8] text-center pb-8">{tile.description}</p>
                
                <Link href={`/tile/${tile.id}`}>
              <Button className="bg-linear-to-r from-[#ff8a77] via-[#fdde4b] to-[#13a0e5] py-6 px-6 text-black text-lg font-semibold items-center w-full">
               Details
              </Button>
            </Link>
                
              </div>
            </div>
            
            
          ))}
        </div>

       
      </div>
    </div>
   
  );
};

export default AllTiles;