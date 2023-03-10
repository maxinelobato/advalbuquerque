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

const testimonial: TestimonialAttributes = {
  username: 'Aluno',
  position: 'Bacharel em Direito',
  image: '/img/bgAlbuquerque2.webp',
  content: `Depoimento`,
};

export function ProvaSocialAlunos() {
  return (
    <>
      <Box bgColor={'gray.900'}>
        <Container maxW='6xl' p={{ base: 5, md: 12 }}>
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
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={[4, 0]}>
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
              maxW='25rem'
              margin='0 auto'
              boxShadow='lg'
            >
              <Icon as={Quotes} weight={'fill'} w={8} h={8} color='red.400' />
              <Text p={5} color='gray.500'>
                {testimonial.content}
              </Text>
              <VStack alignItems='center'>
                <Avatar name='avatar' src={testimonial.image} size='lg' />
                <Box textAlign='center'>
                  <Text fontWeight='bold' fontSize='lg'>
                    {testimonial.username}
                  </Text>
                  <Text fontSize='md' color='gray.500'>
                    {testimonial.position}
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
              maxW='25rem'
              margin='0 auto'
              boxShadow='lg'
            >
              <Icon as={Quotes} weight={'fill'} w={8} h={8} color='red.400' />
              <Text p={5} color='gray.500'>
                {testimonial.content}
              </Text>
              <VStack alignItems='center'>
                <Avatar name='avatar' src={testimonial.image} size='lg' />
                <Box textAlign='center'>
                  <Text fontWeight='bold' fontSize='lg'>
                    {testimonial.username}
                  </Text>
                  <Text fontSize='md' color='gray.500'>
                    {testimonial.position}
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
              maxW='25rem'
              margin='0 auto'
              boxShadow='lg'
            >
              <Icon as={Quotes} weight={'fill'} w={8} h={8} color='red.400' />
              <Text p={5} color='gray.500'>
                {testimonial.content}
              </Text>
              <VStack alignItems='center'>
                <Avatar name='avatar' src={testimonial.image} size='lg' />
                <Box textAlign='center'>
                  <Text fontWeight='bold' fontSize='lg'>
                    {testimonial.username}
                  </Text>
                  <Text fontSize='md' color='gray.500'>
                    {testimonial.position}
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
              maxW='25rem'
              margin='0 auto'
              boxShadow='lg'
            >
              <Icon as={Quotes} weight={'fill'} w={8} h={8} color='red.400' />
              <Text p={5} color='gray.500'>
                {testimonial.content}
              </Text>
              <VStack alignItems='center'>
                <Avatar name='avatar' src={testimonial.image} size='lg' />
                <Box textAlign='center'>
                  <Text fontWeight='bold' fontSize='lg'>
                    {testimonial.username}
                  </Text>
                  <Text fontSize='md' color='gray.500'>
                    {testimonial.position}
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
