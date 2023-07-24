import { Card, CardHeader, Heading, Stack, Text } from "@chakra-ui/react";

const CardSection = ({ items }) => {
  <Stack spacing={4}>
    {items &&
      items.map((item) => (
        <a href={item.link}>
          <Card size="lg">
            <CardHeader>
              <Heading textAlign="center" size={["sm", "md"]}>
                {item.title}
              </Heading>
              <Text textAlign="center" size={["sm", "md"]}>
                {item.subtitle}
              </Text>
            </CardHeader>
          </Card>
        </a>
      ))}
  </Stack>;
};

export default CardSection;
