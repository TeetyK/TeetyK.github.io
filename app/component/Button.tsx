import React from 'react';
import { LucideIcon } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: 'primary' | 'secondary' | 'inverted' | 'outlined' | 'iconOnly';
    icon?: LucideIcon | React.ElementType;
}
export default function Button({ variant = 'primary', children, icon: Icon , className='',
    ...props
}: ButtonProps) {
  const baseStyle = "flex items-center justify-center gap-2 px-5 py-2.5 rounded-md font-mono text-sm font-medium transition-all";
  
  const variants = {
  primary: "bg-[#FFB0D8] text-[#3D0A3A] hover:bg-[#FF99CC]",
  secondary: "bg-[#2C2834] text-[#E9E4F0] hover:bg-[#383342] hover:text-white",
  inverted: "bg-[#EAE5F2] text-[#1F1B26] hover:bg-white",
  outlined: "border border-[#847B90] text-[#E9E4F0] bg-transparent hover:bg-[#2C2834]/60 hover:border-[#A39AB0]",
  iconOnly: "p-2 bg-[#FFB0D8] text-[#3D0A3A] hover:bg-[#FF99CC] rounded-md",
};

  return (
    <button className={`${baseStyle} ${variants[variant]}`}
    {...props}>
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
}
