'use client'
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.log("Error detected:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-600">⚠️ Something went wrong!</h1>
      <p>{error}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white" onClick={() => reset()}>
        🔄 Try Again
      </button>
    </div>
  );
}
