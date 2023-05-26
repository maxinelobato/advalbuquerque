'use client';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Stack,
  Container,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Icon,
} from '@chakra-ui/react';

import { ReactElement } from 'react';
import {
  NumberEight,
  NumberFive,
  NumberFour,
  NumberNine,
  NumberOne,
  NumberSeven,
  NumberSix,
  NumberThree,
  NumberTwo,
} from 'phosphor-react';

interface FeatureProps {
  text: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Stack direction='row' align='center' justifyContent='left'>
      <Flex w={10} h={10} align='center' justify='left' rounded='full'>
        {icon}
      </Flex>
      <Text fontWeight={600} align='left'>
        {text}
      </Text>
    </Stack>
  );
};

export function DuvidasFrequentes() {
  const textDuvidas = {
    textduvidas1:
      'Clique no botão “Quero aprender!” e você será direcionado para uma página de confirmação da Hotmart. A plataforma é 100% segura e confiável. Você deverá incluir as informações para pagamento (por meio de boleto, cartão de crédito, pix ou demais opções) e concluir a sua inscrição.',
    textduvidas2:
      ' As aulas serão online e também 100% gravadas e disponibilizadas na plataforma do curso. Além disso, o Curso possui aulas de Social Mídia e Gestão de Tráfego exclusivo para advogados iniciantes.',
    textduvidas3:
      'O aluno receberá um e-mail da plataforma Hotmart informando que a compra está confirmada e, abaixo dos dados, haverá um botão escrito “ACESSAR MEU PRODUTO”. Clicando nele, abrirá uma página solicitando que você crie um login e senha para acessar as aulas e materiais do Curso Prática em Audiências Criminais.',
    textduvidas4:
      'O aluno terá 12 meses de assinatura ao Curso e não há limite de visualizações, ou seja, é possível assistir quantas vezes quiser, seja pelo celular ou pelo computador.',
    textduvidas5:
      'Sim. O Curso Prática em Audiências Criminais possui Certificado de Conclusão em 72h, que será disponibilizado aos alunos conforme a conclusão das aulas.',
    textduvidas6:
      'Porque é um Curso focado na visão de negócios da advocacia – você finalmente vai aprender a se preparar para uma audiência criminal seja presencial ou online, táticas e práticas dos seus serviços como técnicas de interrogatório, raciocínio lógico, técnicas de persuasão. Fora isso, o Curso Prática em Audiências Criminais já conta com vários membros cujos resultados se comprovam a cada dia.',
    textduvidas7:
      ' Não. Entre nossos cases de sucesso, temos diversos profissionais em início de carreira e com pouca ou nenhuma experiência prévia.',
    textduvidas8:
      'Diversos advogados experientes já fizeram parte do Curso, alçando resultados ainda melhores simplesmente porque apresentamos estratégias práticas, eficientes e avançadas.',
    textduvidas9:
      'Os novos alunos matriculados no Curso de Prática em Audiências Criminais têm 7 dias para testar. Isso permite que eles tenham acesso ao curso e possam viver toda a experiência entregue pelo curso. Dentro desses 7 dias, caso o aluno não goste do Curso ou não enxergue que é entregue um valor muito maior do que o preço que ele pagou, ele poderá enviar uma mensagem para o nosso suporte e ter o reembolso do preço integral do curso, sem perguntas, sem ressentimentos… simples assim.',
  };

  return (
    <Box bgGradient={'linear(to-bl, gray.900, red.800)'}>
      <Container maxW='5xl' py={6} as={Stack} spacing={12}>
        <Heading
          fontWeight={'medium'}
          fontStyle={'normal'}
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          textAlign={'center'}
        >
          Dúvidas Frequentes
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 1 }} spacing={{ base: 1, lg: 6 }}>
          <Container maxW={'5xl'}>
            <Box position='relative'>
              <Accordion allowToggle reduceMotion>
                <AccordionItem mt={4}>
                  <h2>
                    <AccordionButton>
                      <Box flex='1'>
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={NumberOne} w={8} h={8} weight='fill' />}
                            text={'Como posso me inscrever?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Box>
                      <Text textAlign='justify'>{textDuvidas.textduvidas1}</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='center'>
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={NumberTwo} w={8} h={8} weight='fill' />}
                            text={'As aulas do curso são online?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Box>
                      <Text textAlign='justify'>{textDuvidas.textduvidas2}</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='center'>
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={NumberThree} w={8} h={8} weight='fill' />}
                            text={'Quando vou receber o acesso?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Box>
                      <Text textAlign='justify'>{textDuvidas.textduvidas3}</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='center'>
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={NumberFour} w={8} h={8} weight='fill' />}
                            text={'Quanto tempo de assinatura?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Box>
                      <Text textAlign='justify'>{textDuvidas.textduvidas4}</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='center'>
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={NumberFive} w={8} h={8} weight='fill' />}
                            text={'O curso possui certificado?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Box>
                      <Text textAlign='justify'>{textDuvidas.textduvidas5}</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='center'>
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={NumberSix} w={8} h={8} weight='fill' />}
                            text={
                              'Por que o Curso de Prática em Audiências Criminais é diferente de qualquer outro curso?'
                            }
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Box>
                      <Text textAlign='justify'>{textDuvidas.textduvidas6}</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='center'>
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={NumberSeven} w={8} h={8} weight='fill' />}
                            text={'Precisa ter alguma experiência pra fazer o Curso?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Box>
                      <Text textAlign='justify'>{textDuvidas.textduvidas7}</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='center'>
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={NumberEight} w={8} h={8} weight='fill' />}
                            text={
                              'Já tenho muita experiência na Advocacia. O Curso é pra mim?'
                            }
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Box>
                      <Text textAlign='justify'>{textDuvidas.textduvidas8}</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex='1' textAlign='center'>
                        <Stack spacing={2}>
                          <Feature
                            icon={<Icon as={NumberNine} w={8} h={8} weight='fill' />}
                            text={'O curso oferece garantia?'}
                          />
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Box>
                      <Text textAlign='justify'>{textDuvidas.textduvidas9}</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Container>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
