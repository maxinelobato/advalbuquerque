'use client';

import {
  Box,
  Stack,
  Container,
  Heading,
  Text,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import Image from 'next/image';

export function SectionSeven() {
  return (
    <>
      <Box bgGradient={'linear(to-br, gray.900, red.800)'}>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Container maxW={'5xl'}>
            <Stack spacing={6} w={'full'} p={3}>
              <Heading
                fontWeight={'medium'}
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                textAlign={'center'}
              >
                Ementa do Curso
              </Heading>
            </Stack>
            <Stack direction='column' alignItems='center' p={6}>
              <Box>
                <Flex
                  justifyContent={{ base: 'center', md: 'center' }}
                  direction={{ base: 'column', md: 'row' }}
                >
                  <SimpleGrid columns={{ base: 2, md: 3 }} spacing={[3, 6]}>
                    <Box overflow={'hidden'} boxShadow={'lg'} rounded={'lg'}>
                      <Image
                        alt={'Hero Image'}
                        width={300}
                        height={400}
                        src={'/img/aula1.webp'}
                      />
                    </Box>
                    <Box overflow={'hidden'} boxShadow={'lg'} rounded={'lg'}>
                      <Image
                        alt={'Hero Image'}
                        width={300}
                        height={400}
                        src={'/img/aula2.webp'}
                      />
                    </Box>
                    <Box overflow={'hidden'} boxShadow={'lg'} rounded={'lg'}>
                      <Image
                        alt={'Hero Image'}
                        width={300}
                        height={400}
                        src={'/img/aula3.webp'}
                      />
                    </Box>
                    <Box overflow={'hidden'} boxShadow={'lg'} rounded={'lg'}>
                      <Image
                        alt={'Hero Image'}
                        width={300}
                        height={400}
                        src={'/img/aula4.webp'}
                      />
                    </Box>
                    <Box overflow={'hidden'} boxShadow={'lg'} rounded={'lg'}>
                      <Image
                        alt={'Hero Image'}
                        width={300}
                        height={400}
                        src={'/img/aula5.webp'}
                      />
                    </Box>
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
