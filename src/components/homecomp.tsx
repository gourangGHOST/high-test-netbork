import * as React from "react"
import { Link as RouterLink } from "react-router-dom"

import {
    Box,
    Text,
    Link,
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
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"
import qwer from "../resources/qwer.jpg"

export function HomeComponent(){
    
   
        return (




            <Box>
                <Grid minH="100vh" p={3}>

                    <ColorModeSwitcher justifySelf="flex-end" />
                    <Box textAlign="left" position="fixed">
                        <SizeExample />
                    </Box>
                   <MyImage/>
                    
                    <Box >
                    


                        <Link as={RouterLink} to="/page1" color="teal.500" fontSize="2xl"
                            position="sticky">
                            Getting started -{">"}
                        </Link>
                        <Link as={RouterLink} to="/page2" color="teal.500" fontSize="2xl"
                            position="sticky">
                            Cisco packet tracer
                </Link>
                        <Link as={RouterLink} to="/page3" color="teal.500" fontSize="2xl"
                            position="sticky">
                            IP ADDRESS
                </Link>
                        <Link as={RouterLink} to="/page4"  color="teal.500" fontSize="2xl"
                            position="sticky">
                            ROUTERS
                </Link>
                        <Link
                            color="teal.500"
                            as={RouterLink}
                            to='/page2'
                            fontSize="2xl"
                            position="sticky"
                        >
                            Next Page
          </Link>
                    
</Box>

                </Grid>
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