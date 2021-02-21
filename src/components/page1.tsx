import * as React from "react"
import { useState } from "react"
import {
    Box,
    Text,
    Link,
    VStack,
    Code,
    Stack,
    Grid,
    Spacer,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    color,
    useColorModeValue,
    Heading,
} from "@chakra-ui/react"
import { Link as RouterLink, Redirect } from "react-router-dom"

import { ColorModeSwitcher } from "../ColorModeSwitcher"
export function Page1() {

    const color = useColorModeValue('purple.400', 'plum');
    const textcolor = useColorModeValue('white', 'black');
    

        return (

            <Box textAlign="center" fontSize="xl">
                <Box textAlign="left" position="fixed">
                    <SizeExample />
                </Box>
                <Box textAlign="left">
                    
                </Box>
                
                <Grid minH="50vh" p={3}>
                <VStack spacing={2}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <Box bg={color} w="auto" p={4} textColor={textcolor} opacity="50%" borderRadius="full">
                        <Text fontSize="5xl">
                            Networking & it’s Security
                            </Text></Box>
                    <Spacer /><Heading>
                    Getting Started </Heading>
                        <Spacer />
                        <Text width="50%">
                        Network security is a broad term that covers a multitude of technologies, devices and processes. In its simplest term, it is a set of rules and configurations designed to protect the integrity, confidentiality and accessibility of computer networks and data using both software and hardware technologies.
                        </Text>
                        <Text fontSize="2xl" fontWeight="bold">
                        What is network security?
                        </Text>
                        <Text fontSize="1xl" width="50%">
                        According to the SANS Institute, network security is the process of taking preventative measures to protect the underlying networking infrastructure from unauthorized access, misuse, malfunction, modification, destruction or improper disclosure. Implementing these measures allows computers, users and programs to perform their permitted critical functions within a secure environment.

                        Securing a network requires a complex combination of hardware devices, such as routers, firewalls and anti-malware software applications. Government agencies and businesses employ highly skilled information security analysts to implement security plans and constantly monitor the efficacy of these plans.
                    </Text>
                    <Text>
                        
Why is network security important?
                    </Text>
                    <Text width="50%">
                    Network security is important for home networks as well as in the business world. Most homes with high-speed internet connections have one or more wireless routers, which could be exploited if not properly secured.  A solid network security system helps reduce the risk of data loss, theft and sabotage.
                    </Text>
                    
                    </VStack>
                    </Grid>
                
                <Link as={RouterLink} to="/">
                    Previous Page
                </Link>
                <Spacer />
                <Link as={RouterLink} to="/page2"
                >
                    Next Page
              </Link>


                <Spacer />
                <Link as={RouterLink} to="/"
                >
                    Homepage
              </Link>
                <Spacer />

                <RedirectButton />
                <Spacer />


            </Box>
        )
    }



export function RedirectButton() {
    const [instaRedirect, setInstaRedirect] = useState(false);
    const btnClick = () => {
        setInstaRedirect(true);
    }

    return (
        <>
            {instaRedirect ? <Redirect to="/instagram" /> : null}
            <Button onClick={btnClick} isExternal colorScheme="teal" >

                instagram
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