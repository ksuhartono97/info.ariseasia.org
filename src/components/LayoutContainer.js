import { Center, Container, Text } from "@chakra-ui/react";

const LayoutContainer = ({ children, title, subtitle }) => (
  <Container maxW="xl" pb={60}>
    <Container pb="4vh">
      <Center pt="18vh" pb="4vh">
        <Text
          fontSize={["2xl", "4xl", "5xl"]}
          textStyle="unbounded_bold"
          textAlign="center"
          letterSpacing="1px"
        >
          {title}
        </Text>
      </Center>
      {subtitle &&
        subtitle.split("\n").map((item) => <Text pb="1vh">{item}</Text>)}
    </Container>
    {children}
  </Container>
);

export default LayoutContainer;
