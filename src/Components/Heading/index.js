import React from 'react'
import { HeadingWrap } from "../../Elements/HeadingWrap"

function Heading({ heading }) {
    return (
        <HeadingWrap>
            <h3>{heading}</h3>
            <hr/>
        </HeadingWrap>
    )
}

export default Heading