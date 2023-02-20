'use client';

import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ButtonCta } from './buttoncta';
import { Navbar } from './navbar';

export function SectionOne() {
  return (
    <>
      <Box
        bgImage={'/img/bgImage.jpg'}
        bgSize={'cover'}
        bgPos={'center'}
        bgRepeat={'no-repeat'}
        height={'100%'}
      >
        <Box bgGradient={'linear(to-r, gray.900, red.800, transparent)'}>
          <Navbar />
          <Stack direction={{ base: 'column', md: 'row' }}>
            <Flex p={16} flex={1} align={'center'} justify={'center'}>
              <Stack spacing={6} w={'full'} maxW={'2xl'}>
                <Heading
                  as={'h1'}
                  fontWeight={900}
                  fontStyle={'normal'}
                  fontFamily={'roboto'}
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  textAlign={{ base: 'center', md: 'center', lg: 'left' }}
                  textTransform={'uppercase'}
                >
                  Prática em Audiências Criminais
                </Heading>
                <Text
                  as={'h2'}
                  fontWeight={400}
                  fontFamily={'roboto'}
                  fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
                  textAlign={{ base: 'center', md: 'center', lg: 'left' }}
                  color={'whiteAlpha.800'}
                >
                  Saiba como usar as melhores técnicas de interrogatório, raciocínio
                  lógico jurídico e técnicas de persuasão.
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                  <ButtonCta />
                </Stack>
              </Stack>
            </Flex>
            <Flex flex={1}>
              <Image
                src={'/img/bgAlbuquerque2.png'}
                alt={'Image Albuquerque'}
                width={600}
                height={300}
                quality={75}
                priority
              />
            </Flex>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
