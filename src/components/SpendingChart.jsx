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

const Pie = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: ${({ gradient }) => gradient};
  box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.border};
`;

const Legend = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({ theme }) => theme.colors.blue900};
  font-weight: 600;
`;

const Swatch = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

export function SpendingChart({ items, variant = "bar" }) {
  if (variant === "pie") {
    const total = items.reduce((sum, item) => sum + item.value, 0);
    let startAngle = 0;
    const segments = items.map((item) => {
      const angle = (item.value / total) * 360;
      const segment = `${item.color} ${startAngle}deg ${startAngle + angle}deg`;
      startAngle += angle;
      return segment;
    });

    const gradient = `conic-gradient(${segments.join(", ")})`;

    return (
      <Chart>
        <Pie gradient={gradient} />
        <Legend>
          {items.map((item) => (
            <LegendItem key={item.label}>
              <Swatch color={item.color} />
              <span>
                {item.label} ({item.value}%)
              </span>
            </LegendItem>
          ))}
        </Legend>
      </Chart>
    );
  }

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
