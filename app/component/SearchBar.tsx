import { Search } from "lucide-react";
export default function SearchBar(){
    return (
        <div className="flex items-center gap-3 bg-[#1A1C28] border border-gray-700/50 rounded-md px-3 py-2 w-full">
            <Search className="w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search"
            className="bg-transparent text-white placeholder-gray-500 focus:outline-none w-full font-inter text-sm" />
        </div>
    )
}