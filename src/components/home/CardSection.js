import {
  Card,
  CardHeader,
  Center,
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CardSection = ({ items }) => {
  return (
    <Container maxW="xl">
      <Stack spacing="4">
        {items.map((item) => (
          <Link to={item.link}>
            <Card size="lg">
              <CardHeader>
                <Heading alignContent="center" size="lg">
                  <Center>{item.title}</Center>
                </Heading>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </Stack>
    </Container>
  );
};

export default CardSection;
