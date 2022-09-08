import React from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, Header, Title, DeleteLabel } from './styles';

import { ButtonBack } from '@components/ButtonBack';
import { Photo } from '@components/Photo';

export function Product() {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header>
        <ButtonBack />
        <Title>Register</Title>
        <TouchableOpacity>
          <DeleteLabel>Delete</DeleteLabel>
        </TouchableOpacity>
      </Header>
      <Photo uri="" />
    </Container>
  );
}
