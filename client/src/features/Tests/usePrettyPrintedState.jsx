import { useState, useMemo } from "react";

export function usePrettyPrintedState() {
  const [value, setValue] = useState(null); // Le type générique est retiré

  const resultValue = useMemo(() => {
    return (
      <>
        {value && (
          <pre>
            Value:
            <br />
            {JSON.stringify(value, null, 2)}
          </pre>
        )}
      </>
    );
  }, [value]);

  return [resultValue, setValue];
}