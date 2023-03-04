'use client';

import {
  Flex,
  Box,
  BoxProps,
  HStack,
  Tag,
  Card,
  CardProps,
  Stack,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { ModalMaxine } from './modalmaxine';
import { ModalStefanie } from './modalstefanie';

const modulos = {
  isNew: true,
  imageURL1: '/img/bonusinsta.webp',
  imageURL2: '/img/bonusgoogle.webp',
  modulo1: 'SB Marketing | Social Media',
  modulo2: 'Signature Midia | A sua assinatura no digital',
};

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

function BoxStyleLegend(props: BoxProps) {
  return (
    <Box
      fontSize={{ base: 'sm', md: 'lg' }}
      fontWeight={'semibold'}
      as={'h4'}
      lineHeight={'tall'}
      {...props}
    />
  );
}

export function AulasBonusCards() {
  return (
    <>
      <Flex w='full' alignItems='center' justifyContent='center'>
        <CardStyle>
          <Image
            src={modulos.imageURL1}
            alt={`Picture of ${modulos.modulo1}`}
            width={500}
            height={500}
          />
          <CardBody>
            <Stack mt='2' spacing='3'>
              <Box display='flex'>
                {modulos.isNew && (
                  <HStack spacing={4}>
                    <Tag size={'sm'} variant='subtle' colorScheme='red'>
                      {modulos.modulo1}
                    </Tag>
                  </HStack>
                )}
              </Box>
              <Flex mt='1' justifyContent='center' alignContent='center'>
                <BoxStyleLegend>
                  Estratégias do Instagram de Sucesso para Advogados
                </BoxStyleLegend>
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
          />
          <CardBody>
            <Stack mt='2' spacing='3'>
              <Box display='flex'>
                {modulos.isNew && (
                  <HStack spacing={4}>
                    <Tag size={'sm'} variant='subtle' colorScheme='red'>
                      {modulos.modulo2}
                    </Tag>
                  </HStack>
                )}
              </Box>
              <Flex mt='1' justifyContent='center' alignContent='center'>
                <BoxStyleLegend>
                  Gestão de Tráfego no Google Ads para Advogados
                </BoxStyleLegend>
              </Flex>
            </Stack>
          </CardBody>
          <CardFooter>
            <ModalMaxine />
          </CardFooter>
        </CardStyle>
      </Flex>

      {/* <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL2}
            alt={`Picture of ${modulos.modulo2}`}
            roundedTop='lg'
            width={'auto'}
            height={'auto'}
          />
          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
                  {modulos.modulo2}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <BoxStyleLegend>
                Gestão de Tráfego no Google Ads para Advogados
              </BoxStyleLegend>
            </Flex>
            <ModalMaxine />
          </Box>
        </BoxStyle>
      </Flex> */}
    </>
  );
}
