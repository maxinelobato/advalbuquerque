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
import {
  Detective,
  Brain,
  SpeakerHigh,
  Scales,
  Desktop,
  ShieldCheck,
  Lock,
  Laptop,
} from 'phosphor-react';

export function SectionFour() {
  return (
    <>
      <Box bgGradient={'linear(to-r, gray.900, red.800, transparent 100%)'}>
        <Container maxW={'5xl'}>
          <Stack direction="column" alignItems="center" p={10}>
            <Box p={2}>
              <Flex
                justifyContent={{ base: 'center', md: 'center' }}
                direction={{ base: 'column-reverse', md: 'column' }}
              >
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={[2, 6]}>
                  <VStack
                    align={'center'}
                    py={5}
                    p={5}
                    backdropBlur={'lg'}
                    backdropFilter={'1rem'}
                    bgColor={'whiteAlpha.50'}
                    rounded={'lg'}
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
                          <Text fontSize={'2xl'}>Garantia de 7 Dias</Text>
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
                    backdropBlur={'lg'}
                    backdropFilter={'1rem'}
                    bgColor={'whiteAlpha.50'}
                    rounded={'lg'}
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
                          <Text fontSize={'2xl'}>Pagamento Seguro</Text>
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
                    backdropBlur={'lg'}
                    backdropFilter={'1rem'}
                    bgColor={'whiteAlpha.50'}
                    rounded={'lg'}
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
                          <Text fontSize={'2xl'}>Acesso Imediato</Text>
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
          </Stack>
        </Container>
      </Box>
    </>
  );
}
