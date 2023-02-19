'use client';

import { Button } from '@chakra-ui/react';

export function ButtonCta() {
  return (
    <>
      <Button
        rounded={'full'}
        size={'lg'}
        bg={'blackAlpha.900'}
        color={'whiteAlpha.900'}
        shadow={'dark-lg'}
        _hover={{
          bg: 'red.800',
          transform: 'scale(1.1)',
          border: '1px solid',
          borderColor: 'red.800',
        }}
      >
        Quero me inscrever!
      </Button>
    </>
  );
}
