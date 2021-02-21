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
    Code,
} from "@chakra-ui/react";

import pngdark from "../resources/abcd1.png";
import firewall from "../resources/firewall.png";

import { Link as RouterLink, Redirect, Route } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"


export function Page8() {
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
                        
                    ASA Firewall<p/>
                        </Text>
                    <Text width="70%" textAlign="left" size="2xl">
                    
The ASA in Cisco ASA stands for Adaptive Security Appliance.<p/>
In brief, Cisco ASA is a security device that combines firewall, antivirus, intrusion prevention, and virtual private network (VPN) capabilities. It provides proactive threat defense that stops attacks before they spread through the network.<p/>
Beyond being a firewall, the Cisco ASA can do the following and more:<p/></Text>
antivirus<p/>
antispam<p/>
IDS/IPS engine<p/>
VPN device<p/>
SSL device<p/>
content inspection<p/>
<Image src={firewall}></Image>
<Text width="70%" textAlign="left" size="2xl">
CONFIGURATION OF FIREWALL :<p/>

STEP 1: REMOVE DEFAULT IP ADDRESS AND DHCP SCOPE RANGE<p/>
<Code>
ciscoasa(config)# interface vlan 1<p/>
ciscoasa(config-if)# np ip address<p/>
ciscoasa(config-if)# exit<p/>
ciscoasa(config)# np dhcpd address 192.168.1.5 - 192.168.1.15 inside</Code><p/>

(We can find this using SHOW command)<p/>

STEP 2:  ASSIGN IP, NAME AND SECURITY LEVEL TO VLAN 1&2<p/>
<Code>
ciscoasa(config)# interface vlan 1<p/>
ciscoasa(config-if)# ip address 172.16.1.1 255.255.255.0<p/>
ciscoasa(config-if)# no shutdown<p/>
ciscoasa(config-if)# nameif inside<p/>
ciscoasa(config-if)# security-level 100<p/>
ciscoasa(config-if)# exit<p/>

ciscoasa(config)# interface vlan 2<p/>
ciscoasa(config-if)# ip address 210.2.2.2 255.255.255.0<p/>
ciscoasa(config-if)# no shutdown<p/>
ciscoasa(config-if)# nameif outside<p/>
ciscoasa(config-if)# security-level 0<p/>
ciscoasa(config-if)# exit </Code> <p/>
STEP 3: LINK CORRESPONDING VLAN 1&2 WITH RESPECTIVE INTERFACE <p/>
<Code>
ciscoasa(config)# interface ethernet0/1<p/>
ciscoasa(config-if)# switchport access vlan 1<p/>
ciscoasa(config-if)# exit<p/>
ciscoasa(config)# interface ethernet0/0<p/>
ciscoasa(config-if)# switchport access vlan 2<p/>
ciscoasa(config-if)# exit</Code><p/>

STEP 4: CONFIGURE DHCP & DNS SERVER<p/>

(We can give DHCP range as much as we want, here we give 6 ip’s starting from 1.5 to 1.10)<p/>

<Code>ciscoasa(config)# dchpd address 172.16.1.5 - 172.16.10</Code> inside<p/>

NOTE: Above command allows all computer from inside network to communicate with DNS server<p/>.
STEP 5: CONFIGURE DEFAULT ROUTE
<p/>
(The command will let the firewall communicate with the outside network.)<p/>
NOTE: 0.0.0.0 means any source IP can communicate with any destination IP through router IP 210.2.2.1<p/>

<Code>cisocasa(config)# route outside 0.0.0.0 0.0.0.0 210.2.2.1</Code><p/>

STEP 6: OBJECT NETWORK CREATION & ENABLING NAT<p/>
(This will allow INSIDE network to communicate with OUTSIDE network (& vice-versa) with public IP address.<p/>

<Code>ciscoasa(config)# object network LAN<p/>
ciscoasa(config-network-object)# subnet 172.16.1.0 255.255.255.0<p/>
ciscoasa(config-network-object)# nat (inside,outside) dynamic interface</Code><p/>

STEP 7: CREATE ACL<p/>
NOTE: Here we are using EXTENDED NAMED ACL( i.e 3rd type of ACL apart from previous two where we use alphabets instead of numbers)<p/>
This ACL allows both TCP and ICMP traffic to be allowed outside the network.<p/>

<Code>cisco(config)# access-list inside_to_internet extended permit tcp any any<p/>
cisco(config)# access-list inside_to_internet extended permit icmp any any<p/>
cisco(config)#access-group inside_to_internet in interface outside</Code><p/>

STEP 8: CONFIGURE ROUTER<p/><p/>
ASSIGN IP ADDRESS TO ROUTER<p/>
Configure OSPF for ISP Router<p/>

<Code>router(config)# router ospf 1<p/>
router(config)# network 210.2.2.0 0.0.0.255 area 0<p/>
router(config)# network 210.2.20.20 0.0.0.255 area 0<p/>
router(config)# exit</Code><p/>

STEP 9: Go to PC &gt; DHCP<p/>
            </Text><p/>

                </VStack>
            </Grid>
            <Spacer />
<Link as={RouterLink} to="/page7">
                Previous Page
                </Link>
            <Spacer />
            <Link as={RouterLink} to="/page9">
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