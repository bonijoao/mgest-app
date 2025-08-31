import React, { useLayoutEffect, useMemo, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';
import { colors } from '../theme/colors';
import { ACTIVITIES } from '../data/schedule';

export default function ActivityDetailsScreen() {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<ImageSourcePropType | undefined>(undefined);
  const route = useRoute<RouteProp<RootStackParamList, 'ActivityDetails'>>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { toggleFavorite, isFavorite } = useFavorites();
  const activity = useMemo(() => ACTIVITIES.find(d => d.id === route.params.activityId), [route.params.activityId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: activity?.title ?? 'Detalhes',
      headerRight: () => (
        <TouchableOpacity onPress={() => activity && toggleFavorite(activity.id)}>
          <Ionicons name={isFavorite(route.params.activityId) ? 'star' : 'star-outline'} size={22} color={isFavorite(route.params.activityId) ? colors.primaryGreen : colors.primaryBlue} />
        </TouchableOpacity>
      )
    });
  }, [navigation, activity, isFavorite(route.params.activityId)]);

  if (!activity) {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: colors.textPrimary }}>Atividade não encontrada.</Text>
      </View>
    );
  }

  return (
    <>
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: 16 }}>
      <Text style={{ color: colors.textPrimary, fontSize: 22, marginBottom: 8 }}>{activity.title}</Text>
      <Text style={{ color: colors.primaryBlue }}>{activity.date} • {activity.start}{activity.end ? ` - ${activity.end}` : ''}</Text>
      {activity.location ? <Text style={{ color: colors.textSecondary, marginTop: 4 }}>Local: {activity.location}</Text> : null}

      {activity.speakers && activity.speakers.length > 0 ? (
        <View style={{ marginTop: 16 }}>
          <Text style={{ color: colors.textPrimary, marginBottom: 8, textAlign: 'center' }}>Palestrantes</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            {activity.speakers.map((s, idx) => (
              <View key={idx} style={{ alignItems: 'center', marginBottom: 12 }}>
                {s.photo ? (
                  <TouchableOpacity onPress={() => { setSelectedPhoto(s.photo); setIsPhotoModalOpen(true); }}>
                    <Image source={s.photo} style={{ width: 96, height: 96, borderRadius: 48, marginBottom: 8 }} />
                  </TouchableOpacity>
                ) : (
                  <View style={{ width: 96, height: 96, borderRadius: 48, marginBottom: 8, backgroundColor: '#222' }} />
                )}
                <Text style={{ color: colors.textPrimary, textAlign: 'center' }}>{s.name}</Text>
              </View>
            ))}
          </View>
        </View>
      ) : null}

      {activity.description ? (
        <View style={{ marginTop: 16 }}>
          <Text style={{ color: colors.textPrimary }}>{activity.description}</Text>
        </View>
      ) : null}
    </ScrollView>
    <Modal
      visible={isPhotoModalOpen}
      transparent
      animationType="fade"
      onRequestClose={() => setIsPhotoModalOpen(false)}
    >
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.95)', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => setIsPhotoModalOpen(false)} style={{ position: 'absolute', top: 40, right: 20, padding: 8 }}>
          <Ionicons name="close" size={28} color="#fff" />
        </TouchableOpacity>
        {selectedPhoto ? (
          <Image source={selectedPhoto} style={{ width: '90%', height: '80%', resizeMode: 'contain' }} />
        ) : null}
      </View>
    </Modal>
    </>
  );
}


