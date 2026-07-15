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

  ${({ variant = "primary" }) => looks[variant]}
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Balance = styled.strong`
  align-self: end;
  font-size: 2rem;
`;

const Muted = styled.span`
  opacity: 0.76;
`;

export function AccountCard({ name, number, balance, change, variant }) {
  return (
    <Wrapper variant={variant}>
      <TopLine>
        <strong>{name}</strong>
        <Muted>•• {number}</Muted>
      </TopLine>
      <Balance>{balance}</Balance>
      <Muted>{change}</Muted>
    </Wrapper>
  );
}
