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


export function Page5() {
    const color = useColorModeValue('purple.400', 'green.600');
    const textcolor = useColorModeValue('white', 'white');
    return (

        <Box textAlign="center" fontSize="xl">

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
                    <Text>
                        Basics and Use of NID and BID
                        NID signifies the collective representation of your network. NID cannot be assigned to any computer. Similar in case with BID i.e. Broadcast ID.
                        NID → Used to scan and get information of all computers in LAN at once.
                        BID → Used to send a single message to all device within your LAN at once.
                        Class C Subnets
                        Class C IP addresses are normally assigned to a very small size network because it can only have 254 hosts in a network. Given below is a list of all possible combination of subnetted Class C IP address −
                        Image for post
                        Purposes of Subnetting
                        To minimize cost and to minimize IP wastage.
</Text>
                </VStack>
            </Grid>
            <Spacer />

            <Link as={RouterLink} to="/page4">
                Previous Page
                </Link>
            <Spacer />
            <Link as={RouterLink} to="/page6">
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