"use client";

import { Box, Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";

export function Navbar() {
  return (
    <>
      <Stack pt={[16, 12, 12, 12]}>
        <Box
          w='full'
          h={20}
          bgGradient={"linear(to-r, transparent 20%, gray.900, transparent 80%)"}
        >
          <VStack p={4} alignContent={"center"}>
            <Image
              src={"/img/logo.png"}
              alt={"Logo Albuquerque"}
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
