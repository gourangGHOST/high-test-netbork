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
    Heading,
} from "@chakra-ui/react";

import RIP from "../resources/RIP.png";
import pnglite from "../resources/abcd.png";

import { Link as RouterLink, Redirect, Route } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"


export function Page5() {
    const color = useColorModeValue('purple.400', 'plum');
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
                        Routing v/s Routed Protocols in Computer Network (RIP)

                        </Text>
                    <Text width="70%" textAlign="center">
                        The Network Layer of the OSI Model is responsible for providing logical addressing, which routers use to select best path for routing packets
                        </Text>
                    <Image src={RIP}></Image>
                    <Text width="60%" textAlign="left">
                    Design Network with three routers A,B,C<p/>
Open Router A &gt;CMD<p/>
Router &gt;EN<p/>
Login<p/>
#CONF T<p/>
#ROUTER EIGRP 100<p/>
#NETWORK 192.168.1.0<p/>
#NETWORK 192.168.2.0<p/>
#EXIT<p/>

For B<p/>
Open Router B  &gt; CMD<p/>
Router &gt;EN<p/>
Login<p/>
#CONF T<p/>
#ROUTER EIGRP 100<p/>
#NETWORK 192.168.3.0<p/>
#NETWORK 192.168.4.0<p/>
#NETWORK 192.168.5.0<p/>
#EXIT<p/>


Repeat steps for B and C router.<p/>

                    </Text>
<Heading>
Open Shortest Path First Protocol fundamentals(OSPF)</Heading>
<Text width="4xl">Open shortest path first (OSPF) is a link-state routing protocol which is used to find the best path between the source and the destination router using its own shortest path first (SPF) algorithm. A link-state routing protocol is a protocol which uses the concept of triggered updates, i.e., if there is a change observed in the learned routing table then the updates are triggered only, not like the distance-vector routing protocol where the routing table are exchanged at a period of time.<p/>

Open shortest path first (OSPF) is developed by Internet Engineering Task Force (IETF) as one of the Interior Gateway Protocol (IGP), i.e., the protocol which aims at moving the packet within a large autonomous system or routing domain. It is a network layer protocol which works on the protocol number 89 and uses AD value 110. OSPF uses multicast address 224.0.0.5 for normal communication and 224.0.0.6 for update to designated router(DR)/Backup Designated Router (BDR).</Text>

                </VStack>
            </Grid>
            <Spacer />

            <Link as={RouterLink} to="/page4">
                Previous Page
                </Link>
            <Spacer />
            <Link as={RouterLink} to="/page6">
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