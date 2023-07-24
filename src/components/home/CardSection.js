import {
  Card,
  CardHeader,
  Center,
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react";

const CardSection = ({ items }) => {
  return (
    <Container maxW="xl">
      <Stack spacing="4">
        {items.map((item) => (
          <a href={item.link}>
            <Card size="lg">
              <CardHeader>
                <Heading alignContent="center" size="lg">
                  <Center>{item.title}</Center>
                </Heading>
                <Center>{item.subtitle}</Center>
              </CardHeader>
            </Card>
          </a>
        ))}
      </Stack>
    </Container>
  );
};

export default CardSection;
