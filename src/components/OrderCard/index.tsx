import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Image,
  Name,
  Description,
  StatusContainer,
  StatusLabel,
  StatusTypesProps,
} from './styles';

type Props = TouchableOpacityProps & {
  index: number;
};

export function OrderCard({ index, ...rest }: Props) {
  return (
    <Container index={index} {...rest}>
      <Image source={{ uri: 'https://github.com/filipebteixeira98.png' }} />
      <Name>4 Cheeses</Name>
      <Description>Table 5 🞄 Quantity: 1</Description>
      <StatusContainer status="Preparing">
        <StatusLabel status="Preparing">Preparing</StatusLabel>
      </StatusContainer>
    </Container>
  );
}
