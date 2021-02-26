import * as React from "react"
import {
    Box,
    Text,
    Link,
    VStack,
  
    Grid,
    Spacer,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    useColorModeValue,
    Heading,
} from "@chakra-ui/react"
import { Link as RouterLink, Redirect } from "react-router-dom"

import { ColorModeSwitcher } from "../ColorModeSwitcher"
import { Header } from "./header";
import { Footer } from "./footer"
export function Page1() {

    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'black');
    

        return (

            <Box textAlign="center" fontSize="xl">
                <Box textAlign="left" >
                    <SizeExample />
                </Box>
                <Box paddingtop="10" > <Header/></Box>
                
                
                <Grid minH="50vh" p={3}>
                <VStack spacing={2}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <Box bg={color} width="-moz-max-content" p={10} textColor={textcolor} opacity="100%" borderRadius="50%">
     <Text fontSize="5xl">
                            Networking & it’s Security
                            </Text></Box>
                    <Spacer /><Heading>
                    Getting Started </Heading>
                        <Spacer />
                        <Text width="70%">
                        Network security is a broad term that covers a multitude of technologies, devices and processes. In its simplest term, it is a set of rules and configurations designed to protect the integrity, confidentiality and accessibility of computer networks and data using both software and hardware technologies.
                        </Text>
                        <Text fontSize="2xl" fontWeight="bold" id="what-is">
                        What is network security?
                        </Text>
                        <Text fontSize="1xl" width="50%">
                        According to the SANS Institute, network security is the process of taking preventative measures to protect the underlying networking infrastructure from unauthorized access, misuse, malfunction, modification, destruction or improper disclosure. Implementing these measures allows computers, users and programs to perform their permitted critical functions within a secure environment.

                        Securing a network requires a complex combination of hardware devices, such as routers, firewalls and anti-malware software applications. Government agencies and businesses employ highly skilled information security analysts to implement security plans and constantly monitor the efficacy of these plans.
                    </Text>
                    <Text id="importance"  fontSize="2xl" fontWeight="bold">
                        
Why is network security important?
                    </Text>
                    <Text width="50%">
                    Network security is important for home networks as well as in the business world. Most homes with high-speed internet connections have one or more wireless routers, which could be exploited if not properly secured.  A solid network security system helps reduce the risk of data loss, theft and sabotage.
                    </Text>
                    
                    </VStack>
                    </Grid>
                
                    <Box position="fixed" bottom="3" left="0">

<Button as={RouterLink} to="/">
    Previous Page
</Button>
<Spacer />
<Button as={RouterLink} to="/page2" position="fixed" bottom="3" right="0">
    Next Page
</Button>
<Spacer />
</Box>
                <Spacer />


                <Grid>
                <Box justifySelf="center"> <Footer />
                </Box></Grid>
            </Box>
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
                            <DrawerHeader>TOPICS</DrawerHeader>
                            <DrawerBody>
                                <Link href="#what-is">1. What is network security?</Link><br />
                                <Link href="#importance">2. Why is network security important?</Link><br />
                                <Button as={RouterLink} to="/" position="fixed" bottom="3" right="3">Home Page</Button>
                            </DrawerBody>
                        </DrawerContent>
                    </DrawerOverlay>
                </Drawer>
            </>
        )
    }
    