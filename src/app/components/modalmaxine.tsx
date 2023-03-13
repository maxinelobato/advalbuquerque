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
  const modalHeading = {
    ementatextbutton: 'Ementa do Mini Curso',
    closetextbutton: 'Fechar',
    heading0: 'Gestão de Tráfego no Google Ads para Advogados',
    heading1: 'Funil de Vendas:',
    text1: 'Topo de Funil',
    text2: 'Meio de Funil',
    text3: 'Fundo de Funil',
    heading2: 'Criar conta no Google Ads',
    heading3: 'Configurações de pagamento',
    heading4: 'Pesquisando o público no Planejador de Palavras-Chave',
    heading5: 'Criando lista de Palavras-Chave Negativas antes de subir campanha',
    heading6: 'Subindo a primeira campanha',
    heading7: 'Análise e métricas para otimizar suas campanhas',
  };
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
          {modalHeading.ementatextbutton}
        </Button>
      </Stack>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={'inside'}
        size={'sm'}
      >
        <ModalContent
          bgColor={'blackAlpha.700'}
          backdropBlur={'1rem'}
          backdropFilter='blur(20px)'
          border={'1px'}
          borderColor={'whiteAlpha.200'}
        >
          <ModalHeader color={'red.400'}>{modalHeading.heading0}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberOne size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.text1}</Text>
            </HStack>
            <HStack pt={2} ml={4}>
              <Text color={'red.400'}>
                <Minus size={20} weight='bold' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.text2}</Text>
            </HStack>
            <HStack ml={4}>
              <Text color={'red.400'}>
                <Minus size={20} weight='bold' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.text3}</Text>
            </HStack>
            <HStack ml={4}>
              <Text color={'red.400'}>
                <Minus size={20} weight='bold' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading1}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberTwo size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading2}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberThree size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading3}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberFour size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading4}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberFive size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading5}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberSix size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading6}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <NumberSeven size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading7}</Text>
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
              {modalHeading.closetextbutton}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
