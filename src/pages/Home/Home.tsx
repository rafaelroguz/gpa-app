import React, { useMemo } from 'react';
import PresenceShareSection from '../../components/PresenceShare';
import PriceEvolutionSection from '../../components/PriceEvolution';
import Table, { Row } from '../../components/Table/Table';
import { useGetComparativeAnalysis } from '../../hooks/useGetComparativeAnalysis';
import { useGetPresenceShare } from '../../hooks/useGetPresenceShare';
import { useGetPriceEvolution } from '../../hooks/useGetPriceEvolution';
import { formatToCurrency } from '../../utils/currencyUtils';
import {
  ChartsContainer,
  Container,
  ImageCell,
  MainTitle,
  PresenceCell,
  SectionTitle,
  TableContainer,
} from './Home.styled';
import { columns } from './utils';

const Home: React.FC = () => {
  const { data: comparativeAnalysisData } = useGetComparativeAnalysis();
  const { data: presenceShareData } = useGetPresenceShare();
  const { data: priceEvolutionData } = useGetPriceEvolution();

  const rows: Row[] = useMemo(
    () =>
      comparativeAnalysisData.map(
        ({
          averagePosition,
          averagePrice,
          id,
          name,
          persistence,
          productImage,
          sku,
        }) => {
          const image = <ImageCell alt={name} src={productImage} />;
          const presencePercentage = (
            <PresenceCell $isPositive={persistence >= 0}>
              {`${Math.abs(persistence * 100)}%`}
            </PresenceCell>
          );
          return {
            id,
            cellData: [
              image,
              name,
              sku,
              presencePercentage,
              formatToCurrency(averagePrice),
              averagePosition,
            ],
          };
        },
      ),
    [comparativeAnalysisData],
  );

  return (
    <Container>
      <MainTitle>General Performance Analysis</MainTitle>
      <ChartsContainer>
        <PriceEvolutionSection data={priceEvolutionData} />
        <PresenceShareSection data={presenceShareData} />
      </ChartsContainer>
      <TableContainer>
        <SectionTitle>Comparative Analysis</SectionTitle>
        <Table columns={columns} rows={rows} />
      </TableContainer>
    </Container>
  );
};

export default Home;
