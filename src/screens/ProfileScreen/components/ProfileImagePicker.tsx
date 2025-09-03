import React, { useState } from 'react';
import { Alert, ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { imageService, ImageResult } from '../../../services/imageService';
import theme from '../../../styles/theme';
import { ChangePhotoText, ContainerImagePicker, EditButton, ImageContainer, LoadingOverlay, ProfileImage } from '../styles';

interface ProfileImagePickerProps {
  currentImageUri?: string;
  onImageSelected: (imageUri: string) => void;
  size?: number;
  editable?: boolean;
}

const ProfileImagePicker: React.FC<ProfileImagePickerProps> = ({
  currentImageUri,
  onImageSelected,
  size = 120,
  editable = true,
}) => {
  const [loading, setLoading] = useState(false);

  const showImageOptions = () => {
    Alert.alert(
      'Alterar Foto de Perfil',
      'Como você gostaria de alterar sua foto?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Galeria',
          onPress: pickFromGallery,
        },
        {
          text: 'Câmera',
          onPress: takePhoto,
        },
        ...(currentImageUri && !currentImageUri.includes('placeholder') ? [{
          text: 'Remover Foto',
          style: 'destructive' as const,
          onPress: removePhoto,
        }] : []),
      ]
    );
  };

  const pickFromGallery = async () => {
    try {
      setLoading(true);
      const result = await imageService.pickImageFromGallery();
      
      if (result) {
        await handleImageResult(result);
      }
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error);
      Alert.alert('Erro', 'Não foi possível selecionar a imagem da galeria');
    } finally {
      setLoading(false);
    }
  };

  const takePhoto = async () => {
    try {
      setLoading(true);
      const result = await imageService.takePhoto();
      
      if (result) {
        await handleImageResult(result);
      }
    } catch (error) {
      console.error('Erro ao capturar foto:', error);
      Alert.alert('Erro', 'Não foi possível capturar a foto');
    } finally {
      setLoading(false);
    }
  };

  const handleImageResult = async (result: ImageResult) => {
    try {
      if (result.base64) {
        const base64Uri = `data:image/jpeg;base64,${result.base64}`;
        onImageSelected(base64Uri);
      } else {
        onImageSelected(result.uri);
      }
    } catch (error) {
      console.error('Erro ao processar imagem:', error);
      Alert.alert('Erro', 'Não foi possível processar a imagem selecionada');
    }
  };

  const removePhoto = () => {
    Alert.alert(
      'Remover Foto',
      'Tem certeza que deseja remover sua foto de perfil?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          style: 'destructive',
          onPress: () => {
            onImageSelected(imageService.getPlaceholderImage());
          },
        },
      ]
    );
  };

  const getImageSource = () => {
    if (currentImageUri && imageService.validateImageUri(currentImageUri)) {
      return { uri: currentImageUri };
    }
    return { uri: imageService.getPlaceholderImage() };
  };

  return (
    <ContainerImagePicker>
      <ImageContainer size={size}>
        <ProfileImage 
          source={getImageSource()}
          size={size}
        />
        
        {loading && (
          <LoadingOverlay size={size}>
            <ActivityIndicator size="large" color={theme.colors.primary} />
          </LoadingOverlay>
        )}
        
        {editable && (
          <EditButton onPress={showImageOptions} disabled={loading}>
            <Ionicons 
              name="camera" 
              size={20} 
              color={theme.colors.white} 
            />
          </EditButton>
        )}
      </ImageContainer>
      
      {editable && (
        <ChangePhotoText>Toque no ícone para alterar</ChangePhotoText>
      )}
    </ContainerImagePicker>
  );
};

export default ProfileImagePicker;