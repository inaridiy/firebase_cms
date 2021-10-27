import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { needChild } from '../../types/needChild';
import { Card } from '../atoms/Card';

export const AuthLayout: React.FC<needChild> = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Card minW={{ base: '90%', md: '468px' }}>{children}</Card>
    </Flex>
  );
};
