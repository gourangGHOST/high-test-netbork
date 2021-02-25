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
import { Header } from "./header";
import { Footer } from "./footer";


export function Page9() {
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'black');
    return (

        <Box textAlign="center" fontSize="2xl">
            <Box textAlign="left" position="fixed">
                <SizeExample />
            </Box>
            <Box paddingtop="10" > <Header/></Box>

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
                    <Text width="70%" textAlign="left" id="networkscanning">
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

            <Box position="fixed" bottom="3" left="3">

                <Button as={RouterLink} to="/page8">
                    Previous Page
                </Button>
                <Spacer />
                <Button as={RouterLink} to="/page10" position="fixed" bottom="3" right="3">
                    Next Page
                </Button>
                <Spacer />
                </Box>
            
                <Grid>
                <Box justifySelf="center"> <Footer />
                </Box></Grid>



        </Box>
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
                >{`TOPICS`}</Button>
            ))}

            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader>{``}</DrawerHeader>
                        <DrawerBody>
                            <Link href="#networkscanning">NETWROK SCANNING</Link>
                            <Button as={RouterLink} to="/" position="fixed" bottom="3" right="3">Home Page</Button>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}