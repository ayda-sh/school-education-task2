import { LeftSideHeadr } from "./leftSide-header"
import { RightSideHeader } from "./rightSide-header"


export function Header() {
    return(
        <header>
            <LeftSideHeadr/>
            <RightSideHeader/>
        </header>
    )
}