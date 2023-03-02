'use client';

import {
  Box,
  Stack,
  VStack,
  Text,
  HStack,
  Container,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ModalOverlay,
  Link,
  Heading,
} from '@chakra-ui/react';
import React from 'react';

export function Footer() {
  const OverlayTwo = () => (
    <ModalOverlay bg='none' backdropFilter='auto' backdropBlur='10px' />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);

  return (
    <Box bgColor={'blackAlpha.800'} shadow='base'>
      <Container maxW={'6xl'}>
        <VStack py={2}>
          <Box p={8}>
            <VStack>
              <Stack justify='center'>
                <Box display='flex' alignItems='center'>
                  <Stack as={Box}>
                    <Text
                      textAlign={'center'}
                      color={'whiteAlpha.700'}
                      fontWeight={'light'}
                      fontSize={'sm'}
                    >
                      ESTE SITE NÃO É do FACEBOOK: Este site não faz parte do site do
                      Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado
                      pelo Facebook de nenhuma maneira. FACEBOOK é comercial
                      independente da FACEBOOK, Inc.
                    </Text>
                    <Text
                      textAlign={'center'}
                      color={'whiteAlpha.700'}
                      fontWeight={'light'}
                      fontSize={'sm'}
                    >
                      A Signature Midia é uma empresa com o objetivo de ajudar
                      profissionais liberais a obterem mais clientes utilizando o poder
                      da internet através de tráfego pago. Não reivindicamos ou
                      declaramos que ao usar nossos métodos, você ganhará dinheiro ou
                      recuperará seu dinheiro. Os depoimentos mostrados são negócios e
                      vão variar com base no seu esforço, no conhecimento que você
                      adquirir e nas forças do mercado que estão além do controle de
                      qualquer pessoa.
                    </Text>
                    <Text
                      textAlign={'center'}
                      color={'whiteAlpha.700'}
                      fontWeight={'light'}
                      fontSize={'sm'}
                    >
                      Nós NÃO compartilharemos seus dados com ninguém. Você pode
                      cancelar sua inscrição a qualquer momento. Ao adquirir o curso
                      você está concordando com a nossa
                    </Text>
                    <Stack
                      spacing={{ base: 4, sm: 6 }}
                      direction={{ base: 'column', md: 'row' }}
                      justify={'center'}
                      pt={5}
                    >
                      <Button
                        variant={'unstyled'}
                        maxW={'sm'}
                        size={'sm'}
                        style={{ textDecoration: 'none' }}
                        onClick={() => {
                          setOverlay(<OverlayTwo />);
                          onOpen();
                        }}
                        textAlign={'center'}
                        color={'red.400'}
                        fontWeight={'light'}
                        fontSize={'sm'}
                      >
                        Política de Privacidade
                      </Button>
                    </Stack>

                    <Modal
                      isCentered
                      isOpen={isOpen}
                      onClose={onClose}
                      scrollBehavior='inside'
                      size={'xl'}
                    >
                      {overlay}
                      <ModalContent
                        bgColor={'blackAlpha.900'}
                        backdropBlur={'1rem'}
                        backdropFilter='blur(5px)'
                        border={'1px'}
                        borderColor={'whiteAlpha.200'}
                      >
                        <ModalHeader color={'red.400'}>
                          Política de Privacidade
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <Text textAlign={'left'}>
                            A sua privacidade é importante para nós. É política da
                            Signature Midia respeitar a sua privacidade em relação a
                            qualquer informação sua que possamos coletar no site Prática
                            em Audiências Criminais, e outros sites que possuímos e
                            operamos.
                          </Text>
                          <Text textAlign={'left'}>
                            Solicitamos informações pessoais apenas quando realmente
                            precisamos delas para lhe fornecer um serviço. Fazemos por
                            meios justos e legais, com o seu conhecimento e
                            consentimento. Também informamos por que estamos coletando e
                            como será usado.
                          </Text>
                          <Text textAlign={'left'}>
                            Apenas retemos as informações coletadas pelo tempo
                            necessário para fornecer o serviço solicitado.
                          </Text>
                          <Text textAlign={'left'}>
                            Quando armazenamos dados, protegemos dentro de meios
                            comercialmente aceitáveis para evitar perdas e roubos, bem
                            como acesso, divulgação, cópia, uso ou modificação não
                            autorizados.
                          </Text>
                          <Text textAlign={'left'}>
                            Não compartilhamos informações de identificação pessoal
                            publicamente ou com terceiros, exceto quando exigido por
                            lei.
                          </Text>
                          <Text textAlign={'left'}>
                            O nosso site pode ter links para sites externos que não são
                            operados por nós. Esteja ciente de que não temos controle
                            sobre o conteúdo e práticas desses sites e não podemos
                            aceitar responsabilidade por suas respectivas políticas de
                            privacidade.
                          </Text>
                          <Text textAlign={'left'}>
                            Você é livre para recusar a nossa solicitação de informações
                            pessoais, entendendo que talvez não possamos fornecer alguns
                            dos serviços desejados.
                          </Text>
                          <Text textAlign={'left'}>
                            O uso continuado de nosso site será considerado como
                            aceitação de nossas práticas em torno de privacidade e
                            informações pessoais. Se você tiver alguma dúvida sobre como
                            lidamos com dados do usuário e informações pessoais, entre
                            em contacto connosco.
                          </Text>
                          <Heading
                            pt={4}
                            textAlign={'left'}
                            fontSize={'lg'}
                            fontWeight={'medium'}
                            color={'red.400'}
                          >
                            Compromisso do Usuário
                          </Heading>
                          <Text textAlign={'left'} pt={4}>
                            O usuário se compromete a fazer uso adequado dos conteúdos e
                            da informação que a Prática em Audiências Criminais oferece
                            no site e com caráter enunciativo, mas não limitativo:
                          </Text>
                          <Text textAlign={'left'} pt={4}>
                            I. Não se envolver em atividades que sejam ilegais ou
                            contrárias à boa fé a à ordem pública;
                          </Text>
                          <Text textAlign={'left'}>
                            II. Não difundir propaganda ou conteúdo de natureza racista,
                            xenofóbica, ou salmao, apostas desportivas (ex.: Bet.pt),
                            jogos de sorte e azar, qualquer tipo de pornografia ilegal,
                            de apologia ao terrorismo ou contra os direitos humanos;
                          </Text>
                          <Text textAlign={'left'}>
                            III. Não causar danos aos sistemas físicos (hardwares) e
                            lógicos (softwares) da Prática em Audiências Criminais, de
                            seus fornecedores ou terceiros, para introduzir ou
                            disseminar vírus informáticos ou quaisquer outros sistemas
                            de hardware ou software que sejam capazes de causar danos
                            anteriormente mencionados.
                          </Text>
                          <Heading
                            pt={4}
                            textAlign={'left'}
                            fontSize={'lg'}
                            fontWeight={'medium'}
                            color={'red.400'}
                          >
                            Mais informações
                          </Heading>
                          <Text textAlign={'left'} pt={4}>
                            Esperemos que esteja esclarecido e, como mencionado
                            anteriormente, se houver algo que você não tem certeza se
                            precisa ou não, geralmente é mais seguro deixar os cookies
                            ativados, caso interaja com um dos recursos que você usa em
                            nosso site. Esta política é efetiva a partir de Março/2023.
                          </Text>
                        </ModalBody>
                        <ModalFooter justifyContent={'center'}>
                          <Button
                            rounded={'full'}
                            onClick={onClose}
                            bg={'red.700'}
                            color={'whiteAlpha.900'}
                            _hover={{
                              bg: 'red.900',
                              color: 'whiteAlpha.700',
                              transition: '0.5s',
                            }}
                          >
                            Fechar
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </Stack>
                </Box>
              </Stack>
            </VStack>
          </Box>
          <VStack>
            <HStack justify='center' pb={4}>
              <Text
                as={Link}
                textAlign='center'
                fontSize='smaller'
                color='whiteAlpha.700'
                fontWeight='bold'
                href={'https://www.instagram.com/signature.midia/'}
                style={{ textDecoration: 'none' }}
                isExternal
              >
                Copyright &copy; Signature Mídia | 2023. Todos os Direitos Reservados.
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
