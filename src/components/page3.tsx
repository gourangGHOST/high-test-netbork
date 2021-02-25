import * as React from "react"

import {
    Box,
    Text,
    Link,
    Image,
    VStack,
    Code,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Grid,
    Spacer,
    useColorModeValue,
    Tag,
    TagLabel,
    Kbd,
    UnorderedList,
    ListItem,
    Button,
    Slide,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Heading,
} from "@chakra-ui/react";

import pngdark from "../resources/abcd1.png";
import pnglite from "../resources/abcd.png";
import image from "../resources/Screenshot 2021-02-13 144905.png"
import { Header } from "./header";
import { Footer } from "./footer";


import { Link as RouterLink, Redirect } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"


export function Page3() {
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'black');
    return (

        <><Box textAlign="center" fontSize="xl">
            <Box textAlign="left" position="fixed">
                <SizeExample />
            </Box>
            <Box paddingtop="10"> <Header /></Box>

            <Grid minH="50vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack>
                    <Box>

                    </Box>
                    <Box bg={color} w="auto" p={4} textColor={textcolor} opacity="100%" borderRadius="full">
                        <Text fontSize="5xl">
                            Networking & it’s Security
                        </Text>
                    </Box>
                    <Text fontSize="4xl" fontWeight="bold" id="ip">
                        IP ADDRESS
                    </Text>
                    <Spacer />
                    <Text fontSize="1xl" width="90%" textAlign="center">
                        An IP address is a unique address that identifies a device on the internet or
                        a local network.IP stands for "Internet Protocol," which is the set of rules
                        overning the format of data sent via the internet or local network.
                        here are four different types of IP addresses: public , private , static , and dynamic.
                        If you want to check your public IP go to your browsre and search: "what is my ip"
                        <br />
                        <Tag size="lg" variant="subtle" colorScheme="red">
                            <TagLabel>Important: DO NOT SHARE YOUR PUBLIC IP</TagLabel>
                        </Tag>
                        <br />
                        If you want to check your private IP follow the steps:
                    </Text>
<Text id="steps"></Text>
                    <UnorderedList textAlign="left" >
                        <ListItem>Press <Kbd>windows</Kbd> + <Kbd>R</Kbd></ListItem>
                        <ListItem>Type <Code>cmd</Code> and press <Kbd>Enter</Kbd></ListItem>
                        <ListItem>Then type in the following command <Code>ipconfig</Code></ListItem>
                    </UnorderedList>
                    <MyImage />
                    <Spacer />

                    <Text fontSize='4xl'>
                        Classful Addressing</Text>
                    <Text forntsize="2xl">
                        The 32 bit IP address is divided into five sub-classes.<br /> These are:</Text>
                    <UnorderedList textAlign="left" id="classes">
                        <Table variant="simple">
                            <TableCaption>CLASSES OF IP </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>CLASSES</Th>
                                    <Th isNumeric>RANGE</Th>
                                    <Th>NETWORK AND HOST</Th>
                                    <Th> USAGE </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>CLASS A</Td>
                                    <Td isNumeric>1-126</Td>
                                    <Td> <Tag size="lg" variant="subtle" colorScheme="red">
                                        <TagLabel>N.</TagLabel>
                                    </Tag><Tag size="lg" variant="subtle" colorScheme="blue">
                                            <TagLabel>H.H.H</TagLabel></Tag></Td>
                                    <Td>WAN</Td>
                                </Tr>
                                <Tr>
                                    <Td>CLASS B</Td>
                                    <Td isNumeric>127-191</Td>
                                    <Td><Tag size="lg" variant="subtle" colorScheme="red">
                                        <TagLabel>N.N.</TagLabel>
                                    </Tag><Tag size="lg" variant="subtle" colorScheme="blue">
                                            <TagLabel>H.H</TagLabel></Tag></Td>
                                    <Td>MAN</Td>
                                </Tr>
                                <Tr>
                                    <Td>CLASS C</Td>
                                    <Td isNumeric>192-223</Td>
                                    <Td><Tag size="lg" variant="subtle" colorScheme="red">
                                        <TagLabel>N.N.N.</TagLabel>
                                    </Tag><Tag size="lg" variant="subtle" colorScheme="blue">
                                            <TagLabel>H</TagLabel></Tag></Td>
                                    <Td>LAN</Td>
                                </Tr>
                                <Tr>
                                    <Td>CLASS D</Td>
                                    <Td isNumeric>223-239</Td>
                                    <Td> reserved for multitasking </Td>
                                    <Td></Td>
                                </Tr>
                                <Tr>
                                    <Td>CLASS E</Td>
                                    <Td isNumeric>240-254</Td>
                                    <Td> experimental,<br /> reserved for search</Td>
                                    <Td></Td>
                                </Tr>
                            </Tbody>

                        </Table>
                    </UnorderedList>
                    <Text>
                        Each of these classes has a valid range of IP addresses.<br />
                        Classes D and E are reserved for multicast and experimental purposes respectively.
                    </Text>
                    <Text forntsize="4xl" fontWeight="bold" id="types">STATIC AND DYNAMIC IP ADDRESS</Text>
                    <Text forntsize="2xl" width="90%">An Internet Protocol (IP) address is a unique number assigned to each computer on a network.
                    ... A computer on the Internet can have a static IP address, which means it stays the same over
                        time, or a dynamic IP address, which means the address can change over time.</Text>
                    <Text fontSize="4xl" id="diffrence4and6">
                        DIFFRENCE BETWEEN IPV4 AND IPV6
                    </Text>
                    <Box boxSize="auto">
                        <Image src={image} />
                    </Box>
                    <Text fontSize="4xl" fontFamily="heading" fontWeight="bold" id="subneting"> SUBNETING</Text>
                    <Text fontSize="1xl" width="90%" textAlign="center"> A subnetwork or subnet is a logical subdivision of an IP network.The practice of dividing
                    a network into two or more networks is called subneting....This results in the logical division of an IP address
                    into two fields: the network number and the rest field or host identifier.
                    </Text>
                    <Text fontWeight="bold" fontSize="3xl">
                        OR
                    </Text>
                    <Text width="90%" textAlign="center">

                        An IP address is an address used in order to uniquely identify a device on an IP network. The address is made up of 32 binary bits, which can be divisible into a network portion and host portion with the help of a subnet mask</Text>

                    <UnorderedList textAlign="left">

                        <Table variant="simple">
                            <TableCaption>SUBNETING </TableCaption>
                            <Thead>
                                <Tr>
                                    <Th isNumeric>SUBNET MASK</Th>
                                    <Th>CLASS</Th>
                                    <Th>NETWORK AND HOST</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td isNumeric>255.0.0.0</Td>
                                    <Td> A</Td>
                                    <Td> <Tag size="lg" variant="subtle" colorScheme="red">
                                        <TagLabel>N.</TagLabel>
                                    </Tag><Tag size="lg" variant="subtle" colorScheme="blue">
                                            <TagLabel>H.H.H</TagLabel></Tag></Td>

                                </Tr>
                                <Tr>
                                    <Td isNumeric>255.255.0.0</Td>
                                    <Td>B</Td>
                                    <Td><Tag size="lg" variant="subtle" colorScheme="red">
                                        <TagLabel>N.N.</TagLabel>
                                    </Tag><Tag size="lg" variant="subtle" colorScheme="blue">
                                            <TagLabel>H.H</TagLabel></Tag></Td>

                                </Tr>
                                <Tr>
                                    <Td isNumeric>255.255.255.0</Td>
                                    <Td>C</Td>
                                    <Td><Tag size="lg" variant="subtle" colorScheme="red">
                                        <TagLabel>N.N.N.</TagLabel>
                                    </Tag><Tag size="lg" variant="subtle" colorScheme="blue">
                                            <TagLabel>H</TagLabel></Tag></Td>


                                </Tr>
                            </Tbody>

                        </Table>

                    </UnorderedList>

<Text id="nid and bid">
                    <SlideEx  /></Text>
                    

                    <Text  width="70%"textAlign="left" id="mask">Subnets are always created in the power of 2.<br /> Example 2 subnets, 4 subnets, and so on.<br />

Example: To create 2 subnetworks within 1 network of Class C suppose 192.168.1.0.<br />


To create a subnetwork in Class C,<br />

NID and BID for this network would be 192.168.1.0 and 192.168.1.255 respectively. Since DSN for Class C is 255.255.255.0 there is only one 0 here. The binary representation of this 0 according to 8 bits is 00000000.<br />

With 8 bits we can have a maximum of 256(0-255) hosts.<br />

Step1: Finding the number of network bits represented by 'n'.<br />
                    </Text>
                    <Text width="60%" textAlign="left">2n {'>'}= required no of subnetworks<br />

For 2 subnetworks,<br />

                            21 {'>'}= 2,<br />

n is 1 here<br /></Text>
                    <Text width="70%" textAlign="left">


                        Step2: Generating Custom Subnet Mask(CSN).<br /></Text>
                    <Text width="60%" textAlign="left">So we change the Most Significant Bit(MSB) of the above binary representation to 1. We get 10000000 with a decimal equivalent of 128.<br />

This address is represented as 255.255.255.128, which is known as a Custom Subnet Mask(CSM).<br /></Text>
<Text width="70%" textAlign="left">

Step3: Finding the effective number of hosts in each subnet.<br />
</Text>
                    <Text width="60%" textAlign="left">2h - 2<br />

where h is number of host bits 8-n.<br />

27 - 2 = 126<br />

Hence we have 126 hosts for each subnet.<br /></Text><Text textAlign="left" width="70%">


Step4: Ip addressing<br /></Text><Text textAlign="left" width="60%">

By changing the 1st bit(MSB) we divided the network into 2 sets of 128.<br />

using A + B + 1<br />

where A is starting address, B is no of hosts<br />

for Subnet 1<br />

A = 0, B= 126<br />

0+126+1 = 127<br />

for Subnet 2<br />

A = 128, B = 126<br />

128+126+1 = 255<br />

For subnet 2 A = 128 because of CSN.<br /></Text><Text textAlign="left" width="70%">

Subnet 1 [192.168.1.0 - 192.168.1.127 ] and Subnet 2 [192.168.1.128 - 192.168.1.255 ].
Like each network has reserved NID and BID, each subnet also has a NID and BID. According to the above example, for Subnet 1 we have NID and BID 192.168.1.0 and 192.168.1.127 respectively, and for Subnet 2 we have NID and BID 192.168.1.128 and 192.168.1.255 respectively.<br />

The NID for a network is used when routing packets outside the network(among different networks). NID of a subnet is used when routing packets within the network(among different subnets).</Text>

                <Text fontSize="4xl" fontWeight="bold " id="practical">
                    Practical Work
                </Text>
                <UnorderedList textAlign="left">
                    <ListItem>Finding the IP Address of computer</ListItem>
                    <ListItem>Finding class of a particular IP Address</ListItem>
                    <ListItem>Checking of connection</ListItem>
                    <ListItem>Getting IP Address of google.com</ListItem>
                </UnorderedList>

            </VStack>
        </Grid><Spacer /><Box position="fixed" bottom="3" left="0">

                <Button as={RouterLink} to="/page2">
                    Previous Page
                </Button>
                <Spacer />
                <Button as={RouterLink} to="/page4" position="fixed" bottom="3" right="0">
                    Next Page
                </Button>
                <Spacer />
            </Box>

            <Grid>
                <Box justifySelf="center"> <Footer />
                </Box></Grid>


        </Box >
        </>
    )
}



