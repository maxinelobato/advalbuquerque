'use client';

import {
  Box,
  BoxProps,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BotaoHotmart } from './botaohotmart';

function BoxBgImage(props: BoxProps) {
  return (
    <Box
      pos={'relative'}
      h={'100%'}
      _before={{
        content: '""',
        bgImage: '/img/bgImage2.webp',
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

export function PrecoInvestimento() {
  const textHeading = {
    heading1: 'Qual é o preço do Investimento?',
    heading2: 'de R$997,00',
    heading3: 'Por 12x de',
    heading4: 'R$',
    heading5: '41,41',
    heading6: 'ou à vista por R$497,00',
  };
  return (
    <>
      <BoxBgImage>
        <Box bgGradient={'linear(to-l, blackAlpha.600, red.800)'}>
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
                  {textHeading.heading1}
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
                      {textHeading.heading2}
                    </Text>
                    <Text color={'whiteAlpha.900'} transform='scale(1.2)'>
                      {textHeading.heading3}{' '}
                    </Text>
                    <Text color={'whiteAlpha.900'} transform='scale(1.2)'>
                      <Text as={'span'} color={'whiteAlpha.600'} fontWeight={'bold'}>
                        {textHeading.heading4}
                      </Text>{' '}
                      <Text
                        as={'span'}
                        color={'whiteAlpha.900'}
                        fontWeight='extrabold'
                        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                        transform='scale(1.2)'
                      >
                        {textHeading.heading5}
                      </Text>
                    </Text>
                    <Text as={'span'} color={'whiteAlpha.900'}>
                      {textHeading.heading6}
                    </Text>
                  </Stack>
                </Stack>
                <VStack spacing={4} pt={6}>
                  <BotaoHotmart />
                </VStack>
              </Box>
            </Container>
          </Stack>
        </Box>
      </BoxBgImage>
    </>
  );
}
