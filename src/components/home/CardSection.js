import { Center, Stack, Text, Heading } from "@chakra-ui/react";
import { Card, CardHeader } from '@chakra-ui/react'

const CardSection = () => {
    return (
        <Stack spacing='4'>
            <Card size="lg">
                <CardHeader>
                    <Heading alignContent='center' size='lg'>
                        <Center>
                            Program Schedule
                        </Center>
                    </Heading>
                </CardHeader>
            </Card>

            <Card size="lg">
                <CardHeader>
                    <Heading alignContent='center' size='lg'>
                        <Center>
                            Workshop
                        </Center>
                    </Heading>
                </CardHeader>
            </Card>

            <Card size="lg">
                <CardHeader>
                    <Heading alignContent='center' size='lg'>
                        <Center>
                            Venue Map
                        </Center>
                    </Heading>
                </CardHeader>
            </Card>

            <Card size="lg">
                <CardHeader>
                    <Heading alignContent='center' size='lg'>
                        <Center>
                            Other Info
                        </Center>
                    </Heading>
                </CardHeader>
            </Card>
        </Stack>
    );
};

export default CardSection;
