"use client";

import { Box, Button, Flex, HStack, Link } from "@chakra-ui/react";

export function NavbarProm() {
  return (
    <>
      <Box
        w='full'
        bgGradient={"linear(to-l, #000, red.500, gray.700)"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        zIndex={999}
        position={"fixed"}
        boxShadow={"lg"}
      >
        <Flex p={2} alignItems={"center"} justifyContent={"center"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box textAlign={"center"} fontFamily={"roboto"} fontWeight={"medium"}>
              Aproveite de <s>R$997,00</s> por R$497,00
            </Box>
          </HStack>
          <Flex alignItems={"center"} pl={"2"}>
            <Button
              as={Link}
              size={"sm"}
              bgColor={"blackAlpha.800"}
              _hover={{ transition: "0.3s", bgColor: "blackAlpha.500" }}
              href={
                "https://pay.hotmart.com/S78406296U?sck=HOTMART_PRODUCT_PAGE&bid=1676862918160"
              }
              style={{ textDecoration: "none" }}
              isExternal
            >
              Quero aproveitar!
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
