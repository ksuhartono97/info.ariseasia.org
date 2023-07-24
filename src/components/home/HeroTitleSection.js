import { Center, Flex, Text } from "@chakra-ui/react";

const HeroSection = ({ title }) => {
  return (
    <Center
      w="full"
      paddingTop={["18vh", "18vh"]}
      paddingBottom={["8vh", "8vh"]}
      bgImage={process.env.PUBLIC_URL + "/images/home/bg.png"}
      bgSize="auto"
      bgPosition="top"
      px={[5, 0]}
    >
      <Flex flexDir="column" align="center">
        <Text
          fontSize={["2.5em", "5xl"]}
          textStyle="unbounded_bold"
          textAlign="center"
          mb={[2, 4]}
          letterSpacing={["1px", "3px"]}
        >
          {title}
        </Text>
      </Flex>
    </Center>
  );
};

export default HeroSection;
