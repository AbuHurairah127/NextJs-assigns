"use client";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { type ReactNode } from "react";
import NextLink from "next/link";
import logo from "./../../assets/red-p-logo-text_dao_croped.png";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Products</ListHeader>
            <Text>Overview</Text>
            <Text>Nextjs 13 </Text>
            <Text>Blockchain (Etherem)</Text>
            <Text>Metaverse</Text>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Text>Web 3.0 Templates</Text>
              <Tag
                size={"sm"}
                bg={useColorModeValue("green.300", "green.800")}
                ml={2}
                color={"white"}
              >
                New
              </Tag>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link as={NextLink} href={"#"}>
              About Us
            </Link>
            <Link as={NextLink} href={"#"}>
              Press
            </Link>
            <Link as={NextLink} href={"#"}>
              Careers
            </Link>
            <Link as={NextLink} href={"#"}>
              Contact Us
            </Link>
            <Link as={NextLink} href={"#"}>
              Partners
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Text>Cookies Policy</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms of Service</Text>
            <Text>Law Enforcement</Text>
            <Text>Status</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"https://www.facebook.com/groups/798034500288384"}>
              Facebook
            </Link>
            <Link href={"https://twitter.com/Panaverse_edu"}>Twitter</Link>
            <Link href={"https://www.youtube.com/@panaverse"}>Youtube</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image src={logo} alt={"logo"} width={200} />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023 Abu Hurairah. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
