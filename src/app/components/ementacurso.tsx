'use client';

import { Box, Stack, Container, Heading, Flex, SimpleGrid } from '@chakra-ui/react';
import { EmentaCards } from './ementacards';

export function EmentaCurso() {
  return (
    <>
      <Box bgGradient={'linear(to-br, gray.900, red.800)'}>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Container maxW={'5xl'}>
            <Stack spacing={6} w={'full'} p={6}>
              <Heading
                fontWeight={'medium'}
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                textAlign={'center'}
              >
                Ementa do Curso
              </Heading>
            </Stack>
            <Stack direction='column' alignItems='center' p={4}>
              <Box>
                <Flex
                  justifyContent={{ base: 'center', md: 'center' }}
                  direction={{ base: 'column', md: 'row' }}
                >
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={[4, 6]}>
                    <EmentaCards />
                  </SimpleGrid>
                </Flex>
              </Box>
            </Stack>
          </Container>
        </Stack>
      </Box>
    </>
  );
}
