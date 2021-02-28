import * as React from "react"


import {
    Button,
    HStack,
    IconButton,
    Spacer,
    Link,
    Box,
    Heading,
} from "@chakra-ui/react"
import { FaGithub, FaLinkedinIn, FaTwitter, FaExternalLinkAlt } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import { Link as RouterLink } from "react-router-dom"

export function Footer(props: { nextPage: string, previousPage: string }) {

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
        <Box  textAlign="center">
<Link href="https://www.geeksforgeeks.org/" isExternal>
<Heading textDecoration="Highlight"> FOR MORE INFORMATION CLICK ME </Heading></Link>
        <HStack padding="10" >
            
            <Button as={RouterLink} to={props.nextPage} position="fixed" bottom="3" right="5">
                Next Page
            </Button>
            <Spacer/>
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
<Spacer/>
            
            <Button as={RouterLink} to={props.previousPage}  position="fixed" bottom="3" left="2">
                Previous Page
            </Button>
        </HStack>
        </Box>

    )

}