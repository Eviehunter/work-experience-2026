import styled, { css } from "styled-components";

const looks = {
  primary: css`
    color: white;
    background: ${({ theme }) => theme.colors.green700};
  `,
  sunny: css`
    color: ${({ theme }) => theme.colors.ink};
    background: ${({ theme }) => theme.colors.yellow500};
  `,
  midnight: css`
    color: white;
    background: ${({ theme }) => theme.colors.blue900};
  `,
};

const Wrapper = styled.article`
  display: grid;
  gap: 1rem;
  min-height: 10px;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadow};
  position: relative;
  overflow: hidden;
  border-radius: 16px;

  ${({ variant = "primary" }) => looks[variant]}
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.0rem;

  position: relative;
`;

const Balance = styled.strong`
  position: absolute;
  right: 1.2rem;
  bottom: -0.1rem;

  font-size: 1.8rem;
`;

const Muted = styled.span`
  opacity: 0.76;

  position: relative;
`;

export function AccountCard({ name, number, balance, change, variant }) {
  return (
    <Wrapper variant={variant}>
  <img
    src="https://img.magnific.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg?semt=ais_hybrid&w=740&q=80"
    alt="Bank app background"
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    }}
  />
    <TopLine>
    <strong>{name}</strong>
    <Muted>•• {number}</Muted>
  </TopLine>

  <Balance>{balance}</Balance>

  <Muted>{change}</Muted>
    </Wrapper>
  );
}
