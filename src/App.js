import { SpinnerCircularFixed } from "spinners-react";
import "./App.css";

function App() {
  const message = "Redirect login page...";

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <SpinnerCircularFixed size={50} thickness={200} color="#0c4180" />
      {message && (
        <div className="type-h4-600 text-[var(--text-primary)]">{message}</div>
      )}
    </div>
  );
}

export default App;
