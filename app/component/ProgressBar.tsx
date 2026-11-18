import React from 'react';
interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement>{
    color: string;
    percent: number;
}

export default function ProgressBar({color , percent , className='',...props}:ProgressBarProps ){
    return (
        <div className={`w-full h-2 bg-[#2A2D3D] rounded-full overflow-hidden mb-3`}
        {...props}>
            <div className="h-full rounded-full transition-all duration-500 ease-out"
            style={{width: `${percent}%`,backgroundColor: color}}>
            </div>
        </div>
    )
}