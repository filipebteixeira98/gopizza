import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import {
  Container,
  Header,
  Greeting,
  GreetingEmoji,
  GreetingText,
  Title,
  MenuHeader,
  MenuItemsNumber,
} from './styles';

import { Search } from '@components/Search';
import { ProductCard } from '@components/ProductCard';

import happyEmoji from '@assets/happy.png';

export function Home() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingEmoji source={happyEmoji} />
          <GreetingText>Hello, Admin</GreetingText>
        </Greeting>
        <TouchableOpacity>
          <MaterialIcons name="logout" color={COLORS.TITLE} size={24} />
        </TouchableOpacity>
      </Header>
      <Search onSearch={() => {}} onClear={() => {}} />
      <MenuHeader>
        <Title>Menu</Title>
        <MenuItemsNumber>10 pizzas</MenuItemsNumber>
      </MenuHeader>
      <ProductCard
        data={{
          id: '1',
          name: 'Pizza Awesome',
          description: 'Ingredients',
          photo_url: 'https://github.com/filipebteixeira98.png',
        }}
      />
    </Container>
  );
}
