import React from "react";
import BackButton from "../back-button/BackButton";
import {
  Flex,
  HStack,
  Text,
  Image,
  Box,
  Tag,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Center,
  VStack,
} from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} size="full" placement="top">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <DrawerCloseButton />
            <Center h="100%" pb="10%">
              <VStack gap={9} textStyle="unbounded_light">
                <Center flexDir="column" href="/">
                  <Image
                    mb={3}
                    src={process.env.PUBLIC_URL + "/logo512.png"}
                    w="5em"
                  />
                  <Text color="#FF6B00" textStyle="unbounded_bold">
                    ARISE ASIA 2023
                  </Text>
                </Center>

                <Link href="/schedule">Program Schedule</Link>
                <Link href="/workshops">Workshops</Link>
                <Link href="/speakers">Speaker Bios</Link>
                <Link href="/translation">Session Translation Zoom Links</Link>
                <Link href="/breakouts">Country/Region Breakout Room Assignments</Link>
                {/* <Link href="/faq">FAQ</Link> */}

                <Tag
                  bgColor="#FF6B00"
                  color="#ffffff"
                  size="md"
                  letterSpacing="0.8px"
                  px="1em"
                  py="0.5em"
                  w="fit-content"
                  as={Link}
                  _hover={{
                    bgColor: "#333333",
                    textDecoration: "none",
                  }}
                  href="/"
                >
                  HOME
                </Tag>
              </VStack>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        position="fixed"
        left="50%"
        marginLeft="-48%"
        marginTop="2vh"
        width="96%"
        h="4em"
        borderRadius="xl"
        bgColor="#ffffff"
        boxShadow="md"
        zIndex="999"
        justifyContent="space-between"
        flexDir="row"
        px={5}
      >
        <BackButton />
        <HStack
          gap={[0, 1]}
          as={RLink}
          to="/"
          _hover={{ textDecoration: "none" }}
        >
          <Image src={process.env.PUBLIC_URL + "/logo512.png"} h="80%" />
          <Text
            fontSize={["sm", "lg"]}
            textStyle="unbounded_bold"
            color="#FF6B00"
          >
            INFO @ ARISE ASIA 2023
          </Text>
        </HStack>

        <Box display={"flex"} h="100%">
          <Image
            w="1.5em"
            minW="1.5em"
            src={process.env.PUBLIC_URL + "/images/menu.svg"}
            alt="Menu Button"
            onClick={onOpen}
          />
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
