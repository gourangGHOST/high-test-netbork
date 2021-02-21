import * as React from "react"
import { useState } from "react"
import {
    Box,
    Text,
    Link,
    Image,
    VStack,
    Button,
    Grid,
    Spacer,
    useColorModeValue,
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

import { Link as RouterLink, Redirect, Route } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"


export function Page10() {
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'white');
    return (

        <Box textAlign="center" fontSize="1xl">
            <Box textAlign="left" position="fixed">
                <SizeExample />
            </Box>

            <Grid minH="50vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack>

                    <Box bg={color} w="auto" p={4} textColor={textcolor} opacity="100%" borderRadius="full">
                        <Text fontSize="5xl" >
                            Networking & it’s Security
                            </Text>

                    </Box>
                    
                    <Text width="90%" textAlign="center">
                    What is a honeypot?
A honeypot is a computer or computer system intended to mimic likely targets of cyber attacks. It can be used to detect attacks or deflect them from a legitimate target. It can also be used to gain information about how cyber criminals operate.
You may not have heard of them before, but honeypots have been around for decades. The principle behind them is simple: Don’t go looking for attackers. Prepare something that would attract their interest — the honeypot — and then wait for the attackers to show up.
Like mice to cheese-baited mousetraps, cyber criminals are attracted to honeypots — not because they’re honeypots. The bad guys think the honeypot is a legitimate target, something worthy of their time. That’s because the bait includes applications and data that simulate a real computer system.
How do honeypots work?
If you, for instance, were in charge of IT security for a bank, you might set up a honeypot system that, to outsiders, looks like the bank’s network. The same goes for those in charge of — or researching — other types of secure, internet-connected systems.
By monitoring traffic to such systems, you can better understand where cyber criminals are coming from, how they operate, and what they want. More importantly, you can determine which security measures you have in place are working — and which ones may need improvement.
Honeypot example
In 2015, internet security experts set up an online railway control system as honeypot bait. The goal was to study how criminals would attack projects where they could put the public at risk. In this case, the only damage done was to a model train set at a German technology conference. Over two weeks, the so-called “HoneyTrain” suffered 2.7 million attacks.
What is Splunk?
Splunk is a software platform widely used for monitoring, searching, analyzing and visualizing the machine-generated data in real time. It performs capturing, indexing, and correlating the real time data in a searchable container and produces graphs, alerts, dashboards and visualizations.
IDS and IPS : →
Intrusion Detection Systems (IDS): analyze and monitor network traffic for signs that indicate attackers are using a known cyberthreat to infiltrate or steal data from your network. IDS systems compare the current network activity to a known threat database to detect several kinds of behaviors like security policy violations, malware, and port scanners.
Intrusion Prevention Systems (IPS): live in the same area of the network as a firewall, between the outside world and the internal network. IPS proactively deny network traffic based on a security profile if that packet represents a known security threat.
The main difference between them is that IDS is a monitoring system, while IPS is a control system. IDS doesn’t alter the network packets in any way, whereas IPS prevents the packet from delivery based on the contents of the packet, much like how a firewall prevents traffic by IP address.
The Differences Between IDS and IPS
Image for post
Both IDS/IPS read network packets and compare the contents to a database of known threats. The primary difference between them is what happens next. IDS are detection and monitoring tools that don’t take action on their own. IPS is a control system that accepts or rejects a packet based on the ruleset.
IDS requires a human or another system to look at the results and determine what actions to take next, which could be a full time job depending on the amount of network traffic generated each day. IDS makes a better post-mortem forensics tool for the CSIRT to use as part of their security incident investigations.
The purpose of the IPS, on the other hand, is to catch dangerous packets and drop them before they reach their target. It’s more passive than an IDS, simply requiring that the database gets regularly updated with new threat data.
Thank You</Text>

                    <Text width="90%" textAlign="center">
                        DOWNLOAD CPT BY CLICKING THE BELOW
                            </Text>
                    <RedirectButton />
                    <SlideEx />
                </VStack>
            </Grid>
            <Spacer />

            <Link as={RouterLink} to="/page9">
                Previous Page
                </Link>
            <Spacer />
            <Link as={RouterLink} to="/page11">
                Next Page
                </Link>
            <Spacer />
            <Link as={RouterLink} to="/">
                Homepage
                </Link>



        </Box>
    )
}
function SlideEx() {
    const { isOpen, onToggle } = useDisclosure()
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'white');
    return (
        <>
            <Button onClick={onToggle}> WHY IS CISCO PACKET TRACER USED ? </Button>
            <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    p="40px"
                    textColor={textcolor}
                    mt="4"
                    bg={color}
                    rounded="md"
                    shadow="md"
                >
                    <Text>
                   

            </Text>
                </Box>
            </Slide>
        </>
    )
}





export function RedirectButton() {

    const textcolor = useColorModeValue('black', 'white');
    const [instaRedirect, setInstaRedirect] = useState(false);
    const btnClick = () => {
        setInstaRedirect(true);
    }

    return (
        <>
            {instaRedirect ? <Redirect to="/cptdownload" /> : null}
            <Button onClick={btnClick} isExternal textColor={textcolor} >

                DOWNLOAD
              </Button>
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