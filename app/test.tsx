import { Button } from '@mui/material';

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

      <Button
        aria-label="Close modal"
        className="focus:ring-2 focus:ring-blue-500"
      >
        Close ICON
      </Button>

      <a className="underline focus:outline-none focus:ring-2" href="/about">
        About Us
      </a>
    </div>
  );
}
