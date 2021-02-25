import * as React from "react"
import { Link as RouterLink } from "react-router-dom"

import {
    Box,
    Text,
    Link,
    HStack,
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
    background,
    useColorModeValue,
    ButtonGroup,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import qwer from "../resources/qwer.jpg"
import { Footer } from "./footer"

export function HomeComponent() {


    return (




        <Box>
            <Grid minH="100vh" p={3}>

                <ColorModeSwitcher justifySelf="flex-end" />

                
                    




                        <ButtonGroup colorScheme="teal" variant="ghost" fontSize="2xl" size="sm" >
                            <Button as={RouterLink} to="/page1">Getting started -{">"}</Button>
                            <Button as={RouterLink} to="/page2">Cisco packet tracer</Button>
                            <Button as={RouterLink} to="/page3">IP ADDRESS</Button>
                            <Button as={RouterLink} to="/page4">ROUTERS</Button>
                            <Button as={RouterLink} to="/page5">RIP AND ORGIP</Button>
                            <Button as={RouterLink} to="/page6">SWITCHING</Button>
                            <Button as={RouterLink} to="/page7">ACL AND NAT</Button>
                            <Button as={RouterLink} to="/page8"> ASA FIREWALL</Button>
                            <Button as={RouterLink} to="/page9">NETWORK SCANNING</Button>
                            <Button as={RouterLink} to="/page10">HONEYPOT</Button>


                        </ButtonGroup>
                    
                




            </Grid>


            <Grid>
                <Box justifySelf="center"> <Footer />
                </Box></Grid>
</Box>
    )
    }



function MyImage() {
    const source = (qwer);
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'white');
    return (
            <Image
                src={source}

            />
    );
}