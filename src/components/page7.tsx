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
} from "@chakra-ui/react";

import NAT from "../resources/NAT.png";
import NAT1 from "../resources/NAT1.png";
import acl1 from "../resources/acl1.png";
import { Header } from "./header";
import { Footer } from "./footer";
import { Topics } from "./topics";
import { Link as RouterLink } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"


export function Page7() {
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'black');
    const topicList = [
        {href: "#acl", content: "1. What is ACL?"},
        {href: "#aclc", content: "2. ACL CREATION "},
        {href: "#working", content: "3. Working"},
       <Button as={RouterLink} to="/" position="fixed" bottom="3" right="3">Home Page</Button>
    ]; 
    return (

        <Box textAlign="center" fontSize="1xl">
            <Box textAlign="left" position="fixed">
            <Topics title="ACL" topics={topicList} />
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
                    <Heading>ACL</Heading>
                    <Text width="70%" textAlign="left" id="acl" >

                        An Access Control List (ACL) is a set of rules that is usually used to filter network traffic. ACLs can be configured on network devices with packet filtering capatibilites, such as routers and firewalls.<p />


                        • Access Control List<p />
                        • Conf done in router<p />
                        • Used to control incoming & outgoing traffic<p />
                        • How control? Permit or Deny<p />

                        Wild Custom Mask: →<p />
                        192.168.1.0 &gt;  0.0.0.255 &gt; for entire network.<p />
                        192.168.1.10 &gt;  0.0.0.0 &gt;  for single computer.<p />
                        Types of ACL : →<p />
                        Standard ACL<p />
                        • Old, not used now, for smaller networks.<p />
                        • number range: 0-99.<p />
                        • configured close to destination.<p />
                        • Permit/ Deny on basis of Source IP.<p />
                        Extended ACL<p />
                        • New, used now, for larger networks.<p />
                        • number range: 100-199.<p />
                        • configured close to source.<p />
                        • Permit/ Deny on basis of Source IP, Dest IP, Port No. ,Protocol.<p />
                        Steps:<p />
</Text><Heading id="aclc">ACL CREATION:<p /></Heading>
<Text width="70%" textAlign="left" >
 #ACCESS-LIST  {"<"}  No.&gt;  Permit/Deny  {'<'}Protocol&gt;   Source IP&gt;   {'<'}Source WCM &gt;  {'<'}Destination IP &gt;{'<'}Destination WCM &gt;  {'<'}Operator&gt; {'<'}Port No.&gt;<p />

EXAMPLE:<p />

#ACCESS-LIST 110 DENY TCP 192.168.1.10 0.0.0.0 10.0.0.2 0.0.0.0 EQ 80<p />
#ACCESS-LIST 110 PERMIT ICMP ANY ANY<p />
ACL IMPLEMENTATION:-<p />

#INTERFACE {'<'}TYPE&gt;  {'<'}No.&gt;<p />

#IP ACCESS-GROUP {'<'}No.&gt;  IN/OUT<p />

EXAMPLE:<p />

#INTERFACE FASTETHERNET0/0<p />

#IP ACCESS-GROUP 110 IN</Text>
                    <Image src={acl1}></Image>
                    <Text width="70%" textAlign="left" size="1xl">
                        NAT<p /> 
Network Address Translation (NAT) is the process where a network device, usually a firewall, assigns a public address to a computer (or group of computers) inside a private network. The main use of NAT is to limit the number of public IP addresses an organization or company must use, for both economy and security purposes.<p />
</Text><Image src={NAT1} bgColor="whitesmoke"></Image><Text width="70%" textAlign="left" size="1xl" id="working">

WORKING:<p />
NAT allows a single device, such as a router, to act as an agent<p />
between the Internet (or public network) and a local network (or<p />
private network), which means that only a single unique IP<p />
address is required to represent an entire group of computers<p />
to anything outside their network.<p />
NAT Implementation:-<p />
#IP NAT INSIDE SOURCE STATIC 10.0.0.2 200.1.1.2<p />
#INTERFACE GIGABITETHERNET0/0/1<p />
#IP NAT INSIDE<p />
#EXIT<p />

#INTERFACE SERIAL0/3/0<p />
#IP NAT OUTSIDE<p />
#EXIT</Text>
<Image src={NAT}></Image>
                </VStack>
            </Grid>
            <Spacer />

            <Box position="fixed" bottom="3" left="0">

<Button as={RouterLink} to="/page6">
    Previous Page
</Button>
<Spacer />
<Button as={RouterLink} to="/page8" position="fixed" bottom="3" right="0">
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

