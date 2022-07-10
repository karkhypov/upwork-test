import Button from '../../components/button/button.component';
import LineChart from '../../components/line-chart/line-chart.component';

import data from '../../data.json';

import './chatr-page.styles.css';

const ChartPage = () => {
  return (
    <div className='chart-page'>
      <h2 className='chart-page-header'>upworkTest</h2>
      <LineChart label='Patients 2022' data={data} />
      <div className='chart-page-button'>
        <Button label='Sign Out' className='chart-page-button' />
      </div>
    </div>
  );
};

export default ChartPage;
