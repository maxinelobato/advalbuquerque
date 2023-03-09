'use client';

import { Box, Button, Flex, HStack, Link } from '@chakra-ui/react';

export function NavbarPromocao() {
  const textBox = {
    textprom1: 'Aproveite de ',
    textprom2: 'R$997,00',
    textprom3: ' por R$497,00',
    textcta: 'Quero aproveitar!',
  };
  return (
    <>
      <Box
        w='full'
        bgGradient={'linear(to-l, gray.900, red.500, gray.900)'}
        justifyContent={'center'}
        alignContent={'center'}
        alignItems={'center'}
        zIndex={999}
        position={'fixed'}
        boxShadow={'lg'}
      >
        <Flex p={2} alignItems={'center'} justifyContent={'center'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box textAlign={'center'} fontWeight={'medium'}>
              {textBox.textprom1}
              <s>{textBox.textprom2}</s>
              {textBox.textprom3}
            </Box>
          </HStack>
          <Flex alignItems={'center'} pl={'2'}>
            <Button
              as={Link}
              rounded={'full'}
              size={'sm'}
              colorScheme={'red'}
              href={
                'https://pay.hotmart.com/S78406296U?sck=HOTMART_PRODUCT_PAGE&bid=1676862918160'
              }
              style={{ textDecoration: 'none' }}
              isExternal
            >
              {textBox.textcta}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
