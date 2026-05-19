"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-2 bg-[#1B1B1B] text-white">
      <nav className=" flex justify-between items-center container mx-auto py-5">
        <div className="flex gap-2 ">
          
          <Link href={"/"}>
           <img src="/logo.png" alt="" className="w-30" />
          </Link>
        </div>

        <ul className="flex items-center text-md font-medium text-white ">
          <li className=" hover:bg-linear-to-r from-[#ff8a77] via-[#fdde4b] to-[#13a0e5] py-2 px-5 hover:text-black rounded-full">
            <Link href={"/"} className="">Home</Link>
          </li>
          <li className=" hover:bg-linear-to-r from-[#ff8a77] via-[#fdde4b] to-[#13a0e5] py-2 px-5 hover:text-black rounded-full">
            <Link href={"/all-tiles"}>All Tiles</Link>
          </li>
          <li className=" hover:bg-linear-to-r from-[#ff8a77] via-[#fdde4b] to-[#13a0e5] py-2 px-5 hover:text-black rounded-full">
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        <div className="flex">
          <ul className="flex items-center text-sm gap-4">
            <li className="bg-linear-to-r from-[#ff8a77] via-[#fdde4b] to-[#13a0e5] py-2.5 px-5 text-black text-lg font-semibold rounded-full">
              <Link href={"/login"} >Login</Link>
            </li>
            <li className="bg-linear-to-r from-[#ff8a77] via-[#fdde4b] to-[#13a0e5] py-2.5 px-5 text-black text-lg font-semibold rounded-full">
              <Link href={"/logged out"} >Logged Out</Link>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;