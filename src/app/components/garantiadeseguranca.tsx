'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ShieldCheck, Lock, Laptop } from 'phosphor-react';
import { BotaoHotmart } from './botaohotmart';

export function GarantiaDeSeguranca() {
  const garantiaText = {
    heading1: 'Garantia de 7 Dias',
    text1:
      'Nesse prazo, se o curso não for o que esperava, é só pedir seu investimento de volta.',
    heading2: 'Pagamento Seguro',
    text2: ' A sua compra é 100% segura e todos os seus dados são protegidos.',
    heading3: 'Acesso Imediato',
    text3:
      'Assim que seu pagamento for processado, você terá acesso imediato ao conteúdo do curso.',
  };
  return (
    <>
      <Box bgGradient={'linear(to-r, gray.900, red.800, transparent 100%)'}>
        <Container maxW={'5xl'}>
          <Stack direction='column' alignItems='center' p={8}>
            <Box>
              <Flex
                justifyContent={{ base: 'center', md: 'center' }}
                direction={{ base: 'column-reverse', md: 'column' }}
              >
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={[2, 6]}>
                  <VStack
                    align={'center'}
                    py={5}
                    p={5}
                    bgColor={'whiteAlpha.200'}
                    backdropBlur={'1rem'}
                    backdropFilter='blur(5px)'
                    rounded={'lg'}
                    border={'1px'}
                    borderColor={'whiteAlpha.200'}
                    shadow={'lg'}
                    _hover={{
                      bgColor: 'blackAlpha.800',
                      transition: '0.5s ease-in-out',
                      color: 'red.300',
                    }}
                  >
                    <Box px={2}>
                      <ShieldCheck size={'4em'} weight={'duotone'} />
                    </Box>
                    <VStack align={'center'}>
                      <Box>
                        <Heading
                          as={'h1'}
                          fontSize={'2xl'}
                          color={'red.300'}
                          textAlign={'center'}
                        >
                          {garantiaText.heading1}
                        </Heading>
                        <Text as={'h2'} textAlign={'center'}>
                          {garantiaText.text1}
                        </Text>
                      </Box>
                    </VStack>
                  </VStack>
                  <VStack
                    align={'center'}
                    py={5}
                    p={5}
                    bgColor={'whiteAlpha.200'}
                    backdropBlur={'1rem'}
                    backdropFilter='blur(5px)'
                    rounded={'lg'}
                    border={'1px'}
                    borderColor={'whiteAlpha.200'}
                    shadow={'lg'}
                    _hover={{
                      bgColor: 'blackAlpha.800',
                      transition: '0.5s ease-in-out',
                      color: 'red.300',
                    }}
                  >
                    <Box px={2}>
                      <Lock size={'4em'} weight={'duotone'} />
                    </Box>
                    <VStack align={'center'}>
                      <Box>
                        <Heading
                          as={'h1'}
                          fontSize={'2xl'}
                          color={'red.300'}
                          textAlign={'center'}
                        >
                          {garantiaText.heading2}
                        </Heading>
                        <Text as={'h2'} textAlign={'center'}>
                          {garantiaText.text2}
                        </Text>
                      </Box>
                    </VStack>
                  </VStack>
                  <VStack
                    align={'center'}
                    py={5}
                    p={5}
                    bgColor={'whiteAlpha.200'}
                    backdropBlur={'1rem'}
                    backdropFilter='blur(5px)'
                    rounded={'lg'}
                    shadow={'lg'}
                    border={'1px'}
                    borderColor={'whiteAlpha.200'}
                    _hover={{
                      bgColor: 'blackAlpha.800',
                      transition: '0.5s ease-in-out',
                      color: 'red.300',
                    }}
                  >
                    <Box px={2}>
                      <Laptop size={'4em'} weight={'duotone'} />
                    </Box>
                    <VStack align={'center'}>
                      <Box>
                        <Heading
                          as={'h1'}
                          fontSize={'2xl'}
                          color={'red.300'}
                          textAlign={'center'}
                        >
                          {garantiaText.heading3}
                        </Heading>
                        <Text as={'h2'} textAlign={'center'}>
                          {garantiaText.text3}
                        </Text>
                      </Box>
                    </VStack>
                  </VStack>
                </SimpleGrid>
              </Flex>
            </Box>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} pt={6}>
              <BotaoHotmart />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
