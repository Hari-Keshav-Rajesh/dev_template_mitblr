import { ModeToggle } from "../Theme/Toggle"
import "../../app/globals.css"

const MobileHeader = () => {
    return(
        <div className="flex flex-row justify-between h-14">
            MobileHeader
            <ModeToggle />
        </div>
    )
}

export default MobileHeader