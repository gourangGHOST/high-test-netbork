import * as React from "react"
import { Link as RouterLink } from "react-router-dom"

import {
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"


export class HomeComponent extends React.Component {

    render() {
        return (




            <Box textAlign="right">
                <Grid minH="100vh" p={3}>

                    <ColorModeSwitcher justifySelf="flex-end" />
                    <Box textAlign="left" position="fixed">
                        <SizeExample />
                    </Box>
                    <VStack spacing={8}>


                        <Link as={RouterLink} to="/">
                            Previous Page
                </Link>
                        <Link as={RouterLink} to="/page1">
                            Getting started -{">"}
                        </Link>
                        <Link as={RouterLink} to="/page2">
                            Cisco packet tracer
                </Link>
                        <Link as={RouterLink} to="/page3">
                            IP ADDRESS
                </Link>
                        <Link as={RouterLink} to="/page4">
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
                    </VStack>


                </Grid>
            </Box>
        )
    }
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


