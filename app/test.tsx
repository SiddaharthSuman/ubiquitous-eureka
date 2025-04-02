// Before saving
interface TestProps {
  a: string;
  z: string;
}

export function Test({ a, z }: TestProps) {
  return (
    <div>
      {z}
      {a}
    </div>
  );
}
