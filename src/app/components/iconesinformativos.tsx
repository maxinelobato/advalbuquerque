'use client';

import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Detective, Brain, SpeakerHigh, Scales, Desktop } from 'phosphor-react';

export function IconesInformativos() {
  const headingsIcons = {
    heading1: 'Técnicas de Interrogatório',
    heading2: 'Raciocínio Lógico Jurídico',
    heading3: 'Técnicas de Persuasão',
    heading4: 'Prática Criminal Online',
    heading5: 'Prática em Audiência Criminal',
  };
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
                as={'h1'}
                fontSize={{ base: 'smaller', md: 'lg' }}
                textAlign={{ base: 'center', md: 'center', lg: 'center' }}
              >
                {headingsIcons.heading1}
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
                as={'h1'}
                fontSize={{ base: 'smaller', md: 'lg' }}
                textAlign={{ base: 'center', md: 'center', lg: 'center' }}
              >
                {headingsIcons.heading2}
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
                as={'h1'}
                fontSize={{ base: 'smaller', md: 'lg' }}
                textAlign={{ base: 'center', md: 'center', lg: 'center' }}
              >
                {headingsIcons.heading3}
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
                as={'h1'}
                fontSize={{ base: 'sm', md: 'lg' }}
                textAlign={{ base: 'center', md: 'center', lg: 'center' }}
              >
                {headingsIcons.heading4}
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
                as={'h1'}
                fontSize={{ base: 'sm', md: 'lg' }}
                textAlign={{ base: 'center', md: 'center', lg: 'center' }}
              >
                {headingsIcons.heading5}
              </Heading>
            </Box>
          </VStack>
        </VStack>
      </SimpleGrid>
    </>
  );
}
