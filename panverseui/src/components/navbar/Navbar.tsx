"use client";
import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  HStack,
  // Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "./../../assets/red-p-logo-text_dao_croped.png";
import Link from "next/link";
const Links = [
  { name: "About", path: "/about" },
  { name: "Leaders", path: "/leaders" },
  { name: "Program Structure", path: "programStructure" },
];
type Props = {
  children: ReactNode;
  path: string;
};
const NavLink = (props: Props) => (
  <Link
    // as={NextLink}
    // px={2}
    // py={1}
    // transition="all"
    // transitionDuration={"0.3s"}
    // _hover={{
    //   textDecoration: "none",
    //   textColor: "red.500",
    //   fontWeight: 700,
    //   scale: "125%",
    // }}
    style={{
      paddingLeft: 5,
      paddingRight: 5,
    }}
    href={props.path}
  >
    {props.children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        px={4}
        as={motion.div}
        initial={{ translateY: -60 }}
        animate={{ translateY: 0 }}
      >
        <Flex
          h={16}
          alignItems={"center"}
          maxWidth={"100vw"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <NavLink path={"/"}>
                <Image src={logo} alt={"Logo"} height={60}></Image>
              </NavLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, i) => (
                <NavLink key={i} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Link
              // borderRadius={100}

              // as={NextLink}
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                background: "linear-gradient(to bottom,#9d0208,#d00000)",
                color: "white",
                paddingTop: 8,
                paddingBottom: 8,
                borderRadius: 10,
              }}
              href="https://portal.piaic.org/"
            >
              Apply Now
            </Link>
          </Flex>
        </Flex>
        <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">
              {" "}
              <DrawerCloseButton />
              Basic Drawer
            </DrawerHeader>
            <DrawerBody style={{ display: "flex", flexDirection: "column" }}>
              {Links.map((link, i) => (
                <NavLink key={i} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
