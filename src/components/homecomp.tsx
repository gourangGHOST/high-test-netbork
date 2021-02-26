import * as React from "react"
import { Link as RouterLink } from "react-router-dom"

import {
    Box,
    Grid,
    Text,
    Image,
    Button,
    useColorModeValue,
    ButtonGroup,
    VStack,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import hacking from "../resources/hacking.jpg"
import first from "../resources/first.jpg"
import { Footer } from "./footer"

export function HomeComponent() {


    return (




        <Box>
            <Grid minH="150vh" p={3}>

                <ColorModeSwitcher justifySelf="flex-end" />
                <Box paddingtop="50%">
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
                    </Box>
                
<VStack>
               
                        <Image justifySelf="center" src={first}></Image>
                        <Text textAlign="center" width="60%">
                            In this u will learn the basics about Cisco packet tracer, IP address , Routers , Types of routing , switching , Types of switching , ASA firewall , Network scanning , Honeypot</Text>
                        <Image justifySelf="center" src={hacking}></Image>
                        <Box justifySelf="center"> <Footer /></Box>

                        </VStack>
            </Grid>

</Box>
    )
    }



function MyImage() {
    const source = (hacking);
    const source2=(first);
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'white');
    return (<Box>
            <Image
                src={source}
            />
            <Image src={source2}/></Box>
    );
}