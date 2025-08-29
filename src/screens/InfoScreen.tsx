import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { colors } from '../theme/colors';

export default function InfoScreen() {
  const logos = [
    require('../../assets/apoio/apoio1.png'),
    require('../../assets/apoio/apoio2.png'),
    require('../../assets/apoio/apoio3.png'),
    require('../../assets/apoio/apoio4.webp'),
    require('../../assets/apoio/apoio5.png'),
    require('../../assets/apoio/apoio6.png')
  ];
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: 16, gap: 16 }}>
      <Image
        source={require('../../assets/iconmgest.png')}
        resizeMode="contain"
        style={{ width: '100%', height: 200, alignSelf: 'center' }}
      />

      <View style={{ backgroundColor: colors.surface, borderRadius: 12, padding: 12 }}>
        <Text style={{ color: colors.textPrimary, fontSize: 18, marginBottom: 8, fontFamily: 'RBrasSeagro' }}>Sobre o Evento</Text>
        <Text style={{ color: colors.textSecondary }}>
O Encontro Mineiro de Estatística (MGEST) é um tradicional evento bienal que, desde 1999, reúne a comunidade estatística de Minas Gerais. Organizado em colaboração com as principais instituições de ensino do estado, o MGEST se consolidou como um importante espaço para a divulgação científica e o intercâmbio de conhecimento. A 17ª edição, em 2025, será sediada pela Universidade Federal de Lavras (UFLA).

O MGEST tem como principal objetivo fomentar a pesquisa em Estatística, ampliar a visibilidade acadêmica de Minas Gerais no cenário nacional e promover a colaboração entre instituições, docentes e discentes. A cada edição, o encontro busca enriquecer o debate científico e apresentar os avanços da área, conectando-os a temas atuais como os Objetivos de Desenvolvimento Sustentável.
        </Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://eventos.ufla.br/mgest/')}
          style={{ backgroundColor: colors.primaryBlue, padding: 12, borderRadius: 8, marginTop: 12 }}
        >
          <Text style={{ textAlign: 'center', color: '#000', fontWeight: 'bold' }}>ACESSAR O SITE</Text>
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: colors.surface, borderRadius: 12, padding: 12 }}>
        <Text style={{ color: colors.textPrimary, fontSize: 18, marginBottom: 8, fontFamily: 'RBrasSeagro' }}>Apoio e Realização</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {logos.map((src, idx) => (
            <View key={idx} style={{ width: '30%', aspectRatio: 1, marginBottom: 12, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={src} resizeMode="contain" style={{ width: '100%', height: '100%' }} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}


