import { useEffect, useState } from 'react';
import { PresenceShare } from '../models/PresenceShare';

interface State {
  data: PresenceShare[];
  isLoading: boolean;
}

export const useGetPresenceShare = () => {
  const [presenceShare, setPresenceShare] = useState<State>(() => ({
    data: [],
    isLoading: true,
  }));

  useEffect(() => {
    const controller = new AbortController();
    const getPresenceShare = async () => {
      try {
        setPresenceShare({ data: [], isLoading: true });

        const response = await fetch(
          'https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/',
        );
        const data = await response.json();

        setPresenceShare({ data, isLoading: false });
      } catch (err) {
        setPresenceShare({ data: [], isLoading: false });
        console.error(err);
      }
    };

    getPresenceShare();

    return () => {
      controller.abort();
    };
  }, []);

  return presenceShare;
};
