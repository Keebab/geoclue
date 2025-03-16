export interface Country {
  name: string;
  code: string;
  capital: string;
  latitude: number;
  longitude: number;
  continent: string;
  population: number;
}

export interface Clue {
  id: number;
  text: string;
  difficulty: number;
}

export type GameMode = 'daily' | 'practice' | 'timeAttack';