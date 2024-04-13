import React from 'react'
import { SectionWrap } from '../../Elements/SectionWrap'
import Heading from '../Heading'
import { TextWrap } from "../../Elements/TextWrap"

function About() {
    return(
        <SectionWrap>
            <Heading heading='About' />
            <TextWrap>
                <p>The DGCHEA is a loosely connected group of Christian families who educate their children at home, either in or close to South or North Dundas townships and townships in East Grenville (North Grenville, Edwardsburgh/Cardinal, Augusta).</p>
                <p>We meet every Tuesday at alternating locations and do different activities every week such as full or part day co-op, field trips and outdoor days. Other activities include mom nights, year-end graduation, and meetings every couple months to plan for the year.</p>
            </TextWrap>
        </SectionWrap>
    )
}

export default About