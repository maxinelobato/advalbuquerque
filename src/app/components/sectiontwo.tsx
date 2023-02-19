'use client';

import { Box, Container, Heading, Highlight, Stack, Text } from '@chakra-ui/react';
import { SectionThree } from './sectionthree';

export function SectionTwo() {
  return (
    <>
      <Box bgColor={'gray.900'}>
        <Container maxW={'5xl'}>
          <Stack direction="column" alignItems="center" p={10}>
            <Heading
              as={'h3'}
              fontSize={{ base: 'lg', md: 'lg', lg: '2xl' }}
              fontWeight={500}
              textAlign={'center'}
              fontFamily={'roboto'}
              lineHeight={'tall'}
            >
              <Highlight
                query={['preparar', 'audiências criminais', 'presencial', 'virtual']}
                styles={{ px: '1', py: '1', bg: 'red.900', color: 'whiteAlpha.900' }}
              >
                O curso prático de audiência criminal terá como objetivo demonstrar ao
                aluno como se preparar para audiências criminais seja presencial ou
                virtual.
              </Highlight>
              <br />
              <Highlight
                query={['tática à prática', 'expert']}
                styles={{ px: '1', py: '1', bg: 'red.900', color: 'whiteAlpha.900' }}
              >
                O curso será literalmente da tática à prática. O aluno terá todo o
                aporte teórico para que possa ser um expert na atuação da advocacia
                criminal e construir sua teses defensiva assim que entrar em um caso.
              </Highlight>
              <br />
              <Highlight
                query={[
                  'experiência comprovada',
                  'atuação em todo o território nacional',
                  '5 módulos',
                ]}
                styles={{ px: '1', py: '1', bg: 'red.900', color: 'whiteAlpha.900' }}
              >
                As aulas todas serão produzidas pelo Professor Raimundo Albuquerque com
                experiência comprovada e atuação em todo o território nacional, o que
                mostra a sua versatilidade para advogar em qualquer lugar e em qualquer
                condição. teremos no mínimo 5 módulos.
              </Highlight>
            </Heading>
          </Stack>
          <SectionThree />
        </Container>
      </Box>
    </>
  );
}
