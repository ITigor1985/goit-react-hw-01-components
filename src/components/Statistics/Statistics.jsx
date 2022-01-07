import PropTypes from "prop-types";
import StatisticsItem from '../StatisticsItem/StatisticsItem';

export const Statistics = ({title, stats}) =>{
return (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>} 
    <ul className="stat-list">
    <StatisticsItem stats={stats}/> 
    </ul> 
  </section>
)
}




Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};