import React, { useState } from 'react';
import { Platform } from 'react-native';

import { Container, Header, Photo, Sizes } from './styles';

import { ButtonBack } from '@components/ButtonBack';
import { RadioButton } from '@components/RadioButton';

import { PIZZA_TYPES } from '@utils/pizzaTypes';

export function Order() {
  const [size, setSize] = useState('');

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header>
        <ButtonBack onPress={() => {}} style={{ marginBottom: 108 }} />
      </Header>
      <Photo source={{ uri: 'https://github.com/filipebteixeira98.png' }} />
      <Sizes>
        {PIZZA_TYPES.map((item) => (
          <RadioButton
            key={item.id}
            title={item.name}
            selected={size === item.id}
            onPress={() => setSize(item.id)}
          />
        ))}
      </Sizes>
    </Container>
  );
}
