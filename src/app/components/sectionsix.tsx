'use client';

import {
  Box,
  Stack,
  Container,
  Heading,
  Text,
  Flex,
  IconButton,
  SimpleGrid,
} from '@chakra-ui/react';
import Image from 'next/image';
import { PlayCircle } from 'phosphor-react';

export function SectionSix() {
  return (
    <>
      <Box bgGradient={'linear(to-bl, gray.900, red.800)'}>
        <Stack direction={{ base: 'column', md: 'row' }} p={6}>
          <Container maxW={'5xl'}>
            <Stack spacing={6} w={'full'} p={6}>
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
                  Google Ads para Advogados
                </Text>
              </Heading>
            </Stack>
            <Stack direction='column' alignItems='center' p={6}>
              <Box>
                <Flex
                  justifyContent={{ base: 'center', md: 'center' }}
                  direction={{ base: 'column-reverse', md: 'column' }}
                >
                  <Box
                    position={'relative'}
                    height={'300px'}
                    width={'full'}
                    overflow={'hidden'}
                    bgColor={'whiteAlpha.200'}
                    backdropBlur={'1rem'}
                    backdropFilter='blur(5px)'
                    rounded={'lg'}
                    border={'1px'}
                    borderColor={'whiteAlpha.200'}
                    shadow={'lg'}
                  >
                    <IconButton
                      aria-label={'Play Button'}
                      style={{ pointerEvents: 'none' }}
                      icon={<PlayCircle size={64} weight={'fill'} />}
                      size={'lg'}
                      color={'white'}
                      position={'absolute'}
                      left={'50%'}
                      top={'50%'}
                      transform={'translateX(-50%) translateY(-50%)'}
                    />
                    <Image
                      alt={'Hero Image'}
                      width={600}
                      height={600}
                      src={'/img/bgAlbuquerque2.png'}
                    />
                  </Box>
                </Flex>
              </Box>
            </Stack>
            <Stack spacing={6} w={'full'} p={6}>
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
            <Stack direction='column' alignItems='center' p={6}>
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
