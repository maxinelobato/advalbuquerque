'use client';

import { Box, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export function Navbar() {
  return (
    <>
      <Box
        w="full"
        h={20}
        bgGradient={'linear(to-r, transparent 20%, gray.900, transparent 80%)'}
      >
        <VStack p={4} alignContent={'center'}>
          <Image
            src={'/img/logo.png'}
            alt={'Logo Albuquerque'}
            width={40}
            height={40}
            quality={75}
            priority
          />
        </VStack>
      </Box>
    </>
  );
}
