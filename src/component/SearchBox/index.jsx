import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
     return (
         <div className="w-full h-auto bg-[#f1f1f1] relative overflow-hidden">
            <IoIosSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
               type="text"
               placeholder="Search..."
               className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] bg-[#f1f1f1] p-2 pl-8 rounded-md focus:outline-none focus:border-[rgba(0,0,0,0.5)] text-[13px]"
            />
         </div>
     )
    }
export default SearchBox;