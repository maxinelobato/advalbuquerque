'use client';

import {
  Box,
  Stack,
  Container,
  Heading,
  Flex,
  SimpleGrid,
  BoxProps,
  Text,
  Center,
} from '@chakra-ui/react';
import Image from 'next/image';

function BoxStyle(props: BoxProps) {
  return (
    <Box
      position={'relative'}
      width={300}
      height={280}
      overflow={'hidden'}
      bgColor={'blackAlpha.600'}
      backdropBlur={'1rem'}
      backdropFilter='blur(5px)'
      rounded={'lg'}
      border={'1px'}
      borderColor={'whiteAlpha.200'}
      shadow={'lg'}
      {...props}
    />
  );
}

export function EmentaCurso() {
  return (
    <>
      <Box bgGradient={'linear(to-br, gray.900, red.800)'}>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Container maxW={'5xl'}>
            <Stack spacing={6} w={'full'} p={3}>
              <Heading
                fontWeight={'medium'}
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                textAlign={'center'}
              >
                Ementa do Curso
              </Heading>
            </Stack>
            <Stack direction='column' alignItems='center' p={6}>
              <Box>
                <Flex
                  justifyContent={{ base: 'center', md: 'center' }}
                  direction={{ base: 'column', md: 'row' }}
                >
                  <SimpleGrid columns={{ base: 1, md: 3 }} spacing={[3, 6]}>
                    <BoxStyle>
                      <Image
                        alt={'Hero Image'}
                        width={500}
                        height={500}
                        src={'/img/aula1.webp'}
                        loading={'lazy'}
                      />
                      <Text
                        p={2}
                        textAlign={'center'}
                        fontWeight={'medium'}
                        fontSize={{ base: 'sm', md: 'lg' }}
                      >
                        MÓDULO 1: O processo penal e seus procedimentos
                      </Text>
                    </BoxStyle>
                    <BoxStyle>
                      <Image
                        alt={'Hero Image'}
                        width={500}
                        height={500}
                        src={'/img/aula2.webp'}
                        loading={'lazy'}
                      />
                      <Text
                        p={2}
                        textAlign={'center'}
                        fontWeight={'medium'}
                        fontSize={{ base: 'sm', md: 'lg' }}
                      >
                        MÓDULO 2: Procedimento Comum Ordinário e suas características
                      </Text>
                    </BoxStyle>
                    <BoxStyle>
                      <Image
                        alt={'Hero Image'}
                        width={500}
                        height={500}
                        src={'/img/aula3.webp'}
                        loading={'lazy'}
                      />
                      <Text
                        p={2}
                        textAlign={'center'}
                        fontWeight={'medium'}
                        fontSize={{ base: 'sm', md: 'lg' }}
                      >
                        MÓDULO 3: Noções básicas de interrogatório Parte I
                      </Text>
                    </BoxStyle>
                    <BoxStyle>
                      <Image
                        alt={'Hero Image'}
                        width={500}
                        height={500}
                        src={'/img/aula4.webp'}
                        loading={'lazy'}
                      />
                      <Text
                        p={2}
                        textAlign={'center'}
                        fontWeight={'medium'}
                        fontSize={{ base: 'sm', md: 'lg' }}
                      >
                        MÓDULO 4: Noções básicas de interrogatório Parte II
                      </Text>
                    </BoxStyle>
                    <BoxStyle>
                      <Image
                        alt={'Hero Image'}
                        width={500}
                        height={500}
                        src={'/img/aula5.webp'}
                        loading={'lazy'}
                      />
                      <Text
                        p={2}
                        textAlign={'center'}
                        fontWeight={'medium'}
                        fontSize={{ base: 'sm', md: 'lg' }}
                      >
                        MÓDULO 5: Investigação criminal defensiva
                      </Text>
                    </BoxStyle>
                    <BoxStyle>
                      <Center h={'100%'}>
                        <Text
                          p={2}
                          textAlign={'center'}
                          fontWeight={'medium'}
                          fontSize={{ base: 'sm', md: 'lg' }}
                        >
                          MÓDULO BÔNUS: Estratégias para um perfil de sucesso
                        </Text>
                      </Center>
                    </BoxStyle>
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
