import React from 'react';
import Chart from 'react-apexcharts';
import { PresenceShare } from '../../models/PresenceShare';
import { Card, Container, SectionTitle } from './PresenceShare.styled';

interface Props {
  data: PresenceShare[];
}

const PresenceShareSection: React.FC<Props> = ({ data }) => {
  const options = {
    dataLabels: {
      enabled: false,
    },
    labels: data.map(({ name }) => name),
    responsive: [
      {
        breakpoint: 1280,
        options: {
          chart: {
            width: 400,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };
  const series = data.map(({ presenceShare }) => presenceShare);

  return (
    <Container>
      <SectionTitle>Presence Share by Product</SectionTitle>
      <Card>
        <Chart options={options} series={series} type='pie' width={450} />
      </Card>
    </Container>
  );
};

export default PresenceShareSection;
