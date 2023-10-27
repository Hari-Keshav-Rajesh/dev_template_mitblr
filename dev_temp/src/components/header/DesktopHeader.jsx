import { ModeToggle } from "../Theme/Toggle"
import "../../app/globals.css"
const DesktopHeader = () => {
    return(
        <div className="flex flex-row justify-between h-14 p-2">
            <div className="text-3xl font-black tracking-tight  ">DesktopHeader</div>
            <ModeToggle />
        </div>
    )
}

export default DesktopHeader