export type Item = {
  item_id: number;
  item_name: string;
  price: number;
  stock_quantity: number;
};

export type Player = {
  player_id: number;
  player_name: string;
  age: number;
  nationality: string;
  position: string;
  team_id: number;
};

export type Team = {
  team_id: number;
  team_name: string;
  coach_name: string;
  established_year: number;
  home_city: string;
};

export type Venue = {
  venue_id: number;
  venue_name: string;
  capacity: number;
};

export type Stats = {
  stats_id: number;
  goals: number;
  player_id: number;
  matches_played: number;
};
