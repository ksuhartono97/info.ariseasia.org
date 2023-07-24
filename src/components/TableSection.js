import {
  Card,
  CardBody,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const TableSection = ({ items }) => (
  <Card size="sm">
    <CardBody>
      <TableContainer>
        <Table variant="simple" size={["sm", "md", "lg"]}>
          <Thead>
            <Tr>
              {items.headers && items.headers.map((item) => <Th textAlign="center">{item}</Th>)}
            </Tr>
          </Thead>
          <Tbody>
            {items.body &&
              items.body.map((items) => (
                <Tr>{items && items.map((item) => <Td textAlign="center">{item}</Td>)}</Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </CardBody>
  </Card>
);

export default TableSection;
