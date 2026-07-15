import { Navbar, FeatureGrid } from "../components";
import { useTheme } from "styled-components";
import styled from "styled-components";

const Heading = styled.h1`
  margin: 0 0 1rem 0;
  color: ${({ theme }) => theme.colors.blue900};
`;
export function TravelMoneyPage() {
  const theme = useTheme();

  return(
    <>
     <Navbar bankName="My Bank" onDashboardClick={() => {}} color={theme.colors.blue900} />
    <div>
      <Heading>Travel Money</Heading>
    </div>
    {/* pass navbar color from theme */}
    <FeatureGrid features={[
        { title: "Dollars", text: "1.00 GBP = 1.34290580 USD Mid-market rate at 13:23 UTC" },
        { title: "Euros", text: "1.00 GBP = 1.17495623 EUR Mid-market rate at 13:24 UTC" },
        { title: "Rupees", text: "1.00 GBP = 98.50 INR Mid-market rate at 13:25 UTC" },
        {title: "Yen", text: "1.00 GBP = 187.50 JPY Mid-market rate at 13:26 UTC" },
        {title: "Australian Dollars", text: "1.00 GBP = 1.85 AUD Mid-market rate at 13:27 UTC" },
        {title: "Canadian Dollars", text: "1.00 GBP = 1.70 CAD Mid-market rate at 13:28 UTC" },
        
      ]} /> 
   
    </>

  );
    

}