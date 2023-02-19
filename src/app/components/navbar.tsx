'use client';
import { Box, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export function Navbar() {
  return (
    <>
      <Box
        w="full"
        h={20}
        bgGradient={'linear(to-r, transparent 20%, blackAlpha.900, transparent 80%)'}
      >
        <VStack p={4} alignContent={'center'}>
          <Image
            src={'/img/logo_albuquerque.svg'}
            alt={'Image Albuquerque'}
            width={40}
            height={40}
            priority
          />
        </VStack>
      </Box>
    </>
  );
}
