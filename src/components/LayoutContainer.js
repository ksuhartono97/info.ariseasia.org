import { Center, Container, Text } from "@chakra-ui/react";

const LayoutContainer = ({ children, title, subtitle, footer }) => (
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
      {subtitle}
    </Container>
    {children}
    <Container pt="4vh">{footer}</Container>
  </Container>
);

export default LayoutContainer;
