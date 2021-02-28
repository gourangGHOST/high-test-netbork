import * as React from "react"
import {
    Box,
    Grid,
    Text,
    Image,
    VStack,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import hacking from "../resources/hacking.jpg"
import first from "../resources/first.jpg"
import { Footer } from "./footer"
import {Topbar}from "./something"

export function HomeComponent() {






    return (




        <Box>
            <Grid minH="110vh" p={3}>
<Topbar/>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack>

                    <Image justifySelf="center" src={first}></Image>
                    <Text textAlign="center" width="60%">
                        In this you will learn the basics about Cisco packet tracer, IP address , Routers , Types of routing , switching , Types of switching , ASA firewall , Network scanning , Honeypot</Text>
                    <Image justifySelf="center" src={hacking}></Image>
                    <Box justifySelf="center"> <Footer nextPage="/page2"
                        previousPage="/bibliography"/></Box>



                </VStack>
            </Grid>

        </Box>
    )
}
