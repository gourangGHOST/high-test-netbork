import * as React from "react"
import { Link as RouterLink } from "react-router-dom"

import {
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    Image,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    OrderedList,
    ListItem,
    useColorModeValue,
    Heading,
    Spacer,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import pics from "../resources/switching.png"
import vlan from "../resources/vlan.png"
export function Page6() {

    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'white');
    return (




        <Box>
            <Grid minH="100vh" p={3}>

                <ColorModeSwitcher justifySelf="flex-end" />
                <Box textAlign="left" position="fixed">
                    <SizeExample />
                </Box>
                <VStack>
                    <Box bg={color} w="auto" p={4} textColor={textcolor} opacity="100%" borderRadius="full">
                        <Text fontSize="5xl" >
                            Networking & it’s Security
                            </Text>
                    </Box >
                    <Heading>
                        SWITCHING
                    </Heading>
                    <Text width="70%" >
                        Switching is process to forward packets coming in from one port to a port leading towards the destination. When data comes on a port it is called ingress, and when data leaves a port or goes out it is called egress. A communication system may include number of switches and nodes.

                    </Text>
                    <Heading>Switch Ports:</Heading>
                    <Text width="70%">
                        1. Access Port (switch to pc )<p />
2. Trunk Port (switch to switch)<p />

Switch Rules: ( * Not compulsion rules, but basic thing for practical work)<p />

Switch - Router<p />
a). It’s recommended to connect to 1st port i.e 0/1.<p />
Switch - Switch <p />
a).Last port to first port<p />

Switch Modes: (Similar to router modes)<p />
1. User Mode<p />
2. Privilege Mode<p />
3. Global Configuration Mode<p />
** Switch has memory which stores MAC addresses.<p />
                        </Text><Image src={pics}></Image>
Switch Configuration: <p />
<Text width="70%">
CLI:</Text>

                    <OrderedList textAlign="left" width="60%">
                        <ListItem>SWITCH&gt;EN</ListItem>
                        <ListItem>SWITCH#CONF T</ListItem>
                        <ListItem>SWITCH(CONFIG)# INTERFACE FASTETHERNET0/2</ListItem>
                        <ListItem>SWITCH(CONFIG)# SWITCHPORT MODE ACCESS</ListItem>
                        <ListItem>SWITCH(CONFIG)#EXIT</ListItem>
                    </OrderedList>
                    <Text width="70%">
                        <Heading>VLAN : </Heading>
                        Full form is Virtual LAN. A VLAN is a group of devices on one or more LANs that are configured to communicate as if they were attached to the same wire, when in fact they are located on a number of different LAN segments. Because VLANs are based on logical instead of physical connections, they are extremely flexible.<p />

                        <Heading>SUBNETTING: (grouping)</Heading>
Disadvantages :<p />
1. Time consuming -  If the number of PCs gets increased then it will create issues.<p />
2. Increase of workload.<p />

VLAN Configuration Steps:<p />
1. Create VLAN Number (0-65535)<p />
2. Create VLAN Name (SALES , HR)<p />
3. Choose an interface of switch<p />
4. Configure interface (ACCESS / TRUNK).<p />
5. Link interface with VLAN.</Text>

                    <Text width="70%">
                        PRACTICAL:<p />
0/2 and 0/3 - SALES VLAN 10<p />
0/4 and 0/5 - HR VLAN 20<p />

SFTEP 1:<p/>
                    <Code>
                        SWITCH&gt;EN<p />
SWITCH#CONF T<p />
SWITCH(CONFIG)#VLAN 10<p />
SWITCH(CONFIG-VLAN)#NAME SALES<p />
SWITCH(CONFIG-VLAN)#EXIT</Code><p/>
                    
                        STEP 2:<p />
                    <Code>SWITCH(CONFIG)# INTERFACE FASTETHERNET0/2</Code><p/>
                    STEP 3:<p/>
                    <Code>SWITCH(CONFIG-IF)# SWITCHPORT MODE ACCESS</Code><p/>
                    STEP4:<p/>
                    <Code>SWITCH(CONFIG-IF)# SWITCHPORT ACCESS VLAN 10</Code><p/>
                    
                        If you need to add one more interface go to step2.
If u need to check whether u have added interfaces successfully or not, go with <p />
<Code>command &gt; show vlan. <p /></Code>
</Text>
                        <Image src={vlan}></Image>
                    


                    <Link as={RouterLink} to="/page5" >
                        previous page
                </Link>
                    <Link as={RouterLink} to="/page7"  >
                        next page
                </Link>
                    <Link as={RouterLink} to="/"  >
                        Homepage
                </Link>

                </VStack>

            </Grid>
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

