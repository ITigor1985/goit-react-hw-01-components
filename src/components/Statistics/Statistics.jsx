import PropTypes from "prop-types";
import StatisticsItem from "../StatisticsItem/StatisticsItem";
import { StatisticsSection, Title, StatList } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>
        <StatisticsItem stats={stats} />
      </StatList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
