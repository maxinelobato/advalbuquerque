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
  CircleWavyCheck,
  NumberFour,
  NumberOne,
  NumberThree,
  NumberTwo,
} from 'phosphor-react';

export function ModalStefanie() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalHeading = {
    ementatextbutton: 'Ementa do Mini Curso',
    closetextbutton: 'Fechar',
    heading0: 'Estratégias para um perfil de sucesso',
    heading1: 'Para que servem as redes sociais?',
    heading2: 'Oportunidades no mercado digital',
    heading3: 'Pilares do perfil que vende:',
    text1: 'Gerar confiança',
    text2: 'Autenticidade',
    text3: 'Gerar valor',
    text4: 'Posicionamento',
    heading4: 'Linhas editoriais',
    heading5: 'Divisão do conteúdo',
    heading6: 'Estabeleça objetivos',
    heading7: 'Construa seu planejamento',
    heading8: 'Constância nas redes sociais',
    heading9: 'Ferramentas para criar conteúdo',
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
            <HStack>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading1}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading2}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading3}</Text>
            </HStack>
            <HStack pt={2} ml={4}>
              <Text color={'red.400'}>
                <NumberOne size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.text1}</Text>
            </HStack>
            <HStack ml={4}>
              <Text color={'red.400'}>
                <NumberTwo size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.text2}</Text>
            </HStack>
            <HStack ml={4}>
              <Text color={'red.400'}>
                <NumberThree size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.text3}</Text>
            </HStack>
            <HStack ml={4}>
              <Text color={'red.400'}>
                <NumberFour size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.text4}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading4}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading5}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading6}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading7}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading8}</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>{modalHeading.heading9}</Text>
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
