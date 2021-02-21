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
    OrderedList,
    ListItem,
} from "@chakra-ui/react";

import pngdark from "../resources/abcd1.png";
import pnglite from "../resources/abcd.png";

import { Link as RouterLink, Redirect, Route } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"


export function Page9() {
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'white');
    return (

        <Box textAlign="center" fontSize="2xl">
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
                    
                    Network scanning
                        </Text>
                    <Text width="70%" textAlign="left">
                    Network scanning refers to the use of a computer network to gather information regarding computing systems. Network scanning is mainly used for security assessment, system maintenance, and also for performing attacks by attackers.<p/>
Tools that we can used for network scanning are : →<OrderedList>
<ListItem>Fing App to identify connected devices, troubleshoot network and device issues,scan network , detect network intruders and run Wi-Fi and internet speed tests anywhere.</ListItem>
<ListItem>NMAP (Network Mapper) is a free and open source (license) utility for network discovery and security auditing. Many systems and network administrators also find it useful for tasks such as network inventory, managing service upgrade schedules, and monitoring host or service up time. NMAP uses raw IP packets in novel ways to determine what hosts are available on the network, what services (application name and version) those hosts are offering, what operating systems (and OS versions) they are running, what type of packet filters/firewalls are in use, and dozens of other characteristics. It was designed to rapidly scan large networks, but works fine against single hosts. NMAP runs on all major computer operating systems, and official binary packages are available for Linux, Windows, and Mac OS X.
</ListItem> 
</OrderedList>
The purpose of network scanning is to manage, maintain, and secure the system using data found by the scanner. Network scanning is used to recognize available network services, discover and recognize any filtering systems in place, look at what operating systems are in use, and to protect the network from attacks.
 </Text>

                </VStack>
            </Grid>
            <Spacer />

            <Link as={RouterLink} to="/page8">
                Previous Page
                </Link>
            <Spacer />
            <Link as={RouterLink} to="/page10">
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