'use client';
import { Box, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export function Navbar() {
  return (
    <>
      <Box
        w="full"
        h={28}
        bgGradient={'linear(to-r, transparent 20%, blackAlpha.900, transparent 80%)'}
      >
        <VStack p={3} alignContent={'center'}>
          <Image
            src={'/img/logo_albuquerque.svg'}
            alt={'Image Albuquerque'}
            width={50}
            height={50}
            priority
          />
          <Text
            as={'h1'}
            color={'red.600'}
            fontFamily={'Roboto'}
            fontSize={'lg'}
            textTransform={'uppercase'}
            textAlign={'center'}
          >
            albuquerque
          </Text>
        </VStack>
      </Box>
    </>
  );
}
