export type MatchStatusType = 'Scheduled' | 'Ongoing' | 'Finished';

export interface Match {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatusType;
}

export interface Team {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
}

export interface Player {
  username: string;
  kills: number;
}