// Before saving
interface TestProps {
  a: string;
  onClick: () => void;
  z: string;
}

export function Test({ a, onClick, z }: TestProps) {
  return (
    <div onClick={onClick}>
      {z}
      {a}
    </div>
  );
}
