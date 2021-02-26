import * as React from "react"
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
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    Code,
} from "@chakra-ui/react";

import RIP from "../resources/RIP.png";
import { Header } from "./header";
import { Footer } from "./footer";

import { Link as RouterLink, Redirect, Route } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { Topics } from "./topics"


export function Page5() {
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'black');
    const topicList = [
            {href: "#rip", content: "1. What is RIP?"},
            {href: "#ospf", content: "2. What is OSPF? "},
            {href: "#port", content: "3. Ports "},
            {href: "#modes", content: "4.  Modes of Router"},
            {href: "#types", content: "5.  Types of Routing "},
            {href: "#config", content: "6. Configuration "},
            {href: "#static and bid", content: "7. Static Routing "},
            {href: "#default", content: "8. Default Routing "},
            {href: "#dynamic", content: "9.  Dynamic Routing "},
            <Button as={RouterLink} to="/" position="fixed" bottom="3" right="3">Home Page</Button>
           
        ]; 
    return (

        <Box textAlign="center" fontSize="1xl" >
            <Box textAlign="left" position="fixed" >
            <Topics title="RIP and OSFP" topics={topicList} />
            </Box>
            <Box paddingtop="10"  > <Header /></Box>

            <Grid minH="50vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack>

                    <Box bg={color} width="-moz-max-content" p={10} textColor={textcolor} opacity="100%" borderRadius="50%">
                        <Text fontSize="5xl" >
                            Networking & it’s Security
                            </Text>

                    </Box>
                    <Text fontSize="3xl" id="rip">
                        Routing v/s Routed Protocols in Computer Network (RIP)

                        </Text>
                    <Text width="70%" textAlign="center">
                        The Network Layer of the OSI Model is responsible for providing logical addressing, which routers use to select best path for routing packets
                        </Text>
                    <Image src={RIP}></Image>
                    <Text width="60%" textAlign="left">
                        Design Network with three routers A,B,C<p />
Open Router A &gt;CMD<p /><Code>
Router &gt;EN<p />
Login<p />
#CONF T<p />
#ROUTER EIGRP 100<p />
#NETWORK 192.168.1.0<p />
#NETWORK 192.168.2.0<p />
#EXIT<p /></Code><br/>

For B<p />
<Code>
Open Router B  &gt; CMD<p />
Router &gt;EN<p />
Login<p />
#CONF T<p />
#ROUTER EIGRP 100<p />
#NETWORK 192.168.3.0<p />
#NETWORK 192.168.4.0<p />
#NETWORK 192.168.5.0<p />
#EXIT<p /></Code><br/>


Repeat steps for B and C router.<p />

                    </Text>
                    <Heading id="ospf">
                        Open Shortest Path First Protocol fundamentals(OSPF)</Heading>
                    <Text width="4xl">Open shortest path first (OSPF) is a link-state routing protocol which is used to find the best path between the source and the destination router using its own shortest path first (SPF) algorithm. A link-state routing protocol is a protocol which uses the concept of triggered updates, i.e., if there is a change observed in the learned routing table then the updates are triggered only, not like the distance-vector routing protocol where the routing table are exchanged at a period of time.<p />

Open shortest path first (OSPF) is developed by Internet Engineering Task Force (IETF) as one of the Interior Gateway Protocol (IGP), i.e., the protocol which aims at moving the packet within a large autonomous system or routing domain. It is a network layer protocol which works on the protocol number 89 and uses AD value 110. OSPF uses multicast address 224.0.0.5 for normal communication and 224.0.0.6 for update to designated router(DR)/Backup Designated Router (BDR).</Text>

                </VStack>
            </Grid>
            <Spacer />

            <Box position="fixed" bottom="3" left="0">

                <Button as={RouterLink} to="/page4">
                    Previous Page
                </Button>
                <Spacer />
                <Button as={RouterLink} to="/page6" position="fixed" bottom="3" right="0">
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
                        <DrawerHeader>HONEYPOT</DrawerHeader>
                        <DrawerBody>
                           
                            <Button as={RouterLink} to="/" position="fixed" bottom="3" right="3">Home Page</Button>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}
