import * as React from "react"
import { Link as RouterLink } from "react-router-dom"

import {
    Box,
    Text,
    VStack,
    Code,
    Grid,
    Image,
    Button,
    useColorModeValue,
    Heading,
    Spacer,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import pics from "../resources/switching.png"
import vlan from "../resources/vlan.png"
import { Header } from "./header";
import { Footer } from "./footer";
import { Topics } from "./topics";
import { Topbar } from "./something"
export function Page6() {

    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'black');
    const topicList = [
        {href: "#switching", content: "1. What is swtch?"},
        {href: "#ports", content: "2. Ports "},
        {href: "#configs", content: "3. Configuration of switch "},
        {href: "#vlan", content: "4. VLAN"},
        {href: "##configvlan", content: "5.  Configurationof vlan< "},
        {href: "#config", content: "6. Configuration "},
        {href: "#static and bid", content: "7. Static Routing "},
        {href: "#default", content: "8. Default Routing "},
        {href: "#dynamic", content: "9.  Dynamic Routing "},
        <Button as={RouterLink} to="/"   bottom="3" right="3">Home Page</Button>
                           
    ]; 
    return (




        <Box>
            <Grid minH="100vh" p={3}>

                <ColorModeSwitcher justifySelf="flex-end" />
                <Box textAlign="left"  >
                    <Topbar/>
                <Topics title="SWITCHING" topics={topicList} />
                </Box>
                <VStack>
                    <Box bg={color} width="-moz-max-content" p={10} textColor={textcolor} opacity="100%" borderRadius="5%">
                        <Text fontSize="5xl" >
                            Networking & it’s Security
                            </Text>
                    </Box >
                    <Heading id="switching"> 
                        SWITCHING
                    </Heading>
                    <Text width="70%" >
                        Switching is process to forward packets coming in from one port to a port leading towards the destination. When data comes on a port it is called ingress, and when data leaves a port or goes out it is called egress. A communication system may include number of switches and nodes.

                    </Text>
                    <Heading id="ports">Switch Ports:</Heading>
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
                        </Text><Image src={pics}></Image><Text id="configs" width="70%" textAlign="left"><Heading>
Switch Configuration: </Heading>
CLI:<p />
</Text>
<Text width="70%">

<Code>
                   
                        SWITCH&gt;EN<br/>
                        SWITCH#CONF T<br/>
                        SWITCH(CONFIG)# INTERFACE FASTETHERNET0/2<br/>
                        SWITCH(CONFIG)# SWITCHPORT MODE ACCESS<br/>
                        SWITCH(CONFIG)#EXIT<br/>
                    </Code></Text>
                    <Text width="70%">
                        <Heading id="vlan">VLAN : </Heading>
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

                    <Text width="70%" id="configvlan">
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
                
                </VStack>

            </Grid>
            <Grid>
            <Box justifySelf="center"> <Footer nextPage="/page7"
                        previousPage="/page5"/>
            </Box></Grid>

        </Box>
    )
}





