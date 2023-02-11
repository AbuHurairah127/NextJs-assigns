"use client";
import { ReactNode } from "react";
import Image from "next/image";
import NextLink from "next/link";
import CustomButton from "./../button/Button";
import {
  Box,
  Flex,
  HStack,
  Link,
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
const Links = ["About", "Leaders", "Program Structure"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    transition="all"
    transitionDuration={"0.3s"}
    _hover={{
      textDecoration: "none",
      textColor: "red.500",
      fontWeight: 700,
      scale: "125%",
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
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
              <Image src={logo} alt={"Logo"} height={60}></Image>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Link
              borderRadius={100}
              paddingX="18px"
              paddingY={"8px"}
              bgGradient="linear(to-t, red.700, red.500)"
              color={"white"}
              fontSize={16}
              fontWeight={500}
              shadow={"0px 0px 15px red"}
              _hover={{
                bgGradient: "linear(to-tr, red.700, red.500)",
              }}
              as={NextLink}
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
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
}
