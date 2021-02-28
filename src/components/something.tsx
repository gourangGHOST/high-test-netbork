import { Box, ButtonGroup, Button, Menu, MenuButton, Portal, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Link as RouterLink } from "react-router-dom"
import { DingDong } from "./dingdong";
import { BiMenu } from "react-icons/bi"

export function Topbar() {
    return (
         <Box><BrowserView>
            <Box paddingTop={5}>
                <ButtonGroup colorScheme="teal" variant="ghost" fontSize="2xl" size="sm">
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
        </BrowserView>
            <MobileView>

                <Menu>
                    <MenuButton
                         
                        top="5"
                        left="5"
                        size="md"
                        fontSize="lg"
                        variant="outline"
                        color="current"
                        marginLeft="2"
                        as={IconButton}
                        aria-label="Options"
                        icon={<BiMenu />}
                    />
                    <Portal>
                        <MenuList>

                            <MenuItem><Button as={RouterLink} to="/page1">Getting started -{">"}</Button></MenuItem>
                            <MenuItem><Button as={RouterLink} to="/page2">Cisco packet tracer</Button></MenuItem>
                            <MenuItem><Button as={RouterLink} to="/page3">IP ADDRESS</Button></MenuItem>
                            <MenuItem><Button as={RouterLink} to="/page4">ROUTERS</Button></MenuItem>
                            <MenuItem><Button as={RouterLink} to="/page5">RIP AND ORGIP</Button></MenuItem>
                            <MenuItem><Button as={RouterLink} to="/page6">SWITCHING</Button></MenuItem>
                            <MenuItem><Button as={RouterLink} to="/page7">ACL AND NAT</Button></MenuItem>
                            <MenuItem><Button as={RouterLink} to="/page8"> ASA FIREWALL</Button></MenuItem>
                            <MenuItem><Button as={RouterLink} to="/page9">NETWORK SCANNING</Button></MenuItem>
                            <MenuItem><Button as={RouterLink} to="/page10">HONEYPOT</Button></MenuItem>

                        </MenuList>
                    </Portal>
                </Menu>


            </MobileView>
        </Box>
    )
}