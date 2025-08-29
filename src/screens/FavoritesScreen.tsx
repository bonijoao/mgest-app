import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Ionicons } from '@expo/vector-icons';
import { useFavorites } from '../context/FavoritesContext';
import { ACTIVITIES } from '../data/schedule';
import { colors } from '../theme/colors';

export default function FavoritesScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { favorites } = useFavorites();
  const favoriteList = useMemo(() => ACTIVITIES.filter(a => favorites[a.id]), [favorites]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {favoriteList.length === 0 ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: colors.textSecondary }}>Nenhuma atividade favoritada.</Text>
        </View>
      ) : (
        <FlatList
          data={favoriteList}
          keyExtractor={item => item.id}
          contentContainerStyle={{ padding: 12, gap: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ActivityDetails', { activityId: item.id })}
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
                borderWidth: 1,
                borderRadius: 12,
                padding: 12,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 12
              }}
            >
              <View style={{ width: 60, alignItems: 'center' }}>
                <Ionicons name="time-outline" size={20} color={colors.primaryBlue} />
                <Text style={{ color: colors.primaryBlue, marginTop: 4 }}>{item.start}</Text>
              </View>
              <View style={{ width: 1, height: '100%', backgroundColor: colors.border }} />
              <View style={{ flex: 1 }}>
                <Text style={{ color: colors.textPrimary, fontSize: 16 }}>{item.title}</Text>
                {item.location ? (
                  <Text style={{ color: colors.textSecondary, marginTop: 4 }}>Local: {item.location}</Text>
                ) : null}
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}


