import { useTheme } from "styled-components";
import { Main, Navbar, TransactionList } from "../components";
import { SpendingChart } from "../components/SpendingChart";

const spendingItems = [
  { label: "Groceries", value: 35, color: "#2f6fed" },
  { label: "Travel", value: 20, color: "#24a148" },
  { label: "Entertainment", value: 15, color: "#ffb800" },
  { label: "Shopping", value: 30, color: "#d13438" },
];

const dummyTransactions = [
  { shop: "Waitrose", date: "12 Jul", type: "Groceries", amount: "-£42.80" },
  { shop: "Trainline", date: "10 Jul", type: "Travel", amount: "-£18.50" },
  { shop: "Spotify", date: "08 Jul", type: "Entertainment", amount: "-£9.99" },
  { shop: "Salary", date: "01 Jul", type: "Income", amount: "+£2,000.00" },
];

const monthlyIncome = [
  { month: "Jan", amount: "£3,200" },
  { month: "Feb", amount: "£3,250" },
  { month: "Mar", amount: "£3,180" },
  { month: "Apr", amount: "£3,400" },
];

const monthlyRent = [
  { month: "Jan", amount: "£1,050" },
  { month: "Feb", amount: "£1,050" },
  { month: "Mar", amount: "£1,080" },
  { month: "Apr", amount: "£1,050" },
];

export function SpendingsPage() {
  const theme = useTheme();

  return (
    <>
      <Navbar bankName="My Bank" onDashboardClick={() => {}} color={theme.colors.blue900} />
      <Main aria-label="Spending page">
        <h1 style={{ marginBottom: "0.5rem" }}>Spending</h1>
        <p style={{ marginBottom: "1.5rem" }}>Here’s a breakdown of your recent spending.</p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            alignItems: "flex-start",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              maxWidth: "480px",
              padding: "1.25rem",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              background: "white",
            }}
          >
            <SpendingChart items={spendingItems} variant="pie" />
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div
              style={{
                minWidth: "220px",
                padding: "1.25rem",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                background: "white",
              }}
            >
              <h3 style={{ margin: "0 0 0.75rem" }}>Monthly Salary Income</h3>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ textAlign: "left", color: "#6b7280" }}>
                    <th style={{ paddingBottom: "0.5rem" }}>Month</th>
                    <th style={{ paddingBottom: "0.5rem" }}>Income</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyIncome.map((item) => (
                    <tr key={item.month}>
                      <td style={{ padding: "0.35rem 0" }}>{item.month}</td>
                      <td style={{ padding: "0.35rem 0", fontWeight: 600 }}>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              style={{
                minWidth: "220px",
                padding: "1.25rem",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                background: "white",
              }}
            >
              <h3 style={{ margin: "0 0 0.75rem" }}>Monthly Rent</h3>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ textAlign: "left", color: "#6b7280" }}>
                    <th style={{ paddingBottom: "0.5rem" }}>Month</th>
                    <th style={{ paddingBottom: "0.5rem" }}>Rent</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyRent.map((item) => (
                    <tr key={item.month}>
                      <td style={{ padding: "0.35rem 0" }}>{item.month}</td>
                      <td style={{ padding: "0.35rem 0", fontWeight: 600 }}>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <TransactionList transactions={dummyTransactions} />
      </Main>
    </>
  );
}
