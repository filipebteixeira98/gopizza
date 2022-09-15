import React, { useState } from 'react';
import { Platform } from 'react-native';

import {
  Container,
  ContentScroll,
  Header,
  Photo,
  Sizes,
  Form,
  Title,
  Label,
  InputGroup,
  FormRow,
  Price,
} from './styles';

import { ButtonBack } from '@components/ButtonBack';
import { RadioButton } from '@components/RadioButton';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import { PIZZA_TYPES } from '@utils/pizzaTypes';

export function Order() {
  const [size, setSize] = useState('');

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ContentScroll>
        <Header>
          <ButtonBack onPress={() => {}} style={{ marginBottom: 108 }} />
        </Header>
        <Photo source={{ uri: 'https://github.com/filipebteixeira98.png' }} />
        <Form>
          <Title>Pizza name</Title>
          <Label>Select a size</Label>
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
          <FormRow>
            <InputGroup>
              <Label>Table number</Label>
              <Input keyboardType="numeric" />
            </InputGroup>
            <InputGroup>
              <Label>Amount</Label>
              <Input keyboardType="numeric" />
            </InputGroup>
          </FormRow>
          <Price>Total of $00.00</Price>
          <Button title="Confirm Order" />
        </Form>
      </ContentScroll>
    </Container>
  );
}
