import React from 'react';
import { IconButton } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/layout';
import { needChild } from '../../types/needChild';
import { Card } from '../atoms/Card';

export const AuthLayout: React.FC<needChild> = ({ children }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.200', 'gray.900');
  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor={bgColor}
        justifyContent="center"
        alignItems="center"
      >
        <Card minW={{ base: '90%', sm: '468px' }}>{children}</Card>
      </Flex>
      <IconButton
        aria-label="switch dark mode"
        position="fixed"
        bg="transparent"
        top="3"
        right="3"
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      />
    </>
  );
};
