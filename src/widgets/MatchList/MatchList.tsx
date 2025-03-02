import { Match } from '@/entities/Match/model';
import styles from './MatchList.module.css';

const MatchStatusLabel: Record<Match['status'], string> = {
  Scheduled: 'Запланирован',
  Ongoing: 'В процессе',
  Finished: 'Завершен',
};

export const MatchList = ({ matches }: { matches: Match[] }) => (
  <div className={styles.container}>
    {matches.map((match) => (
      <div key={match.title} className={styles.matchCard}>
        <div className={styles.matchHeader}>
          <span>{new Date(match.time).toLocaleTimeString()}</span>
          <h3>{match.title}</h3>
        </div>
        
        <div className={styles.teamsContainer}>
          <div className={styles.team}>
            <span>{match.homeTeam.name}</span>
            <span>{match.homeScore}</span>
          </div>
          
          <div className={styles.vs}>vs</div>
          
          <div className={styles.team}>
            <span>{match.awayTeam.name}</span>
            <span>{match.awayScore}</span>
          </div>
        </div>
        
        <div className={styles.status}>
          {MatchStatusLabel[match.status]}
        </div>
      </div>
    ))}
  </div>
);