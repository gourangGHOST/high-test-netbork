import * as React from "react"

import {
    Kbd,
    Box,
    Text,
    Link,
    Image,
    VStack,
    Grid,
    Spacer,
    useColorModeValue,
    ListItem,
    OrderedList,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    Heading,  
    TableCaption,
    Tbody,
    Td,
    Thead,
    Tr,
    Code,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Slide,
    Table,
    Th,
} from "@chakra-ui/react";
import { Header } from "./header";
import { Footer } from "./footer";
import imagerouter from "../resources/rouer.png";
import imagecoco from "../resources/ccoco-1.png";
import imagecoco1 from "../resources/ccoco-2.png";
import Static from "../resources/STATIC.png";
import Static1 from "../resources/STATIC1.png";
import Static2 from "../resources/STATIC2.png";
import { Link as RouterLink, Redirect } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { Topics } from "./topics"
export function Page4() {
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'black');
    const topicList = [
        {href: "#router", content: "1. What is a Router?"},
        {href: "#concepts", content: "2. Concepts "},
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
        <Box textAlign="center" fontSize="xl">
            <Box textAlign="left" position="fixed">
            <Topics title="ROUTERS" topics={topicList} />
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
                    <Text fontWeight="bold" fontSize="3xl" id="router">
                        ROUTER
</Text>
                    <Text width="70%" textAlign="left"  >
                        Routing is process of transfer of packets from one device and transferring the packet to  another device over different network.To reach destination router must have following details:-
                            </Text>
                    <Box  textAlign="left" width="70%" >
                        <OrderedList>
                            <ListItem>Destination address.</ListItem>
                            <ListItem>The best route to reach destination.</ListItem>
                            <ListItem>Possible routes to all remote networks.</ListItem>
                            <ListItem>To maintain and verify routing information.</ListItem>
                            <ListItem>Possible route to all neighbors so that they can guide to destination.</ListItem>
                        </OrderedList>
                    </Box>
                    <Heading id="concepts">Concepts:</Heading>
                    <OrderedList width="fit-content" textAlign="left">
                        <ListItem>Ports</ListItem>
                        <ListItem>Router Rules</ListItem>
                        <ListItem>Router Modes</ListItem>
                        <ListItem>Router Basic Configuration</ListItem>
                    </OrderedList>
                    <Heading id="port">
                        ROUTER PORTS</Heading>
                    <Text >
                        On basis of functionality :</Text>
                    <OrderedList width="10%" textAlign="left">
                        <ListItem>Interface Port</ListItem>
                        <ListItem>Line Port</ListItem>
                    </OrderedList>
                    <Table variant="simple" >
                        <TableCaption>TYPES OF PORT </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>PORT </Th>
                                <Th> TYPES:</Th>
                                <Th ></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Interface Port -<br />
                                Used to connect the router with another devices (switch, router, pc).</Td>
                                <Td> a). Ethernet Interface &gt; Old and slow<br /> b). Gigabitethernet Interface &gt; Advance<br />
                            c). Serial Interface &gt; Router to router<br />
                            d). Fast ethernet Interface &gt; New & fast  &gt;connect router to switch<br />
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>    Line Port - <br />       used to configure the router<br /></Td>
                                <Td>a). Console Port &gt; direct configuration<br />
                            b). Auxiliary Port &gt; remotely configuration<br /></Td>
                            </Tr>
                            <Tr>
                            </Tr>
                        </Tbody>
                    </Table><SlideEx />
                    <Image src={imagerouter}></Image>
                    <Text width="70%" textAlign="left" >
                        <Heading id="modes">ROUTER MODES  </Heading>
                        A router is a layer 3 device used to forward packet from one network to another. It forwards the packet through one of its port on the basis of destination IP address and the entry in the routing table. By using routing table, it finds an optimised path between the source and destination network.<br />

                        Let’s discuss about about Cisco router different modes.<br />
                        <Heading as="h4" size="md" textTransform="uppercase" textAlign="left">
                            There are mainly 5 modes in router:</Heading>
                        <Heading as="h4" size="md" textColor={color} textTransform="uppercase" textAlign="left">
                            User execution mode –<br /></Heading>
                            As soon as the interface up message appears and press enter, the router&gt; prompt will pop up. This is called user execution mode. This mode is limited to some monitoring commands.
<Heading as="h4" size="md" textColor={color} textTransform="uppercase" textAlign="left">
                            Privileged mode -</Heading>
As we type enable to user mode, we enter into Privileged mode where we can view and change the configuration of router. Different commands like show running-configuration, show IP interface brief etc can run on this mode which are used for troubleshooting purpose.<Heading as="h4" size="md" textColor={color} textTransform="uppercase" textAlign="left">
                            Global configuration mode –</Heading>
