import * as React from "react"
import { useLocation } from "react-router-dom"
import {
    Box,
    Text,
    VStack,
    Button,
    Grid,
    Spacer,
    useColorModeValue,
    Heading,
} from "@chakra-ui/react";


import { Footer } from "./footer"
import { Link as RouterLink, } from "react-router-dom"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { Header } from "./header";
import { Topics } from "./topics";


export function Page10() {
    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'black');
    const nopage = useLocation()
    const topicList = [
        {href: "#honeypot-desc", content: "1. What is Honeypot?"},
        {href: "#honeypots-working", content: "2. Working of honeypot"},
        {href: "#example", content: "3. Example"},
        {href: "#splunk", content: "4. What is splunk?"},
        {href: "#IDS-and-IPS", content: "5. IDS and IPS"},
        {href: "#The-Differences-Between-IDS-and-IPS", content: "6. The Differences Between IDS and IPS"},
        <Button as={RouterLink} to="/" position="fixed" bottom="3" right="3">Home Page</Button>
    ];
    
    
    console.log(nopage.pathname)
    return (

        <><Box textAlign="center" fontSize="2xl">

            <Box textAlign="left" position="fixed">
            <Topics title="HONEYPOT" topics={topicList}/>
               
            
            
        </Box><Box paddingtop="10"> <Header /></Box><Grid minH="50vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <VStack>

                <Box bg={color} width="-moz-max-content" p={10} textColor={textcolor} opacity="100%" borderRadius="50%">
     <Text fontSize="5xl">
                            Networking & it’s Security
                        </Text>

                    </Box>
                    <Heading textAlign="center">
                        Honeypot
                    </Heading>
                    <Text width="70%" textAlign="left">
                        <Heading size="xl" id="honeypot-desc">What is a honeypot?</Heading>
A honeypot is a computer or computer system intended to mimic likely targets of cyber attacks. It can be used to detect attacks or deflect them from a legitimate target. It can also be used to gain information about how cyber criminals operate.<p />
You may not have heard of them before, but honeypots have been around for decades. The principle behind them is simple: Don’t go looking for attackers. Prepare something that would attract their interest — the honeypot — and then wait for the attackers to show up.<p />
Like mice to cheese-baited mousetraps, cyber criminals are attracted to honeypots — not because they’re honeypots. The bad guys think the honeypot is a legitimate target, something worthy of their time. That’s because the bait includes applications and data that simulate a real computer system.<p /></Text><Text width="70%" textAlign="left">
                        <Heading size="xl" id="honeypots-working">How do honeypots work?</Heading>
If you, for instance, were in charge of IT security for a bank, you might set up a honeypot system that, to outsiders, looks like the bank’s network. The same goes for those in charge of — or researching — other types of secure, internet-connected systems.<p />
By monitoring traffic to such systems, you can better understand where cyber criminals are coming from, how they operate, and what they want. More importantly, you can determine which security measures you have in place are working — and which ones may need improvement.<p />
                        <Heading size="xl" id="example">Honeypot example</Heading>
In 2015, internet security experts set up an online railway control system as honeypot bait. The goal was to study how criminals would attack projects where they could put the public at risk. In this case, the only damage done was to a model train set at a German technology conference. Over two weeks, the so-called “HoneyTrain” suffered 2.7 million attacks.<p /></Text><Text width="70%" textAlign="left">
                        <Heading size="xl" id="splunk">What is Splunk?</Heading>
Splunk is a software platform widely used for monitoring, searching, analyzing and visualizing the machine-generated data in real time. It performs capturing, indexing, and correlating the real time data in a searchable container and produces graphs, alerts, dashboards and visualizations.<p />
                        <Heading size="xl" id="IDS-and-IPS">IDS and IPS : →</Heading>
Intrusion Detection Systems (IDS): analyze and monitor network traffic for signs that indicate attackers are using a known cyberthreat to infiltrate or steal data from your network. IDS systems compare the current network activity to a known threat database to detect several kinds of behaviors like security policy violations, malware, and port scanners.
Intrusion Prevention Systems (IPS): live in the same area of the network as a firewall, between the outside world and the internal network. IPS proactively deny network traffic based on a security profile if that packet represents a known security threat.<p />
The main difference between them is that IDS is a monitoring system, while IPS is a control system. IDS doesn’t alter the network packets in any way, whereas IPS prevents the packet from delivery based on the contents of the packet, much like how a firewall prevents traffic by IP address.<p />
                        <Heading size="xl" id="The-Differences-Between-IDS-and-IPS">The Differences Between IDS and IPS</Heading>

Both IDS/IPS read network packets and compare the contents to a database of known threats. The primary difference between them is what happens next. IDS are detection and monitoring tools that don’t take action on their own. IPS is a control system that accepts or rejects a packet based on the ruleset.<p />
IDS requires a human or another system to look at the results and determine what actions to take next, which could be a full time job depending on the amount of network traffic generated each day. IDS makes a better post-mortem forensics tool for the CSIRT to use as part of their security incident investigations.<p />
                        The purpose of the IPS, on the other hand, is to catch dangerous packets and drop them before they reach their target.It’s more passive than an IDS, simply requiring that the database gets regularly updated with new threat data.
                    </Text>


                </VStack>
            </Grid><Spacer /><Box position="fixed" bottom="3" left="3">

                <Button as={RouterLink} to="/page9">
                    Previous Page
                </Button>
                <Spacer />
                <Button as={RouterLink} to="/page11" position="fixed" bottom="3" right="3">
                    Next Page
                </Button>
                <Spacer />
            </Box>
            <Grid>
                <Box justifySelf="center"> <Footer />
                </Box></Grid>

        </Box></>
    )
}





