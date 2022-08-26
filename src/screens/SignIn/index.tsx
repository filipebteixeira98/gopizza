import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { Container, Content } from './styles';

export function SignIn() {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input placeholder="Password" type="secondary" secureTextEntry />
          <Button title="Sign in" type="secondary" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
