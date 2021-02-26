import * as React from "react"
import {
    Box,
    Text,
    VStack,
    Button,
    Grid,
    Spacer,
    useColorModeValue,
    OrderedList,
    ListItem,
} from "@chakra-ui/react";


import { Link as RouterLink, Redirect, Route } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { Header } from "./header";
import { Footer } from "./footer";
import { Topics } from "./topics";


export function Page9() {
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'black');
    const topicList = [
        {href: "#ns", content: "1. What is Netwrok scanning?"},
        <Button as={RouterLink} to="/" position="fixed" bottom="3" right="3">Home Page</Button>
    ];
    return (

        <Box textAlign="center" fontSize="2xl">
            <Box textAlign="left" position="fixed">
            <Topics title="Network Scanning" topics={topicList}/>
            </Box>
            <Box paddingtop="10" > <Header/></Box>

            <Grid minH="50vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack>

                <Box bg={color} width="-moz-max-content" p={10} textColor={textcolor} opacity="100%" borderRadius="50%">
<Text fontSize="5xl" >
                            Networking & it’s Security
                            </Text>

                    </Box>
                    <Text fontSize="3xl" id="ns">
                    
                    Network scanning
                        </Text>
                    <Text width="70%" textAlign="left" >
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
