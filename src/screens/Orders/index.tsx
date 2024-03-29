import React from 'react';
import { FlatList } from 'react-native';

import { Container, Header, Title } from './styles';

import { OrderCard } from '@components/OrderCard';
import { ItemSeparator } from '@components/ItemSeparator';

export function Orders() {
  return (
    <Container>
      <Header>
        <Title>Orders made</Title>
      </Header>
      <FlatList
        data={['1', '2', '3']}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => <OrderCard index={index} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 125 }}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </Container>
  );
}
