import * as React from "react"


import {
    HStack,
    IconButton,
} from "@chakra-ui/react"
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
export function Footer() {

    const openGit = () => {
        window.location.href = 'https://github.com/HIGH238';
    }
    const openLinkedin = () => {
        window.location.href = 'https://www.linkedin.com/in/aakash-deep-67b0b8193/';
    }
    const openTwitter = () => {
        window.location.href = 'https://twitter.com/AakashD27211700';
    }
    const openMail = () => {
        window.location.href = 'mailto:aakashdeep01971@gm0ail.com';
    }

    return (

        <HStack padding="10" >
            <IconButton
                size="lg"
                variant="outline"
                aria-label="Github"
                icon={<FaGithub />}
                onClick={openGit}
            />
            <IconButton
                size="lg"
                aria-label="Linkedin"
                variant="outline"
                onClick={openLinkedin}
                icon={<FaLinkedinIn />} />
            <IconButton
                size="lg"
                aria-label="Mail"
                variant="outline"
                onClick={openMail}
                icon={< AiOutlineMail />} />
            <IconButton
                size="lg"
                variant="outline"
                aria-label="twitter"
                onClick={openTwitter}
                icon={<FaTwitter />} />
        </HStack>


    )

}