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
    RequiredIndicator,
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
} from "@chakra-ui/react";

import pngdark from "../resources/abcd1.png";
import pnglite from "../resources/abcd.png";
import image from "../resources/Screenshot 2021-02-13 144905.png"

import { Link as RouterLink, Redirect } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"


export function Page3() {
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'white');
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
                    <Text fontSize="4xl" fontWeight="bold">
                        IP ADDRESS
                    </Text>
                    <Spacer />
                    <Text fontSize="1xl" width="90%" textAlign="center">
                        An IP address is a unique address that identifies a device on the internet or
                        a local network. IP stands for "Internet Protocol," which is the set of rules
                        governing the format of data sent via the internet or local network.
                        There are four different types of IP addresses: public, private, static, and dynamic.
                        If you want to check your public IP go to your browsre and search: "what is my ip"
                            <br />
                        <Tag size="lg" variant="subtle" colorScheme="red">
                            <TagLabel>Important: DO NOT SHARE YOUR PUBLIC IP</TagLabel>
                        </Tag>
                        <br />
                            If you want to check your private IP follow the steps:
                        </Text>

                    <UnorderedList textAlign="left">
                        <ListItem>Press <Kbd>windows</Kbd> + <Kbd>R</Kbd></ListItem>
                        <ListItem>Type <Code>cmd</Code> and press <Kbd>Enter</Kbd></ListItem>
                        <ListItem>Then type in the following command <Code>ipconfig</Code></ListItem>
                    </UnorderedList>
                    <MyImage />
                    <Spacer />

                    <Text fontSize='4xl'>
                        Classful Addressing</Text>
                    <Text forntsize="2xl">
                        The 32 bit IP address is divided into five sub-classes. <br /> These are:</Text>
                    <UnorderedList textAlign="left">
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
                                    <Td > <Tag size="lg" variant="subtle" colorScheme="red">
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
                    <Text >
                        Each of these classes has a valid range of IP addresses.<br />
                            Classes D and E are reserved for multicast and experimental purposes respectively.
                    </Text>
                    <Text forntsize="4xl" fontWeight="bold">STATIC AND DYNAMIC IP ADDRESS</Text>
                    <Text forntsize="2xl" width="90%">An Internet Protocol (IP) address is a unique number assigned to each computer on a network.
                    ... A computer on the Internet can have a static IP address, which means it stays the same over
                        time, or a dynamic IP address, which means the address can change over time.</Text>
                    <Text fontSize="4xl">
                        DIFFRENCE BETWEEN IPV4 AND IPV6
                        </Text>
                    <Box boxSize="auto">
                        <Image src={image} />
                    </Box>
                    <Text fontSize="4xl" fontFamily="heading" fontWeight="bold"> SUBNETTING</Text>
                    <Text fontSize="1xl" width="90%" textAlign="center" > A subnetwork or subnet is a logical subdivision of an IP network. The practice of dividing
                    a network into two or more networks is called subnetting. ... This results in the logical division of an IP address
                    into two fields: the network number and the rest field or host identifier.
                    </Text>
                    <Text fontWeight="bold" fontSize="3xl">
                        OR
                    </Text>
                    <Text width="90%" textAlign="center">

                        An IP address is an address used in order to uniquely identify a device on an IP network. The address is made up of 32 binary bits, which can be divisible into a network portion and host portion with the help of a subnet mask</Text>

                    <UnorderedList textAlign="left">

                        <Table variant="simple">
                            <TableCaption>SUBNETTING </TableCaption>
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
                                    <Td > <Tag size="lg" variant="subtle" colorScheme="red">
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
                    <SlideEx/>

                    <Text fontSize="4xl" fontWeight="bold ">
                        Practical Work
                    </Text>
                    <UnorderedList textAlign="left">
                        <ListItem>Finding the IP Address of computer</ListItem>
                        <ListItem>Finding class of a particular IP Address</ListItem>
                        <ListItem>Checking of connection</ListItem>
                        <ListItem>Getting IP Address of google.com</ListItem>
                    </UnorderedList>

                </VStack>
            </Grid>
            <Spacer />

            <Link as={RouterLink} to="/page2">
                Previous Page
                </Link>
            <Spacer />
            <Link as={RouterLink} to="/page4">
                Next Page
                </Link>
            <Spacer />
            <Link as={RouterLink} to="/">
                Homepage
                </Link>



        </Box>
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
                <br/>BID -&gt; BRODCAST ID
                
            
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
