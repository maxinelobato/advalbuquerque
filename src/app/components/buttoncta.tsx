'use client';

import { Button, Link } from '@chakra-ui/react';
import { ArrowFatRight, ArrowRight } from 'phosphor-react';

export function ButtonCta() {
  return (
    <>
      <Button
        as={Link}
        rounded={'full'}
        size={'lg'}
        bg={'blackAlpha.900'}
        color={'whiteAlpha.900'}
        shadow={'dark-lg'}
        _hover={{
          bg: 'red.800',
          transform: 'scale(1.1)',
          border: '1px solid',
          borderColor: 'whiteAlpha.900',
        }}
        href={
          'https://pay.hotmart.com/S78406296U?sck=HOTMART_PRODUCT_PAGE&bid=1676862918160'
        }
        style={{ textDecoration: 'none' }}
        rightIcon={<ArrowRight size={24} weight="bold" />}
        isExternal
      >
        Quero me inscrever!
      </Button>
    </>
  );
}
