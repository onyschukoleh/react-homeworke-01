import PropTypes from 'prop-types';
// import StatisticalData from './StatisticalData';
export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2>{title}</h2>}
      {stats}
    </section>
  );
}

Statistics.PropType = {
  title: PropTypes.string,
};
