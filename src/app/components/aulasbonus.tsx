'use client';

import {
  Box,
  Stack,
  Container,
  Heading,
  Text,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import Image from 'next/image';
import { AulasBonusCards } from './aulasbonuscards';

export function AulasBonus() {
  const headingAulaBonus = {
    heading1: 'Aulas Bônus',
    body1: 'Social Midia no Instagram e Gestão de Tráfego no Google Ads',
    heading2: 'E-book Exclusivo',
    body2: 'Você ganha um E-book sobre como é a acareação no processo penal',
  };

  return (
    <>
      <Box bgGradient={'linear(to-bl, gray.900, red.800)'}>
        <Stack direction={{ base: 'column', md: 'row' }} p={4}>
          <Container maxW={'5xl'}>
            <Stack spacing={6} w={'full'} p={4}>
              <Heading
                as={'h1'}
                fontWeight={'medium'}
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                textAlign={'center'}
              >
                {headingAulaBonus.heading1}
              </Heading>
              <Text
                as={'h2'}
                fontWeight={400}
                fontSize={{ base: 'lg', md: '2xs', lg: '2xl' }}
                textAlign={'center'}
                color={'whiteAlpha.800'}
              >
                {headingAulaBonus.body1}
              </Text>
            </Stack>
            <Stack direction='column' alignItems='center' p={4}>
              <Box>
                <Flex
                  justifyContent={{ base: 'center', md: 'center' }}
                  direction={{ base: 'column', md: 'row' }}
                >
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={[4, 6]}>
                    <AulasBonusCards />
                  </SimpleGrid>
                </Flex>
              </Box>
            </Stack>
            <Stack spacing={6} w={'full'} p={4}>
              <Heading
                as={'h1'}
                fontWeight={'medium'}
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                textAlign={'center'}
              >
                {headingAulaBonus.heading2}
              </Heading>
              <Text
                as={'h2'}
                fontWeight={400}
                fontSize={{ base: 'lg', md: '2xs', lg: '2xl' }}
                textAlign={'center'}
                color={'whiteAlpha.800'}
              >
                {headingAulaBonus.body2}
              </Text>
            </Stack>
            <Stack direction='column' alignItems='center' p={2}>
              <Box>
                <Flex
                  justifyContent={{ base: 'center', md: 'center' }}
                  direction={{ base: 'column-reverse', md: 'column' }}
                >
                  <SimpleGrid columns={{ base: 1, md: 1 }} spacing={[2, 6]}>
                    <Box
                      overflow={'hidden'}
                      css={{ filter: 'drop-shadow(0 0 1rem rgb(0,0,0))' }}
                    >
                      <Image
                        alt={'Hero Image'}
                        width={500}
                        height={500}
                        src={'/img/ebook.webp'}
                        quality={75}
                        loading={'lazy'}
                      />
                    </Box>
                  </SimpleGrid>
                </Flex>
              </Box>
            </Stack>
          </Container>
        </Stack>
      </Box>
    </>
  );
}
