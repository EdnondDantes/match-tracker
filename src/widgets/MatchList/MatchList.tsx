import { Match } from '@/entities/Match/model';
import teamLogos from '@/assets/icon.svg'; 
import styles from './MatchList.module.css';
import { MatchStatus } from '../MatchStatus/MatchStatus';

export const MatchList = ({ matches }: { matches: Match[] }) => (
  <div className={styles.container}>
    {matches.map((match) => (
      <div key={match.title} className={styles.matchCard}>
        <div className={styles.team}>
          <img 
            src={teamLogos} 
            alt={match.homeTeam.name} 
            className={styles.teamLogo} 
          />
          <span>{match.homeTeam.name}</span>
        </div>

        <div className={styles.matchInfo}>
          <span className={styles.score}>{match.homeScore} - {match.awayScore}</span>
          <MatchStatus status={match.status} />
        </div>

        <div className={styles.team}>
          <span>{match.awayTeam.name}</span>
          <img 
            src={teamLogos} 
            alt={match.awayTeam.name} 
            className={styles.teamLogo} 
          />
        </div>
      </div>
    ))}
  </div>
);
