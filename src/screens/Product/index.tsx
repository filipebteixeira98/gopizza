import React, { useState } from 'react';
import { Platform, TouchableOpacity, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

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

  async function handleAdd() {
    if (!name.trim()) {
      return Alert.alert('Register', 'Give the name of the pizza');
    }

    if (!description.trim()) {
      return Alert.alert('Register', 'Give the description of the pizza');
    }

    if (!image) {
      return Alert.alert('Register', 'Select pizza image');
    }

    if (!priceSizeP || !priceSizeM || !priceSizeG) {
      return Alert.alert('Register', 'Give the price of all pizza sizes');
    }

    setIsLoading(true);

    const fileName = new Date().getTime();

    const reference = storage().ref(`/pizzas/${fileName}.png`);

    await reference.putFile(image);

    const photo_url = await reference.getDownloadURL();

    firestore()
      .collection('pizzas')
      .add({
        name,
        name_insensitive: name.toLowerCase().trim(),
        description,
        price_sizes: {
          p: priceSizeP,
          m: priceSizeM,
          g: priceSizeG,
        },
        photo_url,
        photo_path: reference.fullPath,
      })
      .then(() => Alert.alert('Register', 'Pizza successfully registered'))
      .catch(() => Alert.alert('Register', 'Could not register pizza'));

    setIsLoading(false);
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
          <Button
            title="Register pizza"
            isLoading={isLoading}
            onPress={handleAdd}
          />
        </Form>
      </ScrollView>
    </Container>
  );
}
