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
  return (
    <>
      <Box bgGradient={'linear(to-bl, gray.900, red.800)'}>
        <Stack direction={{ base: 'column', md: 'row' }} p={4}>
          <Container maxW={'5xl'}>
            <Stack spacing={6} w={'full'} p={4}>
              <Heading
                fontWeight={'medium'}
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                textAlign={'center'}
              >
                Aulas Bônus
                <Text
                  fontWeight={400}
                  fontSize={{ base: 'lg', md: '2xs', lg: '2xl' }}
                  textAlign={'center'}
                  color={'whiteAlpha.800'}
                >
                  Social Midia no Instagram e Gestão de Tráfego no Google Ads
                </Text>
              </Heading>
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
                fontWeight={'medium'}
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                textAlign={'center'}
              >
                E-book Exclusivo
                <Text
                  fontWeight={400}
                  fontSize={{ base: 'lg', md: '2xs', lg: '2xl' }}
                  textAlign={'center'}
                  color={'whiteAlpha.800'}
                >
                  Você ganha um E-book sobre como é a acareação no processo penal
                </Text>
              </Heading>
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
                        width={400}
                        height={500}
                        src={'/img/ebook.webp'}
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
