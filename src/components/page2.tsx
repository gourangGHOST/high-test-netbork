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
} from "@chakra-ui/react"
import { Link as RouterLink, Redirect } from "react-router-dom"

import { ColorModeSwitcher } from "../ColorModeSwitcher"
export class Page2 extends React.Component {


    render() {

        return (

            <Box textAlign="center" fontSize="xl">

                <Grid minH="50vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <Stack>
                        <Text fontSize="5xl">
                            Networking & it’s Security
                    <Spacer />
                    Getting Started </Text>
                        <Spacer />
                        <Text fontSize="3xl">
                            why do we need to know about this ?
                    </Text>
                    </Stack>
                    <VStack spacing={2}>
                    </VStack>
                </Grid>
                <Link as={RouterLink} to="/">
                Previous Page
                </Link>
                <Spacer/>
                <Link as={RouterLink} to="/page3"
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