As we type configure terminal to the user mode, we will enter into the global configuration mode. Commands enter in these modes are called global commands and they affect the running-configuration of the router. In this mode, different configuration like making local database on router by providing username and password, can set enable and secret password etc.
<Heading as="h4" size="md" textColor={color} textTransform="uppercase" textAlign="left" >
                            Interface configuration mode –</Heading>
In this mode, only configuration of interfaces are done. Assigning an IP address to an interface, bringing up the interface are the common tasks done in this mode.<Heading as="h4" size="md" textColor={color} textTransform="uppercase" textAlign="left">
                            ROMMON mode –</Heading>
We can enter in this mode when we interrupt boot process of the router. Generally, we enter in this mode while password recovery process or Backing up of IOS on device like TFTP server. It is like BIOS mode of a PC.

                    </Text>
                    <Table variant="simple">
                        <TableCaption>MODES OF ROUTER </TableCaption>
                        <Tr>
                            <Th>Modes</Th>
                            <Th>Access method </Th>
                            <Th>prompt</Th>
                            <Th>Exit method</Th>
                        </Tr>
                        <Tr>
                            <Td>user execution mode</Td>
                            <Td>login</Td>
                            <Td><Code>router&gt;</Code></Td>
                            <Td>use logout commnad</Td>
                        </Tr>
                        <Tr>
                            <Td>privilege mode</Td>
                            <Td>use enable command in user mode</Td>
                            <Td><Code>router#</Code></Td>
                            <Td>use disable command to enter user mode</Td>
                        </Tr>
                        <Tr>
                            <Td>global configuration mode</Td>
                            <Td>use configure terminal command </Td>
                            <Td><Code>router(config)#</Code></Td>
                            <Td>use exit command to enter into privilege mode</Td>
                        </Tr>
                        <Tr>
                            <Td>Interface mode</Td>
                            <Td>use interface command and specify an <br />interface in global configuration mode</Td>
                            <Td><Code>router(config-if)#</Code></Td>
                            <Td>use exit command to enter into global <br />configuration mode or <br />use end command to enter into privilege mode. </Td>
                        </Tr>
                        <Tr>
                            <Td>ROMMON mode</Td>
                            <Td>press <Kbd>ctrl+break</Kbd> key while boot process<br /> or use reload command in privilege mode. </Td>
                            <Td><Code>ROMMON 1&gt;</Code></Td>
                            <Td>use continue command</Td>
                        </Tr>
                    </Table>
                    <PlacementExample />
                    <Heading id="types">TYPES OF ROUTING </Heading>
                    <Text width="70%" textAlign="left" >
                        <p>Routing is a process which is performed by layer 3 (or network layer) devices in order to deliver the packet by choosing an optimal path from one network to another.</p>
                        <p>There are 3 types of routing:</p>
                        <Heading id="static" >1. Static routing –</Heading>
                        <p>Static routing is a process in which we have to manually add routes in routing table.</p>
                        <p>Advantages –</p>
                        <p>No routing overhead for router CPU which means a cheaper router can be used to do routing.</p>
                        <p>It adds security because only administrator can allow routing to particular networks only.</p>
                        <p>No bandwidth usage between routers.</p>
                        <p>Disadvantage –</p>
                        <p>For a large network, it is a hectic task for administrator to manually add each route for the network in the routing table on each router.</p>
                        <p>The administrator should have good knowledge of the topology. If a new administrator comes, then he has to manually add each route so he should have very good knowledge of the routes of the topology.</p>
                        
                    </Text>
                    <Image src={imagecoco} backgroundColor={color}></Image >
                    <Cptlol/>


