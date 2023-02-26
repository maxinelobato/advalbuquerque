'use client';

import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Icon,
  IconProps,
  Container,
} from '@chakra-ui/react';
import { ButtonCta } from './buttoncta';
import { ButtonPlay } from './buttonplay';
import { NavbarProm } from './navbarprom';
import { VideoAdv } from './videoadv';

export function SectionOne() {
  return (
    <>
      <Box bgGradient={'linear(to-r, gray.900, red.800, transparent)'}>
        <NavbarProm />
        <Container maxW={'7xl'}>
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: 'column-reverse', md: 'row' }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 5 }} zIndex={3}>
              <Heading
                fontWeight={900}
                fontStyle={'normal'}
                fontFamily={'roboto'}
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                textAlign={{ base: 'center', md: 'left', lg: 'left' }}
                textTransform={'uppercase'}
              >
                Prática em Audiências Criminais
              </Heading>
              <Text
                fontWeight={400}
                fontFamily={'roboto'}
                fontSize={{ base: 'lg', md: '2xs', lg: '2xl' }}
                textAlign={{ base: 'center', md: 'left', lg: 'left' }}
                color={'whiteAlpha.800'}
              >
                Saiba como usar as melhores técnicas de interrogatório, raciocínio
                lógico jurídico e técnicas de persuasão.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', md: 'row' }}
              >
                <ButtonCta />
                <ButtonPlay />
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}
            >
              <Blob
                w={'100%'}
                h={'150%'}
                position={'absolute'}
                top={'-20%'}
                left={0}
                color={useColorModeValue('blackAlpha.50', 'blackAlpha.800')}
                zIndex={1}
              />
              <Box
                position={'relative'}
                rounded={'lg'}
                width={'full'}
                overflow={'hidden'}
                zIndex={1}
                style={{ filter: 'drop-shadow(0 0 0.75rem #fff)' }}
              >
                <VideoAdv />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
