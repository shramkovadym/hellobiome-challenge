import { Microbe } from '@/types/microbe';

export const microbesData: Microbe[] = [
  // data from the example
  {
    id: 'm1',
    name: 'Cutibacterium acnes',
    type: 'bacteria',
    abundance: 32,
    role: 'beneficial',
  },
  {
    id: 'm2',
    name: 'Staphylococcus epidermidis',
    type: 'bacteria',
    abundance: 24,
    role: 'beneficial',
  },
  {
    id: 'm3',
    name: 'Malassezia globosa',
    type: 'fungi',
    abundance: 18,
    role: 'neutral',
  },
  {
    id: 'm4',
    name: 'Candida albicans',
    type: 'fungi',
    abundance: 6,
    role: 'pathogenic',
  },
  // data for better ilustration in UI
  {
    id: 'm5',
    name: 'Staphylococcus aureus',
    type: 'bacteria',
    abundance: 5,
    role: 'pathogenic',
  },
  {
    id: 'm6',
    name: 'Corynebacterium striatum',
    type: 'bacteria',
    abundance: 10,
    role: 'neutral',
  },
  {
    id: 'm7',
    name: 'Malassezia restricta',
    type: 'fungi',
    abundance: 5,
    role: 'neutral',
  },
];
