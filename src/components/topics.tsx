import * as React from "react"
import {
    Link,
    Button,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,

} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"
export function Topics(props: { topics: any, title: string }) {
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
                        <DrawerHeader>{props.title}</DrawerHeader>
                        <DrawerBody>
{props.topics.map((topic: any) => <SingleTopic href={topic.href} content={topic.content} />)}

                            <Button as={RouterLink} to="/" position="fixed" bottom="3" right="3">Home Page</Button>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}


function SingleTopic(props: { href: string, content: string }) {
    return (
        <>
            <Link href={props.href}>{props.content}</Link><br />
        </>
    );
}
