'use client';

import {
  Stack,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  ModalCloseButton,
  Text,
  HStack,
} from '@chakra-ui/react';
import {
  Minus,
  NumberFive,
  NumberFour,
  NumberOne,
  NumberSeven,
  NumberSix,
  NumberThree,
  NumberTwo,
} from 'phosphor-react';

export function ModalMaxine() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', md: 'row' }}>
        <Button
          variant={'outline'}
          maxW={'sm'}
          size={'sm'}
          style={{ textDecoration: 'none' }}
          onClick={onOpen}
          colorScheme={'red'}
          textAlign={'center'}
          fontWeight={'light'}
          fontSize={'sm'}
        >
          Ementa do Mini Curso
        </Button>
      </Stack>
      <Modal
        isCentered
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={'inside'}
        size={'sm'}
      >
        <ModalContent
          bgColor={'blackAlpha.900'}
          backdropBlur={'1rem'}
          backdropFilter='blur(5px)'
          border={'1px'}
          borderColor={'whiteAlpha.200'}
        >
          <ModalHeader color={'red.400'}>
            Gestão de Tráfego no Google Ads para Advogados
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberOne size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Funil de Vendas:</Text>
            </HStack>
            <HStack pt={2} ml={4}>
              <Text color={'red.400'}>
                <Minus size={20} weight='bold' />
              </Text>
              <Text textAlign={'left'}>Topo de Funil</Text>
            </HStack>
            <HStack ml={4}>
              <Text color={'red.400'}>
                <Minus size={20} weight='bold' />
              </Text>
              <Text textAlign={'left'}>Meio de Funil</Text>
            </HStack>
            <HStack ml={4}>
              <Text color={'red.400'}>
                <Minus size={20} weight='bold' />
              </Text>
              <Text textAlign={'left'}>Fundo de Funil</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberTwo size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Criar conta no Google Ads</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberThree size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Configurações de pagamento</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberFour size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>
                Pesquisando o público no Planejador de Palavras-Chave
              </Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberFive size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>
                Criando lista de Palavras-Chave Negativas antes de subir campanha
              </Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberSix size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Subindo a primeira campanha</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberSeven size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>
                Análise e métricas para otimizar suas campanhas
              </Text>
            </HStack>
          </ModalBody>
          <ModalFooter justifyContent={'center'}>
            <Button
              rounded={'full'}
              onClick={onClose}
              bg={'red.700'}
              color={'whiteAlpha.900'}
              _hover={{
                bg: 'red.900',
                color: 'whiteAlpha.700',
                transition: '0.5s',
              }}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
