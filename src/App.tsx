import DotField from "@/components/ui/DotField/DotField";

function App() {
  return (
    <div className="relative min-h-screen ">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#F1F1F1]" aria-hidden="true" >
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          cursorRadius={0}
          cursorForce={0}
          bulgeOnly={false}
          bulgeStrength={67}
          glowRadius={0}
          sparkle={false}
          waveAmplitude={.7}
          gradientFrom="#303030"
          gradientTo="#303030"
          glowColor="#ffffff"
          interactive={false}
        />
      </div>
      <main className="relative z-10">

        <h1 className="text-4xl font-bold text-center h-[200vh] text-gray-800 mt-20">
          Welcome to My Portfolio
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Explore my projects and skills.
        </p>
      </main>
    </div>
  );
}

export default App;
