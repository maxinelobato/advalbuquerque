'use client';

import { Container, Stack, Flex, Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

export function SobreEspecialista() {
  const textHeading = {
    heading1: 'Raimundo Albuquerque',
    heading2:
      'Advogado Criminalista e Militar Professor de Direito Militar, Direito Penal e Processo Penal Doutorando em Direto pela UNESA Mestre em Direito pela UAL|Portugal Autor de livros jurídicos, palestrante, conferencista e colunista jurídico.',
    heading3:
      'Minhas conquistas foram na carreira Militar por mais de 10 anos, aprovação em concursos públicos militares (MB, EB e PM), assessor jurídico no Tribunal Estadual e MPF Docente em instituições de ensino superior e de pós graduação em Direito.',
    heading4:
      'Há mais de 10 anos professor de cursos preparatórios para concursos e a segunda fase da OAB. Reconhecido nacionalmente e internacionalmente como advogado criminal.',
  };
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
                  {textHeading.heading1}
                </Heading>
                <Text fontSize={{ base: 'sm', lg: 'lg' }} color={'whiteAlpha.800'}>
                  {textHeading.heading2}
                </Text>
                <Text fontSize={{ base: 'sm', lg: 'lg' }} color={'whiteAlpha.800'}>
                  {textHeading.heading3}
                </Text>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color={'whiteAlpha.800'}>
                  {textHeading.heading4}
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
