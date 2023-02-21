'user client';

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
import { ButtonCta } from './buttoncta';

export function SectionFour() {
  return (
    <>
      <Box bgGradient={'linear(to-r, gray.900, red.800, transparent 100%)'}>
        <Container maxW={'5xl'}>
          <Stack direction="column" alignItems="center" p={8}>
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
                    backdropFilter="blur(5px)"
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
                          fontSize={{ base: 'sm', md: 'lg' }}
                          textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                        >
                          <Text fontSize={'2xl'} color={'red.300'}>
                            Garantia de 7 Dias
                          </Text>
                          <Text fontWeight={'normal'} as="span">
                            Nesse prazo, se o curso não for o que esperava, é só pedir
                            seu investimento de volta.
                          </Text>
                        </Heading>
                      </Box>
                    </VStack>
                  </VStack>
                  <VStack
                    align={'center'}
                    py={5}
                    p={5}
                    bgColor={'whiteAlpha.200'}
                    backdropBlur={'1rem'}
                    backdropFilter="blur(5px)"
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
                          fontSize={{ base: 'sm', md: 'lg' }}
                          textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                        >
                          <Text fontSize={'2xl'} color={'red.300'}>
                            Pagamento Seguro
                          </Text>
                          <Text fontWeight={'normal'} as="span">
                            A sua compra é 100% segura e todos os seus dados são
                            protegidos.
                          </Text>
                        </Heading>
                      </Box>
                    </VStack>
                  </VStack>
                  <VStack
                    align={'center'}
                    py={5}
                    p={5}
                    bgColor={'whiteAlpha.200'}
                    backdropBlur={'1rem'}
                    backdropFilter="blur(5px)"
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
                      <Laptop size={'4em'} weight={'duotone'} />
                    </Box>
                    <VStack align={'center'}>
                      <Box>
                        <Heading
                          fontSize={{ base: 'sm', md: 'lg' }}
                          textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                        >
                          <Text fontSize={'2xl'} color={'red.300'}>
                            Acesso Imediato
                          </Text>
                          <Text fontWeight={'normal'} as="span">
                            Assim que seu pagamento for processado, você terá acesso
                            imediato ao conteúdo do curso.
                          </Text>
                        </Heading>
                      </Box>
                    </VStack>
                  </VStack>
                </SimpleGrid>
              </Flex>
            </Box>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} pt={6}>
              <ButtonCta />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
