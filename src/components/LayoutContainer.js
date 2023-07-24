import { Center, Container, Text } from "@chakra-ui/react";

const LayoutContainer = ({ children, title }) => (
  <Container maxW="xl" pb={60}>
    <Center pt="18vh" pb="8vh">
      <Text
        fontSize={["2xl", "4xl", "5xl"]}
        textStyle="unbounded_bold"
        textAlign="center"
        letterSpacing="1px"
      >
        {title}
      </Text>
    </Center>
    {children}
  </Container>
);

export default LayoutContainer;
