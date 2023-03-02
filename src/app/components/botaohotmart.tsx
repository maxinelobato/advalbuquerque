'use client';

import { Button, Link } from '@chakra-ui/react';
import { ArrowRight } from 'phosphor-react';

export function BotaoHotmart() {
  return (
    <>
      <Button
        as={Link}
        rounded={'full'}
        size={'lg'}
        bg={'red.700'}
        color={'whiteAlpha.900'}
        shadow={'lg'}
        _hover={{
          bg: 'whiteAlpha.900',
          color: 'red.700',
          transform: 'scale(1.1)',
          transition: '0.5s',
        }}
        href={
          'https://pay.hotmart.com/S78406296U?sck=HOTMART_PRODUCT_PAGE&bid=1676862918160'
        }
        style={{ textDecoration: 'none' }}
        rightIcon={<ArrowRight size={24} weight={'bold'} />}
        isExternal
      >
        Quero aprender!
      </Button>
    </>
  );
}