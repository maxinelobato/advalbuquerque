'use client';

import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Navbar } from './navbar';
import { SectionTwo } from './sectiontwo';

export function SectionOne() {
  return (
    <>
      <Box
        bgImage={'/img/bgImage.jpg'}
        bgPos={'center'}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
      >
        <Box bgGradient={'linear(to-r, gray.900, red.800, transparent 100%)'}>
          <Navbar />
          <Stack direction={{ base: 'column', md: 'row' }}>
            <Flex p={20} flex={1} align={'center'} justify={'center'}>
              <Stack spacing={6} w={'full'}>
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
                  textTransform={'uppercase'}
                >
                  Saiba como usar as melhores técnicas de interrogatório, raciocínio
                  lógico jurídico e técnicas de persuasão.
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                  <Button
                    rounded={'full'}
                    size={'lg'}
                    bg={'red.800'}
                    color={'whiteAlpha.900'}
                    shadow={'dark-lg'}
                    _hover={{
                      bg: 'blackAlpha.700',
                      transform: 'scale(1.1)',
                      border: '1px solid',
                      borderColor: 'red.800',
                    }}
                  >
                    Sim, quero garantir meu lugar
                  </Button>
                </Stack>
              </Stack>
            </Flex>
            <Flex flex={1}>
              <Image
                src={'/img/bgAlbuquerque2.png'}
                alt={'Image Albuquerque'}
                width={800}
                height={800}
                priority
              />
            </Flex>
          </Stack>
        </Box>
      </Box>
      <SectionTwo />
    </>
  );
}
