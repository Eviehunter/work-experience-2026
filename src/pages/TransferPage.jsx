import { useTheme } from "styled-components";
import { AccountCard, Main, Navbar } from "../components";

export function TransferPage() {
  const theme = useTheme();

  return (
    <Main>
      <Navbar bankName="My Bank" 
      onDashboardClick={() => {}} 
      color={theme.colors.blue900} 
      />

 <div
        style={{
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <button
          style={{
            backgroundColor: "#003087",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "15px 40px",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Send Money To
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            maxWidth: "700px",
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
  );
  }