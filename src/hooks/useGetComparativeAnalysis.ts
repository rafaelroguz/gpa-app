import { useEffect, useState } from 'react';
import { ComparativeAnalysis } from '../models/ComparativeAnalysis';

interface State {
  data: ComparativeAnalysis[];
  isLoading: boolean;
}

export const useGetComparativeAnalysis = () => {
  const [comparativeAnalysis, setComparativeAnalysis] = useState<State>(() => ({
    data: [],
    isLoading: true,
  }));

  useEffect(() => {
    const controller = new AbortController();
    const getComparativeAnalysis = async () => {
      try {
        setComparativeAnalysis({ data: [], isLoading: true });

        const response = await fetch(
          'https://atlantia-dev-test.herokuapp.com/api/beer-products/',
        );
        const data = await response.json();

        setComparativeAnalysis({ data, isLoading: false });
      } catch (err) {
        setComparativeAnalysis({ data: [], isLoading: false });
        console.error(err);
      }
    };

    getComparativeAnalysis();

    return () => {
      controller.abort();
    };
  }, []);

  return comparativeAnalysis;
};
