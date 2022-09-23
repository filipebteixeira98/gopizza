import React, { useState, useEffect } from 'react';
import { Platform, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

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
import { ProductProps } from '@components/ProductCard';

import { PIZZA_TYPES } from '@utils/pizzaTypes';

import { OrderNavigationProps } from '@src/@types/navigation';

type PizzaResponse = ProductProps & {
  price_sizes: {
    [key: string]: number;
  };
};

export function Order() {
  const [size, setSize] = useState('');
  const [pizza, setPizza] = useState<PizzaResponse>({} as PizzaResponse);

  const navigation = useNavigation();

  const route = useRoute();
  const { id } = route.params as OrderNavigationProps;

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    if (id) {
      firestore()
        .collection('pizzas')
        .doc(id)
        .get()
        .then((response) => setPizza(response.data() as PizzaResponse))
        .catch(() => Alert.alert('Request', 'Could not load product data'));
    }
  }, [id]);

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ContentScroll>
        <Header>
          <ButtonBack onPress={handleGoBack} style={{ marginBottom: 108 }} />
        </Header>
        <Photo source={{ uri: pizza.photo_url }} />
        <Form>
          <Title>{pizza.name}</Title>
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
