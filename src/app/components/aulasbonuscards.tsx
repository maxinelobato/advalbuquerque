'use client';

import {
  Flex,
  Box,
  HStack,
  Tag,
  Card,
  CardProps,
  Stack,
  CardBody,
  CardFooter,
  TextProps,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { ModalMaxine } from './modalmaxine';
import { ModalStefanie } from './modalstefanie';

function CardStyle(props: CardProps) {
  return (
    <Card
      overflow={'hidden'}
      maxW={'lg'}
      width={300}
      height={{ base: 'auto', md: '380px' }}
      borderWidth={'1px'}
      rounded={'lg'}
      shadow={'lg'}
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

export function AulasBonusCards() {
  const modulos = {
    isNew: true,
    imageURL1: '/img/bonusinsta.webp',
    imageURL2: '/img/bonusgoogle.webp',
    modulo1: 'SB Marketing | Social Media',
    modulo2: 'Signature Midia | A sua assinatura no digital',
    text1: 'Estratégias do Instagram de Sucesso para Advogados',
    text2: 'Gestão de Tráfego no Google Ads para Advogados',
  };
  return (
    <>
      <Flex w='full' alignItems='center' justifyContent='center'>
        <CardStyle>
          <Image
            src={modulos.imageURL1}
            alt={`Picture of ${modulos.modulo1}`}
            width={500}
            height={500}
            quality={75}
            loading={'lazy'}
          />
          <CardBody>
            <Stack mt='2' spacing='3'>
              <Box display='flex'>
                {modulos.isNew && (
                  <HStack spacing={4}>
                    <Tag as={'h3'} size={'sm'} variant='subtle' colorScheme='red'>
                      {modulos.modulo1}
                    </Tag>
                  </HStack>
                )}
              </Box>
              <Flex mt='1' justifyContent='center' alignContent='center'>
                <TextStyleLegend>{modulos.text1}</TextStyleLegend>
              </Flex>
            </Stack>
          </CardBody>
          <CardFooter>
            <ModalStefanie />
          </CardFooter>
        </CardStyle>
      </Flex>
      <Flex w='full' alignItems='center' justifyContent='center'>
        <CardStyle>
          <Image
            src={modulos.imageURL2}
            alt={`Picture of ${modulos.modulo2}`}
            width={500}
            height={500}
            quality={75}
            loading={'lazy'}
          />
          <CardBody>
            <Stack mt='2' spacing='3'>
              <Box display='flex'>
                {modulos.isNew && (
                  <HStack spacing={4}>
                    <Tag as={'h3'} size={'sm'} variant='subtle' colorScheme='red'>
                      {modulos.modulo2}
                    </Tag>
                  </HStack>
                )}
              </Box>
              <Flex mt='1' justifyContent='center' alignContent='center'>
                <TextStyleLegend>{modulos.text2}</TextStyleLegend>
              </Flex>
            </Stack>
          </CardBody>
          <CardFooter>
            <ModalMaxine />
          </CardFooter>
        </CardStyle>
      </Flex>
    </>
  );
}
