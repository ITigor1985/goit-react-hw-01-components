import PropTypes from "prop-types";
import { StatItem } from "./StatisticsItem.styled";

const StatisticsItem = ({ stats }) => {
  return stats.map((state) => (
    <StatItem key={state.id}>
      <span className="label">{state.label}</span>
      <span className="percentage">{state.percentage}%</span>
    </StatItem>
  ));
};
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
