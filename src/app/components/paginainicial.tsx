'use client';

import { Box, Flex, Heading, Stack, Text, Container, BoxProps } from '@chakra-ui/react';
import { BotaoHotmart } from './botaohotmart';
import { BotaoPlayVideo } from './botaoplayvideo';
import { Navbar } from './navbar';
import { NavbarPromocao } from './navbarpromocao';
import { VideoAdv } from './videoadv';

function BoxBgImageInicial(props: BoxProps) {
  return (
    <Box
      pos={'relative'}
      h={'100%'}
      _before={{
        content: '""',
        bgImage: '/img/bgImage.webp',
        bgSize: 'cover',
        pos: 'absolute',
        zIndex: '-1',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0.8,
      }}
      {...props}
    />
  );
}

export function PaginaInicial() {
  const textHeading = {
    heading1: 'Prática em Audiências Criminais',
    heading2:
      'Saiba como usar as melhores técnicas de interrogatório, raciocínio lógico jurídico e técnicas de persuasão.',
  };
  return (
    <>
      <BoxBgImageInicial>
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
                  {textHeading.heading1}
                </Heading>
                <Text
                  fontWeight={'normal'}
                  fontSize={{ base: 'lg', md: '2xs', lg: '2xl' }}
                  textAlign={{ base: 'center', md: 'left', lg: 'left' }}
                  color={'whiteAlpha.800'}
                >
                  {textHeading.heading2}
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
                w={'auto'}
              >
                <Box
                  position={'relative'}
                  rounded={'lg'}
                  width={'auto'}
                  height={'auto'}
                  overflow={'hidden'}
                  zIndex={1}
                  boxShadow={'lg'}
                  border={'4px'}
                  borderColor={'red.400'}
                >
                  <VideoAdv />
                </Box>
              </Flex>
            </Stack>
          </Container>
        </Box>
      </BoxBgImageInicial>
    </>
  );
}
