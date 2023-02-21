import {
  Box,
  Stack,
  Container,
  Heading,
  Text,
  Flex,
  IconButton,
  SimpleGrid,
} from '@chakra-ui/react';
import Image from 'next/image';
import { GraduationCap, Play, PlayCircle } from 'phosphor-react';

export function SectionSix() {
  return (
    <>
      <Box bgGradient={'linear(to-bl, gray.900, red.800)'}>
        <Stack direction={{ base: 'column', md: 'row' }} p={6}>
          <Container maxW={'5xl'}>
            <Stack spacing={6} w={'full'} p={6}>
              <Heading
                as={'h1'}
                fontWeight={900}
                fontStyle={'normal'}
                fontFamily={'roboto'}
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                textAlign={'center'}
              >
                Aulas Bônus
                <Text
                  as={'h2'}
                  fontWeight={400}
                  fontFamily={'roboto'}
                  fontSize={{ base: 'lg', md: '2xs', lg: '2xl' }}
                  textAlign={'center'}
                  color={'whiteAlpha.800'}
                >
                  Conteúdo adicional de Social Mídia e Tráfego Pago
                </Text>
              </Heading>
            </Stack>
            <Stack direction="column" alignItems="center" p={6}>
              <Box>
                <Flex
                  justifyContent={{ base: 'center', md: 'center' }}
                  direction={{ base: 'column-reverse', md: 'column' }}
                >
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={[2, 6]}>
                    <Box
                      position={'relative'}
                      height={'300px'}
                      width={'full'}
                      overflow={'hidden'}
                      bgColor={'whiteAlpha.200'}
                      backdropBlur={'1rem'}
                      backdropFilter="blur(5px)"
                      rounded={'lg'}
                      border={'1px'}
                      borderColor={'whiteAlpha.200'}
                      shadow={'lg'}
                    >
                      <IconButton
                        aria-label={'Play Button'}
                        variant={'ghost'}
                        _hover={{ bg: 'transparent' }}
                        icon={<PlayCircle size={64} weight={'fill'} />}
                        size={'lg'}
                        color={'white'}
                        position={'absolute'}
                        left={'50%'}
                        top={'50%'}
                        transform={'translateX(-50%) translateY(-50%)'}
                      />
                      <Image
                        alt={'Hero Image'}
                        style={{ objectFit: 'cover' }}
                        width={600}
                        height={600}
                        src={'/img/bgAlbuquerque2.png'}
                      />
                    </Box>
                    <Box
                      position={'relative'}
                      height={'300px'}
                      width={'full'}
                      overflow={'hidden'}
                      bgColor={'whiteAlpha.200'}
                      backdropBlur={'1rem'}
                      backdropFilter="blur(5px)"
                      rounded={'lg'}
                      border={'1px'}
                      borderColor={'whiteAlpha.200'}
                      shadow={'lg'}
                    >
                      <IconButton
                        aria-label={'Play Button'}
                        variant={'ghost'}
                        _hover={{ bg: 'transparent' }}
                        icon={<PlayCircle size={64} weight={'fill'} />}
                        size={'lg'}
                        color={'white'}
                        position={'absolute'}
                        left={'50%'}
                        top={'50%'}
                        transform={'translateX(-50%) translateY(-50%)'}
                      />
                      <Image
                        alt={'Hero Image'}
                        style={{ objectFit: 'cover' }}
                        width={600}
                        height={600}
                        src={'/img/bgAlbuquerque2.png'}
                      />
                    </Box>
                  </SimpleGrid>
                </Flex>
              </Box>
            </Stack>
            <Stack spacing={6} w={'full'} p={6}>
              <Heading
                as={'h1'}
                fontWeight={900}
                fontStyle={'normal'}
                fontFamily={'roboto'}
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                textAlign={'center'}
              >
                Bônus Exclusivo
                <Text
                  as={'h2'}
                  fontWeight={400}
                  fontFamily={'roboto'}
                  fontSize={{ base: 'lg', md: '2xs', lg: '2xl' }}
                  textAlign={'center'}
                  color={'whiteAlpha.800'}
                >
                  Você ganha um E-book sobre como é a acareação no processo penal
                </Text>
              </Heading>
            </Stack>
            <Stack direction="column" alignItems="center" p={6}>
              <Box>
                <Flex
                  justifyContent={{ base: 'center', md: 'center' }}
                  direction={{ base: 'column-reverse', md: 'column' }}
                >
                  <SimpleGrid columns={{ base: 1, md: 1 }} spacing={[2, 6]}>
                    <Box
                      overflow={'hidden'}
                      css={{ filter: 'drop-shadow(0 0 1rem rgb(0,0,0))' }}
                    >
                      <Image
                        alt={'Hero Image'}
                        style={{ objectFit: 'cover' }}
                        width={300}
                        height={500}
                        src={'/img/ebook.png'}
                      />
                    </Box>
                  </SimpleGrid>
                </Flex>
              </Box>
            </Stack>
          </Container>
        </Stack>
      </Box>
    </>
  );
}
