'use client';

import { Box, Button, Flex, HStack, Link, Stack, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export function NavbarProm() {
  return (
    <>
      <Stack spacing={{ base: '12', sm: '12', md: '10', lg: '12' }}>
        <Box
          w="full"
          bgGradient={'linear(to-l, #000, red.500, gray.700)'}
          justifyContent={'center'}
          alignContent={'center'}
          alignItems={'center'}
          zIndex={999}
          position="fixed"
          boxShadow={'lg'}
        >
          <Flex p={2} alignItems={'center'} justifyContent={'center'}>
            <HStack spacing={8} alignItems={'center'}>
              <Box textAlign={'center'}>
                Aproveite de <s>R$997,00</s> por R$497,00
              </Box>
            </HStack>
            <Flex alignItems={'center'} pl={'2'}>
              <Button
                as={Link}
                size={'sm'}
                bgColor={'blackAlpha.800'}
                _hover={{ transition: '0.3s', bgColor: 'blackAlpha.500' }}
                href={
                  'https://pay.hotmart.com/S78406296U?sck=HOTMART_PRODUCT_PAGE&bid=1676862918160'
                }
                style={{ textDecoration: 'none' }}
                isExternal
              >
                Quero aproveitar!
              </Button>
            </Flex>
          </Flex>
        </Box>
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
      </Stack>
    </>
  );
}
