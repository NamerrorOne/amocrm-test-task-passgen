import { useState } from 'react';

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const resetIsCopied = () => setIsCopied(false);

  const handleCopyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }
  };

  return { isCopied, handleCopyToClipboard, resetIsCopied };
};

export default useCopyToClipboard;
