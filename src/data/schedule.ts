import type { ImageSourcePropType } from 'react-native';

export type Activity = {
  id: string;
  title: string;
  start: string; // HH:mm
  end?: string;
  date: string; // YYYY-MM-DD
  location?: string;
  description?: string;
  speakers?: { name: string; photo?: ImageSourcePropType }[];
};

export const DAYS = [
  { label: 'Quarta, 22/10', value: '2025-10-22' },
  { label: 'Quinta, 23/10', value: '2025-10-23' },
  { label: 'Sexta, 24/10', value: '2025-10-24' }
];

export const ACTIVITIES: Activity[] = [
  // Quarta-feira, 22/10/2025
  { id: 'qua-0830-credenciamento', title: 'Credenciamento', start: '08:30', end: '10:00', date: '2025-10-22' },
  {
    id: 'qua-1000-minicurso',
    title: 'Minicurso',
    start: '10:00',
    end: '12:00',
    date: '2025-10-22',
    description: 'Distributional regression using gamlss2 — Ministrante: Dimitrios Mikis Stasinopoulos (University of Greenwich, Reino Unido)',
    speakers: [
      { name: 'Dimitrios Mikis Stasinopoulos', photo: require('../../assets/palestrantes/dimitrios.jpg') }
    ]
  },
  { id: 'qua-1200-almoco', title: 'Almoço', start: '12:00', end: '13:30', date: '2025-10-22' },
  { id: 'qua-1330-abertura', title: 'Abertura', start: '13:30', end: '14:00', date: '2025-10-22' },
  {
    id: 'qua-1400-conf-abertura',
    title: 'Conferência de Abertura',
    start: '14:00',
    end: '15:00',
    date: '2025-10-22',
    description: 'A definir',
    speakers: [
      { name: 'Thelma Krug', photo: require('../../assets/palestrantes/thelma_krug.png') }
    ]
  },
  {
    id: 'qua-1500-conre6',
    title: 'Sessão do CONRE 6',
    start: '15:00',
    end: '16:00',
    date: '2025-10-22',
    speakers: [
      { name: 'Guilherme Guimarães Moreira (Presidente do CONRE-6)', photo: require('../../assets/palestrantes/guilherme.jpeg') },
      { name: 'Humberto Silva (CONRE-6)', photo: require('../../assets/palestrantes/humberto.jpeg') }
    ]
  },
  { id: 'qua-1600-coffee', title: 'Coffee Break', start: '16:00', end: '16:30', date: '2025-10-22' },
  {
    id: 'qua-1630-mini-1',
    title: 'Mini-Conferência 1',
    start: '16:30',
    end: '17:00',
    date: '2025-10-22',
    description: 'Métodos de Regularização em Modelos Mistos de Alta Dimensão no Contexto das Mudanças Climáticas',
    speakers: [
      { name: 'Daniela Carine Ramires de Oliveira (UFSJ)', photo: require('../../assets/palestrantes/daniela_ramires.jpg') }
    ]
  },
  {
    id: 'qua-1700-mini-2',
    title: 'Mini-Conferência 2',
    start: '17:00',
    end: '17:30',
    date: '2025-10-22',
    description: 'Séries temporais de imagens de satélite para estimativas precisas de uso e cobertura da terra',
    speakers: [
      { name: 'Michel Eustáquio Dantas Chaves (UNESP)', photo: require('../../assets/palestrantes/michel_chaves.jpeg') }
    ]
  },
  { id: 'qua-1730-com-orais-1', title: 'Comunicações Orais 1', start: '17:30', end: '18:30', date: '2025-10-22' },

  // Quinta-feira, 23/10/2025
  {
    id: 'qui-0830-sessao-tematica-1',
    title: 'Sessão Temática 1',
    start: '08:30',
    end: '10:00',
    date: '2025-10-23',
    description: 'Modelos de séries temporais e de dados longitudinais aplicados à poluição do ar (Org.: Glaura da Conceição Franco — UFMG)',
    speakers: [
      { name: 'Dani Gamerman (UFRJ)', photo: require('../../assets/palestrantes/dani.png') },
      { name: 'Ana Júlia Alves Câmara (UFES)', photo: require('../../assets/palestrantes/ana_julia_camara.jpeg') },
      { name: 'Gisele Oliveira Maia (UNIFEI)', photo: require('../../assets/palestrantes/gisele_maia.jpg') }
    ]
  },
  { id: 'qui-1000-coffee', title: 'Coffee Break', start: '10:00', end: '10:30', date: '2025-10-23' },
  {
    id: 'qui-1030-sessao-tematica-2',
    title: 'Sessão Temática 2',
    start: '10:30',
    end: '12:00',
    date: '2025-10-23',
    description: 'Inteligência artificial e análise textual: aplicações em estatística, meio ambiente e educação (Org.: Paulo Canas Rodrigues — UFBA)',
    speakers: [
      { name: 'Paulo Canas Rodrigues (UFBA)', photo: require('../../assets/palestrantes/paulo_canas.jpeg') },
      { name: 'Crysttian Arantes Paixão (UFBA)', photo: require('../../assets/palestrantes/crysttian-paixao.jpg') },
      { name: 'Anderson Castro Soares de Oliveira (UFMT)', photo: require('../../assets/palestrantes/anderson.gif') }
    ]
  },
  { id: 'qui-1200-almoco', title: 'Almoço', start: '12:00', end: '14:00', date: '2025-10-23' },
  {
    id: 'qui-1400-conf-1',
    title: 'Conferência 1',
    start: '14:00',
    end: '15:00',
    date: '2025-10-23',
    description: 'O Modelo de Equações Estruturais na Análise de Dados Meteorológicos',
    speakers: [
      { name: 'Lucia Pereira Barroso (USP)', photo: require('../../assets/palestrantes/lucia_barroso.png') }
    ]
  },
  {
    id: 'qui-1500-conf-2',
    title: 'Conferência 2',
    start: '15:00',
    end: '16:00',
    date: '2025-10-23',
    description: 'Modelos para Estimação em Pequenas Áreas de Indicadores dos Objetivos de Desenvolvimento Sustentável',
    speakers: [
      { name: 'Denise Britz do Nascimento Silva (SEADE)', photo: require('../../assets/palestrantes/denise_britz.png') }
    ]
  },
  { id: 'qui-1600-coffee', title: 'Coffee Break', start: '16:00', end: '16:30', date: '2025-10-23' },
  {
    id: 'qui-1630-mini-3',
    title: 'Mini-Conferência 3',
    start: '16:30',
    end: '17:00',
    date: '2025-10-23',
    description: 'Riscos climáticos na agricultura: desafios e oportunidades para a Estatística',
    speakers: [
      { name: 'Alfredo José Barreto Luiz (Embrapa Meio Ambiente)', photo: require('../../assets/palestrantes/alfredo_barreto.jpg') }
    ]
  },
  {
    id: 'qui-1700-mini-4',
    title: 'Mini-Conferência 4',
    start: '17:00',
    end: '17:30',
    date: '2025-10-23',
    description: 'IA no Gerenciamento de Riscos Climáticos: Desafios e Oportunidades',
    speakers: [
      { name: 'Flávio Barbosa Justino (UFV)', photo: require('../../assets/palestrantes/flavio_justino.png') }
    ]
  },
  { id: 'qui-1730-com-orais-2', title: 'Comunicações Orais 2', start: '17:30', end: '18:30', date: '2025-10-23' },
  { id: 'qui-1900-happy-hour', title: 'Happy hour com R-Ladies e PyLadies', start: '19:00', date: '2025-10-23' },
  { id: 'qui-2000-confraternizacao', title: 'Confraternização', start: '20:00', date: '2025-10-23' },

  // Sexta-feira, 24/10/2025
  { id: 'sex-0800-sessao-poster', title: 'Sessão Pôster', start: '08:00', end: '09:30', date: '2025-10-24' },
  { id: 'sex-0930-coffee', title: 'Coffee Break', start: '09:30', end: '10:00', date: '2025-10-24' },
  {
    id: 'sex-1000-conf-3',
    title: 'Conferência 3',
    start: '10:00',
    end: '11:00',
    date: '2025-10-24',
    description: 'A definir',
    speakers: [
      { name: 'Otávio Camargo Campoe' }
    ]
  },
  {
    id: 'sex-1100-conf-enc',
    title: 'Conferência de Encerramento',
    start: '11:00',
    end: '12:00',
    date: '2025-10-24',
    description: 'Regression Models: Personal thoughts about Climate Changes Challenges — In this talk I will present my personal thoughts about the current stage of modern regression analysis and how it can be adapt for challenges related to climate changes... ',
    speakers: [
      { name: 'Dimitrios Mikis Stasinopoulos (University of Greenwich, Reino Unido)', photo: require('../../assets/palestrantes/dimitrios.jpg') }
    ]
  },
  { id: 'sex-1200-encerramento', title: 'Encerramento', start: '12:00', end: '14:00', date: '2025-10-24' }
];


