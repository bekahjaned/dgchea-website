import React from "react"
import { HeroImageWrap } from "../../Elements/HeroImageWrap"
import websiteCollage from '../../Assets/DGHEA-website.png'

function HeroImage() {
    return(
        <HeroImageWrap>
            <img src={websiteCollage} alt="collage containing DGHEA logo, child painting, cross, coffee mug, and crayons" />
        </HeroImageWrap>
    )
}

export default HeroImage