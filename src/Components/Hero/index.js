import React from "react"
import { HeroWrap } from "../../Elements/HeroWrap"
import HeroText from "../HeroText"
import HeroImage from "../HeroImage"

function Hero() {
    return(
        <HeroWrap>
            <HeroText/>
            <HeroImage/>
        </HeroWrap>
    )
}

export default Hero