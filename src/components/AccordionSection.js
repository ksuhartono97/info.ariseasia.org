import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
} from "@chakra-ui/react";

const AccordionSection = ({ items }) => (
  <Container maxW="xl">
    <Accordion allowMultiple allowToggle>
      {items &&
        items.map((item) => (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{item.subtitle}</AccordionPanel>
            <AccordionPanel pb={4}>{item.role}</AccordionPanel>
            <AccordionPanel pb={4}>{item.description}</AccordionPanel>
          </AccordionItem>
        ))}
    </Accordion>
  </Container>
);

export default AccordionSection;
