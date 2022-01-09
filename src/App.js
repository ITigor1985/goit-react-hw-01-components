import user from "./components/Profile/user.json";
import data from "./components/Statistics/data.json";
import friends from "./components/FriendList/Friends.json";
import transactions from "./components/TransactionHistory/transactions.json";
import Profile from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import { Container } from "./App.styled";

function App() {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
