import { Card, CardHeader, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CardSection = ({ items }) => (
  <Stack spacing={4}>
    {items &&
      items.map((item) => (
        <LinkWrapper link={item.link}>
          <Card>
            <CardHeader>
              <Heading textAlign="center" size={["sm", "md"]}>
                {item.title}
              </Heading>
              <Text textAlign="center" size={["sm", "md"]}>
                {item.subtitle}
              </Text>
            </CardHeader>
          </Card>
        </LinkWrapper>
      ))}
  </Stack>
);

const LinkWrapper = ({ children, link }) =>
  link.includes(".pdf") ||
  link.includes(".png") ||
  link.includes(".jpg") ||
  link.includes(".jpeg") ||
  link.includes("https://") ? (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link to={link}>{children}</Link>
  );

export default CardSection;
