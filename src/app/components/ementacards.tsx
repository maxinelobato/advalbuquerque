import { Flex, Box, Image, Badge, BoxProps } from '@chakra-ui/react';

const modulos = {
  isNew: true,
  imageURL0: '/img/aula1.webp',
  imageURL1: '/img/aula1.webp',
  imageURL2: '/img/aula2.webp',
  imageURL3: '/img/aula3.webp',
  imageURL31: '/img/aula3.webp',
  imageURL4: '/img/aula4.webp',
  imageURL5: '/img/aula5.webp',
  modulo0: 'Módulo Boas Vindas',
  modulo1: 'Módulo 1',
  modulo2: 'Módulo 2',
  modulo3: 'Módulo 3',
  modulo31: 'Módulo 4',
  modulo4: 'Módulo 5',
  modulo5: 'Módulo 6',
};

function BoxStyle(props: BoxProps) {
  return (
    <Box
      width={300}
      height={280}
      maxW={'lg'}
      borderWidth={'1px'}
      rounded={'lg'}
      shadow={'lg'}
      position={'relative'}
      bgColor={'blackAlpha.600'}
      backdropBlur={'1rem'}
      backdropFilter='blur(5px)'
      border={'1px'}
      borderColor={'whiteAlpha.200'}
      {...props}
    />
  );
}

function BoxStyleLegend(props: BoxProps) {
  return (
    <Box
      fontSize={{ base: 'sm', md: 'lg' }}
      fontWeight={'semibold'}
      as={'h4'}
      lineHeight={'tall'}
      {...props}
    />
  );
}

export function EmentaCards() {
  return (
    <>
      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL0}
            alt={`Picture of ${modulos.modulo0}`}
            roundedTop='lg'
            width={'20rem'}
            height={'11rem'}
          />

          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
                  {modulos.modulo0}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <BoxStyleLegend>
                Bem vindos ao curso de Prática em Audiências Criminais
              </BoxStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>

      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL1}
            alt={`Picture of ${modulos.modulo1}`}
            roundedTop='lg'
            width={'20rem'}
            height={'11rem'}
          />
          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
                  {modulos.modulo1}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <BoxStyleLegend>O processo penal e seus procedimentos</BoxStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>

      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL2}
            alt={`Picture of ${modulos.modulo2}`}
            roundedTop='lg'
            width={'20rem'}
            height={'11rem'}
          />
          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
                  {modulos.modulo2}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <BoxStyleLegend>
                Procedimento Comum Ordinário e suas características
              </BoxStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>

      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL3}
            alt={`Picture of ${modulos.modulo3}`}
            roundedTop='lg'
            width={'20rem'}
            height={'11rem'}
          />
          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
                  {modulos.modulo3}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <BoxStyleLegend>
                Noções Básicas de Técnica de Persuasão Parte I
              </BoxStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>

      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL31}
            alt={`Picture of ${modulos.modulo31}`}
            roundedTop='lg'
            width={'20rem'}
            height={'11rem'}
          />
          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
                  {modulos.modulo31}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <BoxStyleLegend>Noções Básicas de Técnica de Persuasão II</BoxStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>

      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL4}
            alt={`Picture of ${modulos.modulo4}`}
            roundedTop='lg'
            width={'20rem'}
            height={'11rem'}
          />
          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
                  {modulos.modulo4}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <BoxStyleLegend>Noções básicas de interrogatório</BoxStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>

      <Flex w='full' alignItems='center' justifyContent='center'>
        <BoxStyle>
          <Image
            src={modulos.imageURL5}
            alt={`Picture of ${modulos.modulo5}`}
            roundedTop='lg'
            width={'20rem'}
            height={'11rem'}
          />
          <Box p='4'>
            <Box display='flex' alignItems='baseline'>
              {modulos.isNew && (
                <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
                  {modulos.modulo5}
                </Badge>
              )}
            </Box>
            <Flex mt='1' justifyContent='center' alignContent='center'>
              <BoxStyleLegend>Investigação criminal defensiva</BoxStyleLegend>
            </Flex>
          </Box>
        </BoxStyle>
      </Flex>
    </>
  );
}
