import { format } from 'date-fns';
import { groupBy } from 'lodash';
import React, { useMemo } from 'react';
import Chart from 'react-apexcharts';
import { PriceEvolution } from '../../models/PriceEvolution';
import { Card, Container, SectionTitle } from './PriceEvolution.styled';

interface Props {
  data: PriceEvolution[];
}

const PriceEvolutionSection: React.FC<Props> = ({ data }) => {
  const series = useMemo(() => {
    const groupedData = groupBy(data, 'sku');
    const mappedData: Array<{ name: string; data: number[] }> = [];

    Object.keys(groupedData).forEach((itemKey) => {
      const currentValues = groupedData[itemKey];
      mappedData.push({
        name: currentValues[0].name,
        data: currentValues.map(({ price }) => price),
      });
    });

    return mappedData;
  }, [data]);

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    grid: {
      row: {
        colors: ['#F8F8F8', 'transparent'],
      },
    },
    xaxis: {
      categories: data.map(({ dateExtraction }) =>
        format(new Date(dateExtraction), 'MMM d'),
      ),
    },
    yaxis: {
      min: 15,
      max: 35,
    },
    responsive: [
      {
        breakpoint: 750,
        options: {
          chart: {
            width: 500,
          },
        },
      },
      {
        breakpoint: 600,
        options: {
          chart: {
            width: 400,
          },
        },
      },
    ],
  };

  return (
    <Container>
      <SectionTitle>Price Evolution</SectionTitle>
      <Card>
        <Chart
          options={options}
          series={series}
          type='line'
          width={600}
          // height={350}
        />
      </Card>
    </Container>
  );
};

export default PriceEvolutionSection;
