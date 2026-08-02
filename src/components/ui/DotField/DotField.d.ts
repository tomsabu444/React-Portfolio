import type { HTMLAttributes, MemoExoticComponent, ReactElement } from "react";

export interface DotFieldProps extends HTMLAttributes<HTMLDivElement> {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
  interactive?: boolean;
}

declare const DotField: MemoExoticComponent<(props: DotFieldProps) => ReactElement>;

export default DotField;
