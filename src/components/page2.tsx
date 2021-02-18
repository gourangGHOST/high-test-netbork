import * as React from "react"
import { useState } from "react"
import {
    Box,
    Text,
    Link,
    Image,
    VStack,
    Button,
    Grid,
    Spacer,
    useColorModeValue,
    Slide,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
} from "@chakra-ui/react";

import pngdark from "../resources/abcd1.png";
import pnglite from "../resources/abcd.png";

import { Link as RouterLink, Redirect, Route } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"


export function Page2() {
    const color = useColorModeValue('purple.400', 'green.600');
    const textcolor = useColorModeValue('white', 'white');
    return (

        <Box textAlign="center" fontSize="1xl">
            <Box textAlign="left" position="fixed">
                <SizeExample />
            </Box>

            <Grid minH="50vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack>

                    <Box bg={color} w="auto" p={4} textColor={textcolor} opacity="100%" borderRadius="full">
                        <Text fontSize="5xl" >
                            Networking & it’s Security
                            </Text>

                    </Box>
                    <Text fontSize="3xl">
                        INTRODUCTION TO CISCO PACKET TRACER

                        </Text>
                    <Text width="90%" textAlign="center">
                        Packet Tracer is a cross-platform visual simulation tool designed by Cisco Systems that allows users to create network topologies and imitate modern computer networks. The software
                        allows users to simulate the configuration of Cisco routers and switches using a simulated command line interface
                        </Text>

                    <Text width="90%" textAlign="center">
                        DOWNLOAD CPT BY CLICKING THE BELOW
                            </Text>
                    <RedirectButton />
                    <SlideEx />
                </VStack>
            </Grid>
            <Spacer />

            <Link as={RouterLink} to="/page1">
                Previous Page
                </Link>
            <Spacer />
            <Link as={RouterLink} to="/page3">
                Next Page
                </Link>
            <Spacer />
            <Link as={RouterLink} to="/">
                Homepage
                </Link>



        </Box>
    )
}
function SlideEx() {
    const { isOpen, onToggle } = useDisclosure()
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'white');
    return (
        <>
            <Button onClick={onToggle}> WHY IS CISCO PACKET TRACER USED ? </Button>
            <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    p="40px"
                    textColor={textcolor}
                    mt="4"
                    bg={color}
                    rounded="md"
                    shadow="md"
                >
                    <Text>
                        Packet Tracer offers an effective, interactive environment for learning networking concepts and protocols. Most importantly, Packet Tracer helps students and instructors create their own
                        virtual “network worlds” for exploration, experimentation, and explanation of networking concepts and technologies.
            </Text>
                </Box>
            </Slide>
        </>
    )
}





export function RedirectButton() {

    const textcolor = useColorModeValue('black', 'white');
    const [instaRedirect, setInstaRedirect] = useState(false);
    const btnClick = () => {
        setInstaRedirect(true);
    }

    return (
        <>
            {instaRedirect ? <Redirect to="/cptdownload" /> : null}
            <Button onClick={btnClick} isExternal textColor={textcolor} >

                DOWNLOAD
              </Button>
        </>
    )
}
function SizeExample() {
    const [size, setSize] = React.useState("md")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize: React.SetStateAction<string>) => {
        setSize(newSize)
        onOpen()
    }

    const sizes = ["xs"]

    return (
        <>
            {sizes.map((size) => (
                <Button
                    onClick={() => handleClick(size)}
                    key={size}
                    m={4}
                >{`MENU`}</Button>
            ))}

            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader>{``}</DrawerHeader>
                        <DrawerBody>
                            {size === "full"
                                ? `You're trapped 😆 , refresh the page to leave or press 'Esc' key.`
                                : null}
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}