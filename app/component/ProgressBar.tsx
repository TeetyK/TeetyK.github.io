export default function ProgressBar({color , percent} ){
    return (
        <div className="w-full h-2 bg-[#2A2D3D] rounded-full overflow-hidden mb-3">
            <div className="h-full rounded-full"
            style={{width: `${percent}%`,backgroundColor: color}}>
            </div>
        </div>
    )
}