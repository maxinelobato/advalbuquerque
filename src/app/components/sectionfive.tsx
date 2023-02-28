'use client';

import { Box, Container, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { ButtonCta } from './buttoncta';

export function SectionFive() {
  return (
    <>
      <Box
        bgImage={'/img/bgImage2.webp'}
        bgSize={'cover'}
        bgPos={'center'}
        bgRepeat={'no-repeat'}
        bgAttachment={'fixed'}
      >
        <Box bgGradient={'linear(to-b, red.800, transparent 70%)'}>
          <Stack direction={{ base: 'column', md: 'row' }} p={6}>
            <Container maxW={'lg'}>
              <Stack spacing={6} w={'full'} maxW={'2xl'} p={6}>
                <Heading
                  as={'h1'}
                  fontWeight={'medium'}
                  fontStyle={'normal'}
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  textAlign={'center'}
                >
                  Qual é o preço do Investimento?
                </Heading>
              </Stack>
              <Box
                bgColor={'blackAlpha.700'}
                backdropBlur={'1rem'}
                backdropFilter='blur(5px)'
                border={'1px'}
                borderColor={'whiteAlpha.200'}
                rounded={'lg'}
                p={8}
              >
                <Stack maxW='lg' mx='auto' spacing={{ base: '6', md: '10' }}>
                  <Stack spacing='3' textAlign='center'>
                    <Text
                      as={'s'}
                      color={'whiteAlpha.900'}
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      transform='scale(1.2)'
                    >
                      de R$997,00
                    </Text>
                    <Text color={'whiteAlpha.900'} transform='scale(1.2)'>
                      Por 12x de{' '}
                    </Text>
                    <Text color={'whiteAlpha.900'} transform='scale(1.2)'>
                      <Text as={'span'} color={'whiteAlpha.600'} fontWeight={'bold'}>
                        R$
                      </Text>{' '}
                      <Text
                        as={'span'}
                        color={'whiteAlpha.900'}
                        fontWeight='extrabold'
                        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                        transform='scale(1.2)'
                      >
                        41,41
                      </Text>
                    </Text>
                    <Text as={'span'} color={'whiteAlpha.900'}>
                      ou à vista por R$497,00
                    </Text>
                  </Stack>
                </Stack>
                <VStack spacing={4} pt={6}>
                  <ButtonCta />
                </VStack>
              </Box>
            </Container>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
