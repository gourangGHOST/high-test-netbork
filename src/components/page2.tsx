import * as React from "react"
import { useState } from "react"
import {
    Box,
    Text,
    Image,
    VStack,
    Button,
    Grid,
    Spacer,
    useColorModeValue,
    Slide,
    useDisclosure,
    Heading,
   
} from "@chakra-ui/react";
import {Topics} from "./topics"
import connections from "../resources/connections.png";
import ciscoui from "../resources/CISCOUI.png";
import ND from "../resources/ND.png";
import CD from "../resources/CD.png";
import { Link as RouterLink, Redirect, Route } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { Header } from "./header";
import { Footer } from "./footer";
import { Topbar } from "./something";


export function Page2() {
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'black');
    const topicList = [
        {href: "#intro", content: "1. Intoduction to cpt"},
        {href: "#download", content: "2. Download link"},
        {href: "#connections", content: "3. connections"},
        {href: "#nd", content: "4. Networking devices"},
        {href: "#cd", content: "5. Connecting devices"},
        <Button as={RouterLink} to="/"   bottom="3" right="3">Home Page</Button>
        

    ];
    return (

        <Box textAlign="center" fontSize="1xl">
            <Box textAlign="left"  >
            <Topbar/>
                <Topics title="CPT" topics={topicList} />
            </Box>

            <Grid minH="50vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack>

                <Box bg={color} width="-moz-max-content" p={10} textColor={textcolor} opacity="100%" borderRadius="5%">
      <Text fontSize="5xl" >
                            Networking & it’s Security
                            </Text>

                    </Box>
                    <Text fontSize="3xl" id="intro">
                        INTRODUCTION TO CISCO PACKET TRACER

                        </Text>
                    <Text width="70%" textAlign="center">
                        Packet Tracer is a cross-platform visual simulation tool designed by Cisco Systems that allows users to create network topologies and imitate modern computer networks. The software
                        allows users to simulate the configuration of Cisco routers and switches using a simulated command line interface
                        </Text>

                    <Text width="90%" textAlign="center" id="download">
                        DOWNLOAD CPT BY CLICKING THE BELOW
                            </Text>
                    <RedirectButton />
                    <SlideEx />
                    <Heading>
                        Basic ui of cisco 
                    </Heading>  <Text width="70%" textAlign="center">
                    Cisco Packet Tracer is a fancy e-learning tools are made by Cisco that will simulate the workings of a network based on the topology and configuration imposed by the users exactly like the original. When you open Packet Tracer, by default you will be presented with the following interface:
 
</Text>
                    <Image src={ciscoui} width="70%" textAlign="center"/>
                  
                    
                    <Text width="70%" textAlign="center" id="connections">
                        • Connections :- This is the connection wires for connecting our Network with the help of these cables and wires. Some main connecting wires are as folows :- </Text>
                        <Image src={connections} width="70%" textAlign="center"/>
                   
                    <Text width="70%" textAlign="center" id="nd">
                    • Networking Devices: - This box contains the type of devices and connections available in Packet Tracer. The Device-Specific Selection Box will change depending on which type of device you choose. The top row of icons represents the category list consisting of: Networking Devices, End Devices, Components, Connections, Miscellaneous, and Multiuser. Each category contains at least one sub-category group. 
                    </Text> <Image src={ND} width="70%" textAlign="center"/>
                   
                    <Text width="70%" textAlign="center"id="cd" size="lg">
                    • Connection Devices:  - This box is where you choose specifically which devices you want to put in your network and which connections to make. In this box, you'll find devices that may have already been obsolete.  
                    </Text> <Image src={CD} width="70%" textAlign="center"/>
                 </VStack>
            </Grid>
            <Spacer />



                <Grid>
                <Box justifySelf="center"> <Footer nextPage="/page3"
                        previousPage="/page1" />
                </Box></Grid>

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
