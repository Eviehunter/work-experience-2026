import { AccountCard, PageHeader, Main, TransactionList, SavingsGoal, Dashboard, SpendingChart, Navbar, StatCard } from "../components";
import { useTheme } from "styled-components";
import styled from "styled-components";

const PageWrapper = styled.div`
  color: ${({ theme }) => theme.colors.blue900};
`;

export function HomePage() {
  const theme = useTheme();
  return <Main aria-label="Student workspace">
    <Navbar bankName="My Bank" onDashboardClick={() => {}} color={theme.colors.blue900} />
    <PageWrapper>
      <PageHeader title="My Savings Account"/>
      <AccountCard name="Savings Balance:" balance={"£3000"} number="Account number:123456789"/>
      <SavingsGoal name="Your savings goal" target={5000} saved={3000}/>
      <SpendingChart items={[
        { label: "Food", value: 30, color: "#FF6384" },
        { label: "Transport", value: 20, color: "#36A2EB" },
        { label: "Entertainment", value: 25, color: "#FFCE56" },
        { label: "Utilities", value: 25, color: "#4BC0C0" },
      ]} />

      <StatCard label="Highest consumption"  value="Food: £150"/>
    </PageWrapper>
  </Main>;
}
