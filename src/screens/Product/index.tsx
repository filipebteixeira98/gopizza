import React, { useState } from 'react';
import { Platform, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import {
  Container,
  Header,
  Title,
  DeleteLabel,
  Upload,
  PickImageButton,
  Form,
  Label,
  InputGroup,
  InputGroupHeader,
  MaxCharacters,
} from './styles';

import { Button } from '@components/Button';
import { ButtonBack } from '@components/ButtonBack';
import { Input } from '@components/Input';
import { InputPrice } from '@components/InputPrice';
import { Photo } from '@components/Photo';

export function Product() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceSizeP, setPriceSizeP] = useState('');
  const [priceSizeM, setPriceSizeM] = useState('');
  const [priceSizeG, setPriceSizeG] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handlePickerImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  }

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <ButtonBack />
          <Title>Register</Title>
          <TouchableOpacity>
            <DeleteLabel>Delete</DeleteLabel>
          </TouchableOpacity>
        </Header>
        <Upload>
          <Photo uri={image} />
          <PickImageButton
            onPress={handlePickerImage}
            title="Upload"
            type="secondary"
          />
        </Upload>
        <Form>
          <InputGroup>
            <Label>Name</Label>
            <Input onChangeText={setName} value={name} />
          </InputGroup>
          <InputGroup>
            <InputGroupHeader>
              <Label>Description</Label>
              <MaxCharacters>0 of 60 characters</MaxCharacters>
            </InputGroupHeader>
            <Input
              multiline
              maxLength={60}
              style={{ height: 80 }}
              onChangeText={setDescription}
              value={description}
            />
          </InputGroup>
          <InputGroup>
            <Label>Sizes and prices</Label>
            <InputPrice
              size="P"
              onChangeText={setPriceSizeP}
              value={priceSizeP}
            />
            <InputPrice
              size="M"
              onChangeText={setPriceSizeM}
              value={priceSizeM}
            />
            <InputPrice
              size="G"
              onChangeText={setPriceSizeG}
              value={priceSizeG}
            />
          </InputGroup>
          <Button title="Register pizza" isLoading={isLoading} />
        </Form>
      </ScrollView>
    </Container>
  );
}
