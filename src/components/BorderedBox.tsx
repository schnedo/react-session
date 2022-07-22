import React, { CSSProperties, ReactNode } from "react";

const borderedBoxStyle: CSSProperties = {
  border: "solid black 5px",
  borderRadius: "5px",
};

interface BorderedBoxProps {
  children: ReactNode;
}

export default function BorderedBox({ children }: BorderedBoxProps) {
  return <div style={borderedBoxStyle}>{children}</div>;
}
