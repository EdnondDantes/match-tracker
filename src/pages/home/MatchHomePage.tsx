import React, { useState, useEffect } from 'react';
import styles from './MatchHomePage.module.css';
import { fetchMatches } from '@/shared/api/api';
import { Match } from '@/entities/Match/model';
import { RefreshButton } from '@/features/RefreshMatches/RefreshButton';
import { ErrorMessage } from '@/shared/ui/ErrorMassage/ErrorMassage';
import { MatchList } from '@/widgets/MatchList/MatchList';
import { LoadingPlaceholder } from '@/shared/ui/LoadingPlaceholder/LoadingPlaceholder';

export const MatchHomePage = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(false);
      const data = await fetchMatches();
      setMatches(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Match Tracker</h1>
        <div className={styles.buttonContainer}>
          {error && <ErrorMessage />}
          <RefreshButton loading={loading} setLoading={setLoading} onClick={loadData} />
        </div>
      </div>
      
      {loading && <LoadingPlaceholder />}
      
      {!loading && !error && <MatchList matches={matches} />}
    </div>
  );
};
