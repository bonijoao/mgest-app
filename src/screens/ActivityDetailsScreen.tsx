import React, { useLayoutEffect, useMemo } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';
import { colors } from '../theme/colors';
import { ACTIVITIES } from '../data/schedule';

export default function ActivityDetailsScreen() {
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
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: 16 }}>
      <Text style={{ color: colors.textPrimary, fontSize: 22, marginBottom: 8 }}>{activity.title}</Text>
      <Text style={{ color: colors.primaryBlue }}>{activity.date} • {activity.start}{activity.end ? ` - ${activity.end}` : ''}</Text>
      {activity.location ? <Text style={{ color: colors.textSecondary, marginTop: 4 }}>Local: {activity.location}</Text> : null}

      {activity.speakers && activity.speakers.length > 0 ? (
        <View style={{ marginTop: 16 }}>
          <Text style={{ color: colors.textPrimary, marginBottom: 8 }}>Palestrantes</Text>
          {activity.speakers.map((s, idx) => (
            <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              {s.photo ? (
                <Image source={{ uri: s.photo }} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8 }} />
              ) : (
                <View style={{ width: 40, height: 40, borderRadius: 20, marginRight: 8, backgroundColor: '#222' }} />
              )}
              <Text style={{ color: colors.textPrimary }}>{s.name}</Text>
            </View>
          ))}
        </View>
      ) : null}

      {activity.description ? (
        <View style={{ marginTop: 16 }}>
          <Text style={{ color: colors.textPrimary }}>{activity.description}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
}


