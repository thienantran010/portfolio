// components/CopyToClipboard.tsx
import { useState } from "react";

interface CopyToClipboardProps {
  textToCopy: string;
  children: React.ReactNode;
}

export default function CopyableText({
  textToCopy,
  children,
}: CopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };

  return (
    <button onClick={handleCopy} className="relative flex items-center">
      {children}
      {isCopied && (
        <span className="absolute -bottom-6 left-0 text-xs bg-black text-white rounded p-1">
          Copied!
        </span>
      )}
    </button>
  );
}
