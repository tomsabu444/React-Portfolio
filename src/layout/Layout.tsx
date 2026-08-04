import type { ReactNode } from "react";

import DotField from "@/components/ui/DotField/DotField";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-background"
        aria-hidden="true"
      >
        <DotField
          dotRadius={1}
          dotSpacing={15}
          cursorRadius={0}
          cursorForce={0}
          bulgeOnly={false}
          bulgeStrength={67}
          glowRadius={0}
          sparkle={false}
          waveAmplitude={0.7}
          gradientFrom="#303030"
          gradientTo="#303030"
          glowColor="#ffffff"
          interactive={false}
        />
      </div>
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
