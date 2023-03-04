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
            Estratégias para um perfil de sucesso
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Para que servem as redes sociais?</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Oportunidades no mercado digital</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Pilares do perfil que vende:</Text>
            </HStack>
            <HStack pt={2} ml={4}>
              <Text color={'red.400'}>
                <NumberOne size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Gerar confiança </Text>
            </HStack>
            <HStack ml={4}>
              <Text color={'red.400'}>
                <NumberTwo size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Autenticidade</Text>
            </HStack>
            <HStack ml={4}>
              <Text color={'red.400'}>
                <NumberThree size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Gerar valor</Text>
            </HStack>
            <HStack ml={4}>
              <Text color={'red.400'}>
                <NumberFour size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Posicionamento</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Linhas editoriais</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Divisão do conteúdo</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Estabeleça objetivos</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Construa seu planejamento</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Constância nas redes sociais</Text>
            </HStack>
            <HStack pt={2}>
              <Text color={'red.400'}>
                <CircleWavyCheck size={20} weight='fill' />
              </Text>
              <Text textAlign={'left'}>Ferramentas para criar conteúdo</Text>
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
