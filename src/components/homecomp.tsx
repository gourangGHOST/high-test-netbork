import * as React from "react"
import {Link as RouterLink} from "react-router-dom"
import {
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../ColorModeSwitcher"


export class HomeComponent extends React.Component {

    render() {
        return (




            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <VStack spacing={8}>
                        
                        <Link
                            color="teal.500"
                            as={RouterLink} 
                            to='/page2'
                            fontSize="2xl"
                        >
                            Next Page
          </Link>
                    </VStack>
                </Grid>
            </Box>
        )
    }
}



