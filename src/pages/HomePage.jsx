import { useTheme } from "styled-components";
import { AccountCard, Main, Navbar } from "../components";

export function HomePage() {
  const theme = useTheme();

  return (
    <>
      <Navbar bankName="My Bank" onDashboardClick={() => {}} color={theme.colors.blue900} />
      <Main aria-label="Student workspace">
        <h1
          style={{
            textAlign: "left",
            fontSize: "60px",
            margin: "20px 0 20px 20px",
            alignSelf: "flex-start",
          }}
        >
          Welcome,
        </h1>

        <AccountCard variant="midnight" balance={1000} name="Current account" />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "20px",
            marginTop: "30px",
            width: "100%",
            paddingLeft: "20px",
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "36px",
              fontWeight: "700",
              fontFamily: "Helvetica, sans-serif",
              letterSpacing: "0.5px",
              color: "#333",
            }}
          >
            Quick Send
          </h2>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <img
              src="https://i.pinimg.com/236x/16/d9/53/16d9530d3892d479bb882d898c2b5264.jpg"
              alt="Profile 1"
              style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnggFqn8KkbrpB71ikivex_L83urBoKZN2dh_tslsJLeSfDuOU6umtUIPZ&s=10"
              alt="Profile 2"
              style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTq3NGO7aMa6QhSuSzqPOfSpe0IqhA0dDNtQ5QrnluHN0JQ-YbYbOmLqI9&s=10"
              alt="Profile 3"
              style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vBpJ5QzM8p9XLQyvhHhp-d1E265vT5JeS7Z9sumjY3LIqmVtZJLNMcZC&s=10"
              alt="Profile 4"
              style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdA9YBhQd3k6EHyPPxU-5N16eVMy9Bx5b4ZvuzfNcy_LWSr6peKfjmNAQ&s=10"
              alt="Profile 5"
              style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
            />

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wtllfFozQH8alfOiE0FNnTo5w5t13JA35cQcEYSIJDe1WVkT-cIgBzI&s=10"
              alt="Profile 6"
              style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover" }}
            />

            <img
              src="https://www.svgrepo.com/show/326463/add-circle-outline.svg"
              alt="Add contact"
              style={{ width: "60px", height: "60px" }}
            />
          </div>
        </div>
      </Main>
    </>
  );
}
