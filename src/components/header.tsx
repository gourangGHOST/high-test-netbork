import * as React from "react"
import { useState, useEffect } from "react";

import { Link as RouterLink, useLocation } from "react-router-dom"

import {
    Box,
    Button,
    ButtonGroup,
    HStack,
    IconButton,
    Spacer,
} from "@chakra-ui/react"

export function Header() {
    const loc = useLocation();
    const [page1, setPage1] = useState(false);
    const [page2, setPage2] = useState(false);
    const [page3, setPage3] = useState(false);
    const [page4, setPage4] = useState(false);
    const [page5, setPage5] = useState(false);
    const [page6, setPage6] = useState(false);
    const [page7, setPage7] = useState(false);
    const [page8, setPage8] = useState(false);
    const [page9, setPage9] = useState(false);
    const [page10, setPage10] = useState(false);

    useEffect(() => {
        switch (loc.pathname) {
            case "/page1":
                setPage1(true);
                setPage2(false);
                setPage3(false);
                setPage4(false);
                setPage5(false);
                setPage6(false);
                setPage7(false);
                setPage8(false);
                setPage9(false);
                setPage10(false);
                break;
            case "/page2":
                setPage1(false);
                setPage2(true);
                setPage3(false);
                setPage4(false);
                setPage5(false);
                setPage6(false);
                setPage7(false);
                setPage8(false);
                setPage9(false);
                setPage10(false);
                break;
            case "/page3":
                setPage1(false);
                setPage2(false);
                setPage3(true);
                setPage4(false);
                setPage5(false);
                setPage6(false);
                setPage7(false);
                setPage8(false);
                setPage9(false);
                setPage10(false);
                break;
            case "/page4":
                setPage1(false);
                setPage2(false);
                setPage3(false);
                setPage4(true);
                setPage5(false);
                setPage6(false);
                setPage7(false);
                setPage8(false);
                setPage9(false);
                setPage10(false);
                break;
            case "/page5":
                setPage1(false);
                setPage2(false);
                setPage3(false);
                setPage4(false);
                setPage5(true);
                setPage6(false);
                setPage7(false);
                setPage8(false);
                setPage9(false);
                setPage10(false);
                break;
            case "/page6":
                setPage1(false);
                setPage2(false);
                setPage3(false);
                setPage4(false);
                setPage5(false);
                setPage6(true);
                setPage7(false);
                setPage8(false);
                setPage9(false);
                setPage10(false);
                break;
            case "/page7":
                setPage1(false);
                setPage2(false);
                setPage3(false);
                setPage4(false);
                setPage5(false);
                setPage6(false);
                setPage7(true);
                setPage8(false);
                setPage9(false);
                setPage10(false);
                break;
            case "/page8":
                setPage1(false);
                setPage2(false);
                setPage3(false);
                setPage4(false);
                setPage5(false);
                setPage6(false);
                setPage7(false);
                setPage8(true);
                setPage9(false);
                setPage10(false);
                break;
            case "/page9":
                setPage1(false);
                setPage2(false);
                setPage3(false);
                setPage4(false);
                setPage5(false);
                setPage6(false);
                setPage7(false);
                setPage8(false);
                setPage9(true);
                setPage10(false);
                break;
            case "/page10":
                setPage1(false);
                setPage2(false);
                setPage3(false);
                setPage4(false);
                setPage5(false);
                setPage6(false);
                setPage7(false);
                setPage8(false);
                setPage9(false);
                setPage10(true);
                break;
            default:
                break;
        }
    }, [])


    return (
        <Box paddingTop={20} >
        <HStack padding={3}  >
            <Spacer/>
            <ButtonGroup size="sm" colorScheme="facebook">
                {page1 ? null : <Button as={RouterLink} to="/page1">Getting started -{">"}</Button>}
                {page2 ? null : <Button as={RouterLink} to="/page2">Cisco packet tracer</Button>}
                {page3 ? null : <Button as={RouterLink} to="/page3">IP ADDRESS</Button>}
                {page4 ? null : <Button as={RouterLink} to="/page4">ROUTERS</Button>}
                {page5 ? null : <Button as={RouterLink} to="/page5">RIP AND ORGIP</Button>} 
                {page6 ? null : <Button as={RouterLink} to="/page6">SWITCHING</Button>}
                {page7 ? null : <Button as={RouterLink} to="/page7">ACL AND NAT</Button>}
                {page8 ? null : <Button as={RouterLink} to="/page8"> ASA FIREWALL</Button>}
                {page9 ? null : <Button as={RouterLink} to="/page9">NETWORK SCANNING</Button>}
                {page10 ? null : <Button as={RouterLink} to="/page10">HONEYPOT</Button>}
                
            </ButtonGroup>
            <Spacer/>
        </HStack>
        </Box>
    )

}