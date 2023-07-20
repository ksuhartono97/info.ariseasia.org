import { Flex,Box } from "@chakra-ui/react";
import HeroTitleSection from "./HeroTitleSection";
import CardSection from "./CardSection";

const HomeContainer = () => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        top={["50vh", "50vh"]}
        width={["90vw", "container.md"]}
        marginLeft="auto"
        marginRight="auto"
        left="0"
        right="0"
        zIndex="3"
      >
      </Box>
      <Flex direction="column" zIndex="0">
        <HeroTitleSection />
        <CardSection />
      </Flex>
    </Box>
  );
};

export default HomeContainer;
