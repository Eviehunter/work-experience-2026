import styled from "styled-components";

const Wrapper = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.space.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ $elevated, theme }) => ($elevated ? theme.shadow : "none")};
`;

const Label = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.blue900};
  font-size: 0.9rem;
  font-weight: 700;
`;

const Value = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.blue900};
  font-size: 2rem;
  font-weight: 500;
  line-height: 0.1;
`;

const Helper = styled.p`
  margin: 0;
  color: ${({ $tone, theme }) =>
    $tone === "warning"
      ? theme.colors.red500
      : $tone === "info"
        ? theme.colors.blue900
        : theme.colors.green700};
  font-size: 0.9rem;
  font-weight: 700;
`;

export function StatCard({
  label,
  value,
  helperText,
  tone = "positive",
  elevated = false,
}) {
  return (
    <Wrapper $elevated={elevated}>
      <Label>{label}</Label>
      <Value>{value}</Value>
      {helperText && <Helper $tone={tone}>{helperText}</Helper>}
    </Wrapper>
  );
}
