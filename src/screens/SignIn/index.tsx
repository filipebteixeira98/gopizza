import React from 'react';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

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
      <Button title="Sign in" type="secondary" />
    </Container>
  );
}
