import { Container, Stack, Flex, Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

export function SobreEspecialista() {
  return (
    <Box bgGradient={'linear(to-tl, gray.900, red.800)'} borderBottom={'1px'}>
      <Container maxW={'7xl'}>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Flex flex={1} justifyContent='center' align='center'>
            <Box p={6}>
              <Stack
                spacing={2}
                w={'full'}
                maxW={'lg'}
                textAlign={{ base: 'center', md: 'left' }}
              >
                <Heading
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  textShadow={'#000 1px 1px'}
                >
                  Raimundo Albuquerque
                </Heading>
                <Text fontSize={{ base: 'sm', lg: 'lg' }} color={'whiteAlpha.800'}>
                  Advogado Criminalista e Militar Professor de Direito Militar, Direito
                  Penal e Processo Penal Doutorando em Direto pela UNESA Mestre em
                  Direito pela UAL|Portugal Autor de livros jurídicos Palestrante,
                  conferencista e colunista jurídico.
                </Text>
                <Text fontSize={{ base: 'sm', lg: 'lg' }} color={'whiteAlpha.800'}>
                  Minhas conquistas foram na carreira Militar por mais de 10 anos
                  Aprovação em concursos públicos militares (MB, EB e PM), como Assessor
                  jurídico no Tribunal Estadual e MPF Docente em instituições de ensino
                  superior e de pós graduação em Direito.
                </Text>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color={'whiteAlpha.800'}>
                  Há mais de 10 anos Professor de cursos preparatórios para concursos e
                  a segunda fase da OAB. Reconhecido nacionalmente e internacionalmente
                  como advogado criminal.
                </Text>
              </Stack>
            </Box>
          </Flex>
          <Flex flex={1} align={'center'} justify={'center'}>
            <Image
              alt='About Albuquerque'
              src={'/img/bgAlbuquerque2.webp'}
              width={700}
              height={700}
              quality={75}
              loading={'lazy'}
            />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
