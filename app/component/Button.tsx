
export default function Button({ variant, children, icon: Icon }) {
  const baseStyle = "flex items-center justify-center gap-2 px-4 py-2 rounded font-mono text-sm transition-all";
  
  const variants = {
    primary: "bg-[#10B981] text-black hover:bg-[#0ea5e9]", 
    secondary: "bg-[#2A2D3D] text-gray-300 hover:text-white",
    inverted: "bg-white text-black",
    outlined: "border border-gray-600 text-gray-300 bg-transparent",
    iconOnly: "p-2 bg-[#8B5CF6] text-white rounded-md"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
}