function MyImage() {
    const source = useColorModeValue(pnglite, pngdark);
    return (
        <Image
            src={source}
            boxSize="550px"//<---- This is the property 'boxsize'
        />
    );
}
function SlideEx() {
    const { isOpen, onToggle } = useDisclosure()
    const color = useColorModeValue('purple.400', 'green.600');
    const textcolor = useColorModeValue('white', 'white');
    return (
        <>
            <Button onClick={onToggle}> NID AND BID  </Button>
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
                        Network ID (NID) to identify the network. Host ID (HID) to identify the host within a particular network NID -&gt; NETWORK ID
            Broadcasting in a computer network is transmitting a message which does not require a response to all users of the network.One computer in a network sends a data packet to all other users at the same time.<br />BID -&gt; BRODCAST ID


            </Text>
                </Box>
            </Slide>
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
                >{`TOPICS`}</Button>
            ))}

            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader>IP ADDRESS</DrawerHeader>
                        <DrawerBody>
                            <Link href="#ip">1. What is IP address</Link><br />
                            <Link href="#steps">2. Steps to check IP</Link><br />
                            <Link href="#classes">3. Classes of IP</Link><br />
                            <Link href="#types">4. Types of IP </Link><br />
                            <Link href="#diffrence4and6">5. Diffrence between ipv4 and ipv6</Link><br />
                            <Link href="#subneting">6. Subneting</Link><p /> 
                            <Link href="#nid and bid ">6. What is NID and BID</Link><p /> 
                            <Link href="#mask">6. Subnet Masking</Link><p /> 
                            <Link href="#practical">6. Practical</Link><p />
                            <Button as={RouterLink} to="/" position="fixed" bottom="3" right="3">Home Page</Button>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}
