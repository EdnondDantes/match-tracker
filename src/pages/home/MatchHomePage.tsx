import React, { useState, useEffect } from 'react';
import styles from './MatchHomePage.module.css';
import { fetchMatches } from '@/shared/api/api';
import { Match } from '@/entities/Match/model';
import { RefreshButton } from '@/features/RefreshMatches/RefreshButton';
import { LoadingIndicator } from '@/shared/ui/LoadingIndicator/LoadingIndicator';
import { ErrorMessage } from '@/shared/ui/ErrorMassage/ErrorMassage';
import { MatchList } from '@/widgets/MatchList/MatchList';

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
    <div className="container">
      <div className="header">
        <h1>Матч-трекер</h1>
        <RefreshButton onClick={loadData} />
      </div>
      
      {loading && <LoadingIndicator />}
      
      {error && <ErrorMessage />}
      
      {!loading && !error && <MatchList matches={matches} />}
    </div>
  );
};