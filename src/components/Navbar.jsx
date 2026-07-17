import { Landmark } from "lucide-react";
import styled from "styled-components";
import { Button } from "./Button";

const Bar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem clamp(1rem, 4vw, 3rem);
  background: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Brand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 800;
  color: ${({ theme, $color }) => $color || theme.colors.green900};
`;

const Links = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 680px) {
    display: none;
  }
`;

const LinkText = styled.a`
  color: ${({ theme, $color }) => $color || theme.colors.muted};
  font-weight: 700;
  text-decoration: none;
`;

export function Navbar({ bankName, onDashboardClick, color }) {
  return (
    <Bar>
      <Brand $color={color}>
        <Landmark size={24} />
        {bankName}
      </Brand>
      <Links aria-label="Main navigation">
        <LinkText $color={color} href="/">
          Home
        </LinkText>
        <LinkText $color={color} href="#spending">Spending</LinkText>
        <LinkText $color={color} href="#transfer">Transfer</LinkText>
        <LinkText $color={color} href="/savings">Savings</LinkText>
        <LinkText $color={color} href="/travel-money">Travel Money</LinkText>
      </Links>
      <Button variant="secondary" onClick={onDashboardClick}>
        Dashboard
      </Button>
    </Bar>
  );
}
