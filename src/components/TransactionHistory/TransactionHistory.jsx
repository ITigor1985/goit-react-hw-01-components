import PropTypes from "prop-types";
import {
  TableTransactionHistory,
  TableColumnTitle,
  TableRow,
  TableBody,
} from "./TransactionHistory.styled";

const TransactionHistory = ({ items }) => {
  return (
    <TableTransactionHistory>
      <thead>
        <TableRow>
          <TableColumnTitle>Type</TableColumnTitle>
          <TableColumnTitle>Amount</TableColumnTitle>
          <TableColumnTitle>Currency</TableColumnTitle>
        </TableRow>
      </thead>

      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TableRow>
        ))}
      </TableBody>
    </TableTransactionHistory>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
