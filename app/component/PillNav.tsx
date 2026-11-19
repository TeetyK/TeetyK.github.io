import { Home, Search, User } from 'lucide-react';

export default function PillNav() {
  return (
    <div className="inline-flex items-center gap-2 bg-[#1A1C28] p-2 rounded-full border border-gray-700/50">
      {/* Active State (ปุ่มซ้ายสุดสีเขียว) */}
      <button className="p-2 bg-[#F472B6] text-black rounded-sm">
        <Home className="w-4 h-4" />
      </button>
      {/* Inactive States */}
      <button className="p-2 text-gray-400 hover:text-white transition-colors">
        <Search className="w-4 h-4" />
      </button>
      <button className="p-2 text-gray-400 hover:text-white transition-colors">
        <User className="w-4 h-4" />
      </button>
    </div>
  );
}