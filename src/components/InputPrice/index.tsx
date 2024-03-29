import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Size, Input, Label } from './styles';

type Props = TextInputProps & {
  size: string;
};

export function InputPrice({ size, ...rest }: Props) {
  return (
    <Container>
      <Size>
        <Label>{size}</Label>
      </Size>
      <Label>$</Label>
      <Input keyboardType="numeric" {...rest} />
    </Container>
  );
}