<Heading textAlign="left" width="70%">Configuration –</Heading>

                    <Text width="70%" textAlign="left"  id="config">
                        <Code>R1 having IP address 172.16.10.6/30 on s0/0/1, 192.168.10.1/24 on fa0/0.</Code>
                        <Code>R2 having IP address 172.16.10.2/30 on s0/0/0, 192.168.20.1/24 on fa0/0.</Code>
                        <Code>R3 having IP address 172.16.10.5/30 on s0/1, 172.16.10.1/30 on s0/0, 10.10.10.1/24 on fa0/0.</Code>
                        <p>Now configuring static routes for router R3:</p>
                        <p><Code> R3(config)#ip route 192.168.10.0 255.255.255.0 172.16.10.2</Code></p>
                        <p><Code>R3(config)#ip route 192.168.20.0 255.255.255.0 172.16.10.6</Code></p>
                        <p>Here, provided the route for 192.168.10.0 network where 192.168.10.0 is its network I’d and 172.16.10.2 and 172.16.10.6 are the next hop address.</p>
                        <p>Now, configuring for R2:</p>
                        <p><Code>R2(config)#ip route 192.168.20.0 255.255.255.0 172.16.10.1</Code></p>
                        <p><Code>R2(config)#ip route 10.10.10.0 255.255.255.0 172.16.10.1</Code></p>
                        <p><Code>R2(config)#ip route 172.16.10.0 255.255.255.0 172.16.10.1</Code></p>
                        <p>Similarly for R1:</p>
                        <p><Code>R1(config)#ip route 192.168.10.0 255.255.255.0 172.16.10.5</Code></p>
                        <p><Code>R1(config)#ip route 10.10.10.0 255.255.255.0 172.16.10.5</Code></p>
                        <p><Code>R1(config)#ip route 172.16.10.0 255.255.255.0 172.16.10.5</Code></p>
                        <Heading id="default">2. Default Routing –</Heading></Text>
                    <Text width="70%" textAlign="left" >
                        <p>This is the method where the router is configured to send all packets towards a single router (next hop). It doesn’t matter to which network the packet belongs, it is forwarded out to router which is configured for default routing. It is generally used with stub routers. A stub router is a router which has only one route to reach all other networks.</p>
                        <p>Configuration –</p>
                        Using the same topology which we have used for the static routing before.
                        </Text><Image src={imagecoco1} backgroundColor={color}></Image ><Text width="70%" textAlign="left">
                        <p>In this topology, R1 and R2 are stub routers so we can configure default routing for both these routers.</p>
                        Configuring default routing for R1:<p />
                        <Code>R1(config)#ip route 0.0.0.0 0.0.0.0  172.16.10.5</Code><p />
                        Now configuring default routing for R2:<p />
                        <Code>R2(config)#ip route 0.0.0.0 0.0.0.0  172.16.10.1</Code><p />
                        <Heading id="dynamic">3. Dynamic Routing –</Heading>
                        Dynamic routing makes automatic adjustment of the routes according to the current state of the route in the routing table. Dynamic routing uses protocols to discover network destinations and the routes to reach it. <Link as={RouterLink} to="/page5" color="teal.500" >
                            RIP
                </Link> and <Link as={RouterLink} to="/page5" color="teal.500" >
                            OSPF 
                </Link> are the best examples of dynamic routing protocol. Automatic adjustment will be made to reach the network destination if one route goes down.<p />
                        A dynamic protocol have following features:<p />
                        The routers should have the same dynamic protocol running in order to exchange routes.<p />
                        When a router finds a change in the topology then router advertises it to all other routers.<p />
                        Advantages –<p />
                        Easy to configure.<p />
                        More effective at selecting the best route to a destination remote network and also for discovering remote network.<p />
                        Disadvantage –<p />
                        Consumes more bandwidth for communicating with other neighbors.<p />
                        Less secure than static routing.<p />
                    </Text>
                </VStack>
            </Grid>
            <Spacer />

            <Box position="fixed" bottom="3" left="0">

                <Button as={RouterLink} to="/page3">
                    Previous Page
                </Button>
                <Spacer />
                <Button as={RouterLink} to="/page5" position="fixed" bottom="3" right="0">
                    Next Page
                </Button>
                <Spacer />
                </Box>
           

                <Grid>
                <Box justifySelf="center"> <Footer />
                </Box></Grid>


        </Box >
    )
}



function SlideEx() {
    const { isOpen, onToggle } = useDisclosure()
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'white');
    return (
        <>
            <Button onClick={onToggle}> RULES OF ROUTERS </Button>
            <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }} exit=""   >
                <Box
                    p=""
                    textColor={textcolor}
                    mt="4"
                    bg={color}
                    rounded="md"
                    shadow="md"
                >
                    <Text>
                        Rule 1: All interfaces of a router should be in different network or should have different NID.<br />
                        Rule 2: A serial interface connecting two router should be in same network or should have same NID.
                    </Text>
                </Box>
            </Slide>
        </>
    )
}
function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const textcolor = useColorModeValue('white', 'white');
    const color = useColorModeValue('purple.400', 'plum');
    return (
        <>

            <Button bgColor={color} textColor={textcolor} onClick={onOpen}>
                Practical ON CIL
        </Button>
            <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth="1px">COMMANDS FOR CLI :</DrawerHeader>
                        <DrawerBody>
                            <OrderedList>
                                <ListItem>Router&gt; ENABLE or EN (User Mode)</ListItem>
                                <ListItem>Router# CONF T (Privelege Mode)</ListItem>
                                <ListItem>Router(Config)#  INTERFACE GIGABITETHERNET0/0</ListItem>
                                <ListItem>Router(Config-if)# IP ADDRESS 192.168.1.1 255.255.255.0</ListItem>
                                <ListItem>Router(Config-if)# NO SHUTDOWN</ListItem>
                            </OrderedList>
                            <p>**No shutdown is used to make router live/on**</p>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}
function Cptlol() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState("md")

  const handleSizeClick = (newSize: React.SetStateAction<string>) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ["full"]

  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleSizeClick(size)}
          key={size}
          m={4}
        >{`CPT PRACTICAL`}</Button>
      ))}

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>PRACTICAL</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <VStack>
            <Text >
                STEP1
            <Image src={Static} ></Image>
            STEP 2
            <Image src={Static1}></Image> STEP 3

            <Image src={Static2}></Image>
            </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}