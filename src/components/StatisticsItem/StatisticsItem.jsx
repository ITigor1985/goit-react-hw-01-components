import PropTypes from "prop-types";

const StatisticsItem = ({stats}) => {
    return stats.map (state => 
            <li className="item" key={state.id}>
            <span className="label">{state.label}</span>
            <span className="percentage">{state.percentage}%</span>
            </li>  
    )
}
export default StatisticsItem;

StatisticsItem.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ),
  };