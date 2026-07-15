import styled from "styled-components";

const Chart = styled.div`
  display: grid;
  gap: 0.9rem;
`;

const Row = styled.div`
  display: grid;
  gap: 0.35rem;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.blue900};
  font-weight: 700;
`;

const Track = styled.div`
  height: 10px;
  overflow: hidden;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.border};
`;

const Fill = styled.div`
  width: ${({ value }) => value}%;
  height: 100%;
  background: ${({ color }) => color};
`;

export function SpendingChart({ items }) {
  return (
    <Chart>
      {items.map((item) => (
        <Row key={item.label}>
          <Label>
            <span>{item.label}</span>
            <span>{item.value}%</span>
          </Label>
          <Track>
            <Fill value={item.value} color={item.color} />
          </Track>
        </Row>
      ))}
    </Chart>
  );
}
