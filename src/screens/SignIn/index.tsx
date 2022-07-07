import React from 'react';

import { Input } from '@components/Input';

import { Container } from './styles';

export function SignIn() {
  return (
    <Container>
      <Input
        placeholder="E-mail"
        type="secondary"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Input placeholder="Password" type="secondary" secureTextEntry />
    </Container>
  );
}
