import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.lg};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.space.xl} 0;
`;

const Text = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xs};
  max-width: 720px;
`;

const Eyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.green700};
  font-size: 0.25rem;
  font-weight: 700;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.blue900};
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.05;
`;
const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.05rem;
  line-height: 1.6;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  flex-wrap: wrap;
`;

export function PageHeader({ eyebrow, title, description, actions }) {
  return (
    <Wrapper>
      <Text>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Text>

      {actions && <Actions>{actions}</Actions>}
    </Wrapper>
  );
}
