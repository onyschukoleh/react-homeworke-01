import StatisticalDataItem from './StatisticalDataItem';
import stats from '..';
export default function StatisticalData({ stats }) {
  return (
    <ul className="stat-list">
      fdgdsfgsdf
      {stats.map(data => (
        <li className="item" key={data.id}>
          <StatisticalDataItem
            label={data.label}
            percentage={data.percentage}
          />
        </li>
      ))}
    </ul>
  );
}
