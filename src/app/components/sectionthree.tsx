'use client';

import { Box, Flex, Heading, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import { Detective, Brain, SpeakerHigh, Scales, Desktop } from 'phosphor-react';

export function SectionThree() {
  return (
    <>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={[2, 4]}>
        <VStack align={'center'} py={5}>
          <Box color={'red.400'} px={2}>
            <Detective size={'4em'} weight={'duotone'} />
          </Box>
          <VStack align={'center'}>
            <Box>
              <Heading
                fontSize={{ base: 'smaller', md: 'lg' }}
                textAlign={{ base: 'center', md: 'center', lg: 'center' }}
              >
                <Text>Técnicas de Interrogatório</Text>
                <Text fontWeight={'normal'} as='span'>
                  Técnicas de Interrogatório
                </Text>
              </Heading>
            </Box>
          </VStack>
        </VStack>
        <VStack align={'center'} py={5}>
          <Box color={'red.400'} px={2}>
            <Brain size={'4em'} weight={'duotone'} />
          </Box>
          <VStack align={'center'}>
            <Box>
              <Heading
                fontSize={{ base: 'smaller', md: 'lg' }}
                textAlign={{ base: 'center', md: 'center', lg: 'center' }}
              >
                <Text>Raciocínio Lógico Jurídico</Text>
                <Text fontWeight={'normal'} as='span'>
                  Raciocínio Lógico Jurídico
                </Text>
              </Heading>
            </Box>
          </VStack>
        </VStack>
        <VStack align={'center'} py={5}>
          <Box color={'red.400'} px={2}>
            <SpeakerHigh size={'4em'} weight={'duotone'} />
          </Box>
          <VStack align={'center'}>
            <Box>
              <Heading
                fontSize={{ base: 'smaller', md: 'lg' }}
                textAlign={{ base: 'center', md: 'center', lg: 'center' }}
              >
                <Text>Técnicas de Persuasão</Text>
                <Text fontWeight={'normal'} as='span'>
                  Técnicas de Persuasão
                </Text>
              </Heading>
            </Box>
          </VStack>
        </VStack>
        <VStack align={'center'} py={5}>
          <Box color={'red.400'} px={2}>
            <Desktop size={'4em'} weight={'duotone'} />
          </Box>
          <VStack align={'start'}>
            <Box>
              <Heading
                fontSize={{ base: 'sm', md: 'lg' }}
                textAlign={{ base: 'center', md: 'center', lg: 'center' }}
              >
                <Text>Prática Criminal Online</Text>
                <Text fontWeight={'normal'} as='span'>
                  Prática Criminal Online
                </Text>
              </Heading>
            </Box>
          </VStack>
        </VStack>
        <VStack align={'center'} py={5}>
          <Box color={'red.400'} px={2}>
            <Scales size={'4em'} weight={'duotone'} />
          </Box>
          <VStack align={'start'}>
            <Box>
              <Heading
                fontSize={{ base: 'sm', md: 'lg' }}
                textAlign={{ base: 'center', md: 'center', lg: 'center' }}
              >
                <Text>Prática em Audiência Criminal</Text>
                <Text fontWeight={'normal'} as='span'>
                  Prática em Audiência Criminal
                </Text>
              </Heading>
            </Box>
          </VStack>
        </VStack>
      </SimpleGrid>
    </>
  );
}
