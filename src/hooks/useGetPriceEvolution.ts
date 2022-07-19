import { useEffect, useState } from 'react';
import { PriceEvolution } from '../models/PriceEvolution';

interface State {
  data: PriceEvolution[];
  isLoading: boolean;
}

export const useGetPriceEvolution = () => {
  const [priceEvolution, setPriceEvolution] = useState<State>(() => ({
    data: [],
    isLoading: true,
  }));

  useEffect(() => {
    const controller = new AbortController();
    const getPriceEvolution = async () => {
      try {
        setPriceEvolution({ data: [], isLoading: true });

        const response = await fetch(
          'https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart/',
        );
        const data = await response.json();

        setPriceEvolution({ data, isLoading: false });
      } catch (err) {
        setPriceEvolution({ data: [], isLoading: false });
        console.error(err);
      }
    };

    getPriceEvolution();

    return () => {
      controller.abort();
    };
  }, []);

  return priceEvolution;
};
