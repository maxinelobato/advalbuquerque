'use client';

import { Flex, Box, Badge, BoxProps, TextProps, Text } from '@chakra-ui/react';
import Image from 'next/image';

function BoxStyle(props: BoxProps) {
  return (
    <Box
      overflow={'hidden'}
      width={300}
      height={280}
      maxW={'lg'}
      borderWidth={'1px'}
      rounded={'lg'}
      shadow={'lg'}
      position={'relative'}
      bgColor={'blackAlpha.600'}
      backdropBlur={'1rem'}
      backdropFilter='blur(5px)'
      border={'1px'}
      borderColor={'whiteAlpha.200'}
      {...props}
    />
  );
}

function TextStyleLegend(props: TextProps) {
  return (
    <Text
      as={'h4'}
      fontSize={{ base: 'sm', md: 'lg' }}
      fontWeight={'semibold'}
      lineHeight={'tall'}
      {...props}
    />
  );
}

export function EmentaCards() {
  const modulos = {
    isNew: true,
    imageURL0: '/img/boasvindas.webp',
    imageURL1: '/img/aula1.webp',
    imageURL2: '/img/aula2.webp',
    imageURL3: '/img/aula3.webp',
    imageURL41: '/img/aula4part1.webp',
    imageURL42: '/img/aula4part2.webp',
    imageURL5: '/img/aula5.webp',
    modulo0: 'Módulo Boas Vindas',
    modulo1: 'Módulo 1',
    modulo2: 'Módulo 2',
    modulo3: 'Módulo 3',
    modulo41: 'Módulo 4 Parte 1',
    modulo42: 'Módulo 4 Parte 2',
    modulo5: 'Módulo 5',
    text0: 'Bem vindos ao curso de Prática em Audiências Criminais',
    text1: 'O processo penal e seus procedimentos',
    text2: 'Procedimento Comum Ordinário e suas características',
    text3: 'Noções Básicas de Técnica de Persuasão',
    text4: 'Noções básicas de interrogatório I',
    text5: 'Noções básicas de interrogatório II',
    text6: 'Investigação criminal defensiva',
  };

  return (
    <>
      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL0}
            alt={`Picture of ${modulos.modulo0}`}
            width={300}
            height={300}
            loading={'lazy'}
          />

          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge
                  as={'h3'}
                  rounded='full'
                  px='2'
                  fontSize='0.8em'
                  colorScheme='red'
                >
                  {modulos.modulo0}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <TextStyleLegend>{modulos.text0}</TextStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>

      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL1}
            alt={`Picture of ${modulos.modulo1}`}
            width={300}
            height={300}
            loading={'lazy'}
          />
          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge
                  as={'h3'}
                  rounded='full'
                  px='2'
                  fontSize='0.8em'
                  colorScheme='red'
                >
                  {modulos.modulo1}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <TextStyleLegend>{modulos.text1}</TextStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>

      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL2}
            alt={`Picture of ${modulos.modulo2}`}
            width={300}
            height={300}
            loading={'lazy'}
          />
          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge
                  as={'h3'}
                  rounded='full'
                  px='2'
                  fontSize='0.8em'
                  colorScheme='red'
                >
                  {modulos.modulo2}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <TextStyleLegend>{modulos.text2}</TextStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>

      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL3}
            alt={`Picture of ${modulos.modulo3}`}
            width={300}
            height={300}
            loading={'lazy'}
          />
          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge
                  as={'h3'}
                  rounded='full'
                  px='2'
                  fontSize='0.8em'
                  colorScheme='red'
                >
                  {modulos.modulo3}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <TextStyleLegend>{modulos.text3}</TextStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>

      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL41}
            alt={`Picture of ${modulos.modulo41}`}
            width={300}
            height={300}
            loading={'lazy'}
          />
          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge
                  as={'h3'}
                  rounded='full'
                  px='2'
                  fontSize='0.8em'
                  colorScheme='red'
                >
                  {modulos.modulo41}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <TextStyleLegend>{modulos.text4}</TextStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>

      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL42}
            alt={`Picture of ${modulos.modulo42}`}
            width={300}
            height={300}
            loading={'lazy'}
          />
          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge
                  as={'h3'}
                  rounded='full'
                  px='2'
                  fontSize='0.8em'
                  colorScheme='red'
                >
                  {modulos.modulo42}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <TextStyleLegend>{modulos.text5}</TextStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>

      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL5}
            alt={`Picture of ${modulos.modulo5}`}
            width={300}
            height={300}
            loading={'lazy'}
          />
          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge
                  as={'h3'}
                  rounded='full'
                  px='2'
                  fontSize='0.8em'
                  colorScheme='red'
                >
                  {modulos.modulo5}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <TextStyleLegend>{modulos.text6}</TextStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>
    </>
  );
}
