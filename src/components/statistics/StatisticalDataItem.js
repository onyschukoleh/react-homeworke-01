import PropTypes from 'prop-types';

export default function StatisticalDataItem({ label, percentage }) {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
  );
}

StatisticalDataItem.protoType = {
  item: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
