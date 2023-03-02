'use client';

import { Box, Flex, Heading, Stack, Text, Container } from '@chakra-ui/react';
import { BotaoHotmart } from './botaohotmart';
import { BotaoPlayVideo } from './botaoplayvideo';
import { Navbar } from './navbar';
import { NavbarPromocao } from './navbarpromocao';
import { VideoAdv } from './videoadv';

export function PaginaInicial() {
  return (
    <>
      <Box
        bgImage={'/img/bgImage.webp'}
        bgSize={'cover'}
        bgPos={'center'}
        bgRepeat={'no-repeat'}
        placeholder={'lazy'}
      >
        <NavbarPromocao />
        <Box bgGradient={'linear(to-r, gray.900, red.800, transparent)'}>
          <Navbar />
          <Container maxW={'7xl'}>
            <Stack
              align={'center'}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
              direction={{ base: 'column-reverse', md: 'column-reverse', lg: 'row' }}
            >
              <Stack flex={1} spacing={{ base: 5, md: 5 }} zIndex={3}>
                <Heading
                  fontWeight={'medium'}
                  fontStyle={'normal'}
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  textAlign={{ base: 'center', md: 'left', lg: 'left' }}
                  textTransform={'uppercase'}
                >
                  Prática em Audiências Criminais
                </Heading>
                <Text
                  fontWeight={'normal'}
                  fontSize={{ base: 'lg', md: '2xs', lg: '2xl' }}
                  textAlign={{ base: 'center', md: 'left', lg: 'left' }}
                  color={'whiteAlpha.800'}
                >
                  Saiba como usar as melhores técnicas de interrogatório, raciocínio
                  lógico jurídico e técnicas de persuasão.
                </Text>
                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={{ base: 'column', md: 'row' }}
                >
                  <BotaoHotmart />
                  <BotaoPlayVideo />
                </Stack>
              </Stack>
              <Flex
                flex={1}
                justify={'center'}
                align={'center'}
                position={'relative'}
                w={'full'}
              >
                <Box
                  position={'relative'}
                  rounded={'lg'}
                  width={'full'}
                  overflow={'hidden'}
                  zIndex={1}
                  boxShadow={'lg'}
                >
                  <VideoAdv />
                </Box>
              </Flex>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
