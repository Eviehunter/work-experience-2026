import styled from "styled-components";
import { Badge } from "./Badge";

const List = styled.div`
  display: grid;
  gap: 0.8rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 0.8rem;

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

const Details = styled.div`
  display: grid;
  gap: 0.25rem;
`;

const Meta = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
`;

const Amount = styled.strong`
  color: ${({ positive, theme }) =>
    positive ? theme.colors.green700 : theme.colors.ink};
`;

export function TransactionList({ transactions }) {
  return (
    <List>
      {transactions.map((transaction) => (
        <Row key={`${transaction.shop}-${transaction.date}`}>
          <Details>
            <strong>{transaction.shop}</strong>
            <Meta>
              {transaction.date} · {transaction.type}
            </Meta>
          </Details>
          <Amount positive={transaction.amount.startsWith("+")}>
            {transaction.amount}
          </Amount>
        </Row>
      ))}
      <Badge tone="blue">Your Transactions</Badge>
    </List>
    
  );

}
