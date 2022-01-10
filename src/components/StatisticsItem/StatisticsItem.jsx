import PropTypes from "prop-types";
import { StatItem } from "./StatisticsItem.styled";

const StatisticsItem = ({ stats }) => {
  return stats.map(({ id, label, percentage }) => (
    <StatItem key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatItem>
  ));
};
export default StatisticsItem;

StatisticsItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
