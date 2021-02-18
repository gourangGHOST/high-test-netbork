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
    UnorderedList,
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
    List,
    Table,
    TableCaption,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr,
    Tooltip,
    WrapItem,
    Wrap,
    Slide,
    Code,
} from "@chakra-ui/react";

import pngdark from "../resources/abcd1.png";
import pnglite from "../resources/abcd.png";

import { Link as RouterLink, Redirect } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"


export function Page4() {
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'black');
    return (

        <Box textAlign="center" fontSize="xl">
            <Box textAlign="left" position="fixed">
                <SizeExample />
            </Box>
            <Grid minH="50vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack>
                    <Box>

                    </Box>
                    <Box bg={color} w="auto" p={4} textColor={textcolor} opacity="100%" borderRadius="full">
                        <Text fontSize="5xl" >
                            Networking & it’s Security
                            </Text>
                    </Box>
                    <Text fontWeight="bold" fontSize="3xl">
                        ROUTER
</Text>
                    <Text width="90%" textAlign="left"  >
                        Routing is process of transfer of packets from one device and transferring the packet to  another device over different network.To reach destination router must have following details:-


                            </Text>
                    <Box width="fit-content" textAlign="left" >
                        <OrderedList>
                            <ListItem>Destination address.</ListItem>
                            <ListItem>The best route to reach destination.</ListItem>
                            <ListItem>Possible routes to all remote networks.</ListItem>
                            <ListItem>To maintain and verify routing information.</ListItem>
                            <ListItem>Possible route to all neighbors so that they can guide to destination.</ListItem>
                        </OrderedList>
                    </Box>


                    <Heading>Concepts:</Heading>
                    <OrderedList width="fit-content" textAlign="left">
                        <ListItem>Ports</ListItem>

                        <ListItem>Router Rules</ListItem>

                        <ListItem>Router Modes</ListItem>

                        <ListItem>Router Basic Configuration</ListItem>
                    </OrderedList>
                    <Heading>
                        ROUTER PORTS</Heading>
                    <Text>
                        On basis of functionality :</Text>
                    <OrderedList width="fit-content" textAlign="left">
                        <ListItem>Interface Port</ListItem>
                        <ListItem>Line Port</ListItem>
                    </OrderedList>


                    <Table variant="simple">
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


                    <Text width="70%" textAlign="left" >
                        <Heading>ROUTER MODES  </Heading>
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
                    <Table  variant="simple">
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
                            <Td>use interface command and specify an <br/>interface in global configuration mode</Td>
                            <Td><Code>router(config-if)#</Code></Td>
                            <Td>use exit command to enter into global <br/>configuration mode or <br/>use end command to enter into privilege mode. </Td>
                        </Tr>
                        <Tr>
                            <Td>ROMMON mode</Td>
                            <Td>press <Kbd>ctrl+break</Kbd> key while boot process<br/> or use reload command in privilege mode. </Td>
                            <Td><Code>ROMMON 1&gt;</Code></Td>
                            <Td>use continue command</Td>
                        </Tr>
                    </Table>
                </VStack>
            </Grid>
            <Spacer />

            <Link as={RouterLink} to="/page3" >
                Previous Page
                </Link>

            <Link as={RouterLink} to="/page5">
                Next Page
                </Link>
            <Spacer />
            <Link as={RouterLink} to="/">
                Homepage
                </Link>



        </Box >
    )
}



function MyImage() {
    const source = useColorModeValue(pnglite, pngdark);
    return (
        <Image
            src={source}
            boxSize="550px"
        />
    );
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
                        <DrawerHeader>{`DNKDM`}</DrawerHeader>
                        <DrawerBody>
                            LINKSK
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}
function SlideEx() {
    const { isOpen, onToggle } = useDisclosure()
    const color = useColorModeValue('purple.400', 'green.600');
    const textcolor = useColorModeValue('white', 'white');
    return (
        <>
            <Button onClick={onToggle}> RULES OF ROUTERS </Button>
            <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
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