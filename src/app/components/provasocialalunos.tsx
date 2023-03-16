'use client';

import {
  Container,
  Text,
  Avatar,
  Icon,
  Box,
  Flex,
  VStack,
  SimpleGrid,
  Heading,
} from '@chakra-ui/react';
import { Quotes } from 'phosphor-react';
interface TestimonialAttributes {
  username: string;
  position: string;
  content: string;
  image: string;
}

const testimonial1: TestimonialAttributes = {
  username: 'Cláudia Fernandes',
  position: 'Bacharel em Direito',
  image: '',
  content: `Obrigada! Eu me encanto com esses temas a partir de sua explicação, porque consigo compreendê-los e até correlacioná-los a outras situações que passo a compreender.`,
};

const testimonial2: TestimonialAttributes = {
  username: 'Cesar Alencar',
  position: 'Bacharel em Direito',
  image: '',
  content: `Curso maravilhoso!!`,
};

const testimonial3: TestimonialAttributes = {
  username: 'Valdesiane Lucena',
  position: 'Bacharel em Direito',
  image: '',
  content: `Que curso dos Deuses, muito prazeroso, aprendi muito o professor ministra curso de uma forma que não deixa a desejar, adorei e já estou pronta prós próximos viu professor!`,
};

export function ProvaSocialAlunos() {
  return (
    <>
      <Box bgColor={'gray.900'}>
        <Container maxW='6xl' p={{ base: 5, md: 10 }}>
          <Flex justify='center' mb={12}>
            <Heading
              as={'h1'}
              fontWeight={'medium'}
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              textAlign={'center'}
            >
              Depoimento dos Alunos
            </Heading>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={[4, 6]}>
            <VStack
              spacing={3}
              p={{ base: 4, sm: 8 }}
              bgColor={'whiteAlpha.100'}
              backdropBlur={'1rem'}
              backdropFilter='blur(5px)'
              rounded={'lg'}
              shadow={'dark-lg'}
              borderTop='2px solid'
              borderColor='red.400'
              borderBottomLeftRadius='lg'
              borderBottomRightRadius='lg'
              maxW='lg'
              margin={0}
              boxShadow='lg'
            >
              <Icon as={Quotes} weight={'fill'} w={8} h={8} color='red.400' />
              <Text p={5} color='whiteAlpha.900' textAlign={'center'}>
                {testimonial1.content}
              </Text>
              <VStack alignItems='center'>
                <Box rounded={'full'} overflow={'hidden'}>
                  <Avatar
                    bg={'red.400'}
                    name={'Cláudia Fernandes'}
                    src={testimonial1.image}
                    width={50}
                    height={50}
                    loading={'lazy'}
                  />
                </Box>
                <Box textAlign='center'>
                  <Text fontWeight='bold' fontSize='lg'>
                    {testimonial1.username}
                  </Text>
                  <Text fontSize='md' color='red.400'>
                    {testimonial1.position}
                  </Text>
                </Box>
              </VStack>
            </VStack>
            <VStack
              spacing={3}
              p={{ base: 4, sm: 8 }}
              bgColor={'whiteAlpha.100'}
              backdropBlur={'1rem'}
              backdropFilter='blur(5px)'
              rounded={'lg'}
              shadow={'dark-lg'}
              borderTop='2px solid'
              borderColor='red.400'
              borderBottomLeftRadius='lg'
              borderBottomRightRadius='lg'
              maxW='lg'
              margin={0}
              boxShadow='lg'
            >
              <Icon as={Quotes} weight={'fill'} w={8} h={8} color='red.400' />
              <Text p={5} color='whiteAlpha.900' textAlign={'center'}>
                {testimonial2.content}
              </Text>
              <VStack alignItems='center'>
                <Box rounded={'full'} overflow={'hidden'}>
                  <Avatar
                    bg={'red.400'}
                    name={'Cesar Alencar'}
                    src={testimonial2.image}
                    width={50}
                    height={50}
                    loading={'lazy'}
                  />
                </Box>
                <Box textAlign='center'>
                  <Text fontWeight='bold' fontSize='lg'>
                    {testimonial2.username}
                  </Text>
                  <Text fontSize='md' color='red.400'>
                    {testimonial2.position}
                  </Text>
                </Box>
              </VStack>
            </VStack>
            <VStack
              spacing={3}
              p={{ base: 4, sm: 8 }}
              bgColor={'whiteAlpha.100'}
              backdropBlur={'1rem'}
              backdropFilter='blur(5px)'
              rounded={'lg'}
              shadow={'dark-lg'}
              borderTop='2px solid'
              borderColor='red.400'
              borderBottomLeftRadius='lg'
              borderBottomRightRadius='lg'
              maxW='lg'
              margin={0}
              boxShadow='lg'
            >
              <Icon as={Quotes} weight={'fill'} w={8} h={8} color='red.400' />
              <Text p={5} color='whiteAlpha.900' textAlign={'center'}>
                {testimonial3.content}
              </Text>
              <VStack alignItems='center'>
                <Box rounded={'full'} overflow={'hidden'}>
                  <Avatar
                    bg={'red.400'}
                    name={'Valdesiane Lucena'}
                    src={testimonial3.image}
                    width={50}
                    height={50}
                    loading={'lazy'}
                  />
                </Box>
                <Box textAlign='center'>
                  <Text fontWeight='bold' fontSize='lg'>
                    {testimonial3.username}
                  </Text>
                  <Text fontSize='md' color='red.400'>
                    {testimonial3.position}
                  </Text>
                </Box>
              </VStack>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
