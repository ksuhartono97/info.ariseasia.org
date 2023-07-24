import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  CardBody,
  Container,
  Text,
} from "@chakra-ui/react";

const AccordionSection = ({ items }) => (
  <Container maxW="xl">
    <Card size="sm">
      <CardBody>
        <Accordion allowMultiple allowToggle>
          {items &&
            items.map((item) => (
              <AccordionItem>
                <h2>
                  <AccordionButton bg="orange.300" _hover>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontSize={["lg", "2xl"]}
                      fontWeight="bold"
                    >
                      {item.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel bg="white" pb={4}>
                  <Text fontSize="lg" fontWeight="bold">
                    {item.subtitle}
                  </Text>
                  <Text fontSize="sm" fontWeight="bold">
                    {item.role}
                  </Text>
                  <Text pt={4}>{item.description}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>
      </CardBody>
    </Card>
  </Container>
);

export default AccordionSection;
