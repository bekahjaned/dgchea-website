import React from 'react'
import { SectionWrap } from '../../Elements/SectionWrap'
import Heading from '../Heading'
import { TextWrap } from '../../Elements/TextWrap'

function Contact() {
    return (
        <SectionWrap>
            <Heading heading="Contact" />
            <TextWrap>
                <p>Current membership (2023-2024) fee is $30 and includes access to our Facebook group, Signal chat and email updates about current happenings within our group.</p>
                <p>Membership fees and form are due beginning of September. LINK HERE FOR FORM</p>
                <p>Our year kicks off with a trip to the apple orchard and a beach day in September.</p>
                <p>Email: <a href='mailto: dgchea@gmail.com'>dgchea@gmail.com</a> | <a href='https://www.facebook.com/dundashomeschoolers/about' target='_blank' rel="noreferrer">Our Facebook page</a></p>
            </TextWrap>
        </SectionWrap>
    )
}

export default Contact