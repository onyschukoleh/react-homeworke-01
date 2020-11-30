import PropTypes from 'prop-types';

export default function StatisticalDataItem ({ label, percentage }) {
  return (
    
      <ul className="stat-list">
        <li className="item">
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
           
    </ul>
  );
}

StatisticalDataItem.protoType = {
    item : PropTypes.string,
    label :PropTypes.string,
    percentage : PropTypes.number,
}
