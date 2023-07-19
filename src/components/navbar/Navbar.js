import React from "react";
import {
  Flex,
  HStack,
  Text,
  Tag,
  Link,
  Image,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  useDisclosure,
  Center,
  VStack,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} size="full" placement="top">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <DrawerCloseButton />
            <Center h="100%">
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

                <Link href="/program">Program Schedule</Link>
                <Link href="/workshop">Workshop</Link>
                <Link href="/map">Venue Map</Link>
                <Link href="/other">Other Info</Link>

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
        <HStack
          gap={[0, 1]}
          as={Link}
          href="/"
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
  
        <Box display={["flex", "none"]} h="100%">
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
