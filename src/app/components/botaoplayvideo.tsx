'use client';

import { Button, Link } from '@chakra-ui/react';
import { Play } from 'phosphor-react';

export function BotaoPlayVideo() {
  const buttonPlay = {
    textbuttonplay: 'Ouça o especialista',
  };
  return (
    <>
      <Button
        zIndex={3}
        as={Link}
        rounded={'full'}
        size={'lg'}
        colorScheme={'red'}
        variant={'outline'}
        href={
          'https://pay.hotmart.com/S78406296U?sck=HOTMART_PRODUCT_PAGE&bid=1676862918160'
        }
        style={{ textDecoration: 'none', pointerEvents: 'none' }}
        rightIcon={<Play size={24} weight={'fill'} />}
        isExternal
      >
        {buttonPlay.textbuttonplay}
      </Button>
    </>
  );
}
