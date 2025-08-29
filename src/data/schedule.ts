export type Activity = {
  id: string;
  title: string;
  start: string; // HH:mm
  end?: string;
  date: string; // YYYY-MM-DD
  location?: string;
  description?: string;
  speakers?: { name: string; photo?: string }[];
};

export const DAYS = [
  { label: 'Quarta, 22/10', value: '2025-10-22' },
  { label: 'Quinta, 23/10', value: '2025-10-23' },
  { label: 'Sexta, 24/10', value: '2025-10-24' }
];

export const ACTIVITIES: Activity[] = [
  // Quarta-feira, 22/10/2025
  { id: 'qua-0800-credenciamento', title: 'Credenciamento', start: '08:00', end: '08:30', date: '2025-10-22' },
  {
    id: 'qua-1000-minicurso',
    title: 'Minicurso',
    start: '10:00',
    end: '12:00',
    date: '2025-10-22',
    description: 'Título: Distributional regression using gamlss2',
    speakers: [
      { name: 'Dimitrios Mikis Stasinopoulos, University of Greenwich, Reino Unido' }
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
    description: 'Título: A definir',
    speakers: [
      { name: 'Thelma Krug, Presidenta do Comitê Diretor do Sistema Global de Observações para o Clima - GCOS' }
    ]
  },
  { id: 'qua-1530-coffee', title: 'Coffee Break', start: '15:30', end: '16:00', date: '2025-10-22' },
  {
    id: 'qua-1630-mini-1',
    title: 'Mini-Conferência 1',
    start: '16:30',
    end: '17:00',
    date: '2025-10-22',
    description: 'Métodos de Regularização em Modelos Mistos de Alta Dimensão no Contexto das Mudanças Climáticas',
    speakers: [
      { name: 'Daniela Carine Ramires de Oliveira, Universidade Federal de São João del-Rei' }
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
      { name: 'Michel Eustáquio Dantas Chaves, Universidade Estadual Paulista' }
    ]
  },
  { id: 'qua-1730-com-orais-1', title: 'Comunicações Orais 1', start: '17:30', end: '18:30', date: '2025-10-22' },

  // Quinta-feira, 23/10/2025
  { id: 'sex-0800-sessao-tematica-1', title: 'Sessão Temática 1', start: '08:00', end: '08:30', date: '2025-10-23' },
  { id: 'sex-0900-sessao-tematica-2', title: 'Sessão Temática 2', start: '09:00', end: '10:30', date: '2025-10-23' },
  { id: 'sex-1030-coffee', title: 'Coffee Break', start: '10:30', end: '11:00', date: '2025-10-23' },
  { id: 'sex-1100-almoco', title: 'Almoço', start: '11:00', end: '12:00', date: '2025-10-23' },
  { id: 'sex-1200-conf-1', title: 'Conferência 1', start: '12:00', end: '13:30', date: '2025-10-23' },
  { id: 'sex-1400-conf-2', title: 'Conferência 2', start: '14:00', end: '14:30', date: '2025-10-23' },
  { id: 'sex-1500-coffee', title: 'Coffee Break', start: '15:00', end: '15:30', date: '2025-10-23' },
  { id: 'sex-1630-mini-3', title: 'Mini-Conferência 3', start: '16:30', end: '17:00', date: '2025-10-23' },
  { id: 'sex-1700-mini-4', title: 'Mini-Conferência 4', start: '17:00', end: '17:30', date: '2025-10-23' },
  { id: 'sex-1730-com-orais-2', title: 'Comunicações Orais 2', start: '17:30', end: '18:00', date: '2025-10-23' },
  { id: 'sex-1900-happy-hour', title: 'Happy hour com R-Ladies e PyLadies', start: '19:00', end: '20:00', date: '2025-10-23' },
  { id: 'sex-2000-confraternizacao', title: 'Confraternização', start: '20:00', date: '2025-10-23' },

  // Sexta-feira, 24/10/2025
  { id: 'sab-0800-sessao-poster', title: 'Sessão Pôster', start: '08:00', end: '09:00', date: '2025-10-24' },
  { id: 'sab-0900-coffee', title: 'Coffee Break', start: '09:00', end: '09:30', date: '2025-10-24' },
  { id: 'sab-0930-conf-3', title: 'Conferência 3', start: '09:30', end: '10:00', date: '2025-10-24' },
  { id: 'sab-1000-conf-enc', title: 'Conferência de Encerramento', start: '10:00', end: '10:30', date: '2025-10-24' },
  { id: 'sab-1030-encerramento', title: 'Encerramento', start: '10:30', end: '11:00', date: '2025-10-24' }
];


