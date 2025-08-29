import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Ionicons } from '@expo/vector-icons';
import { ACTIVITIES, DAYS } from '../data/schedule';
import { colors } from '../theme/colors';

export default function TalksScreen() {
  const [selectedDay, setSelectedDay] = useState(DAYS[0].value);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const activitiesForDay = useMemo(
    () => ACTIVITIES.filter(a => a.date === selectedDay).sort((a, b) => a.start.localeCompare(b.start)),
    [selectedDay]
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ flexDirection: 'row', padding: 12, gap: 8 }}>
        {DAYS.map(d => {
          const active = d.value === selectedDay;
          return (
            <TouchableOpacity
              key={d.value}
              onPress={() => setSelectedDay(d.value)}
              style={{
                backgroundColor: active ? colors.primaryBlue : '#1a1a1a',
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 20
              }}
            >
              <Text style={{ color: active ? '#000' : colors.textPrimary, fontFamily: 'RBrasSeagro' }}>{d.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <FlatList
        data={activitiesForDay}
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
              <Text style={{ color: colors.primaryBlue, marginTop: 4 }}>{item.end ? `${item.start} – ${item.end}` : item.start}</Text>
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
    </View>
  );
}


