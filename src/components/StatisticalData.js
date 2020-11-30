import PropTypes from 'prop-types';
import StatisticalDataItem from './StatisticalDataItem';
export default function StatisticalData({stats}) {
  return (
    <section className="statistics">
    <h2 className="title">Upload stats</h2>

    <ul className="stat-list">
      {stats.map(data => (
        <li className="item" key={data.id}>
          <StatisticalDataItem
            label={data.label}
            percentage={data.percentage}
          />
        </li>
      ))}
    </ul>
    </section>
  );
}
