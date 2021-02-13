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
    Tfoot,
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
} from "@chakra-ui/react";

import pngdark from "../resources/abcd1.png";
import pnglite from "../resources/abcd.png";

import { Link as RouterLink, Redirect } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"






export class Page3 extends React.Component {


    render() {

        return (

            <Box textAlign="center" fontSize="xl">

                <Grid minH="50vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <VStack>
                        <Text fontSize="5xl">
                            Networking & it’s Security
                            <br />
                            IP ADDRESS </Text>
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
                        <Spacer/>

                        <Text fontSize='4xl'>
                            Classful Addressing<br />
                            The 32 bit IP address is divided into five sub-classes. These are:<br /></Text>
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
                        <Text>
                            Each of these classes has a valid range of IP addresses.<br />
                            Classes D and E are reserved for multicast and experimental purposes respectively.
</Text>

                    </VStack>
                </Grid>
                <Spacer />

                <Link as={RouterLink} to="/page2">
                    Previous Page
                </Link>
                <Spacer />
                <Link as={RouterLink} to="/">
                    Homepage
                </Link>



            </Box>
        )
    }
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
