import { useState } from 'react';

export default function CopyButton({textToCopy}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }

    return (
        <button 
            onClick={handleCopy} 
            className={`px-4 py-3 rounded-lg transition-all font-medium ${
                copied 
                    ? 'bg-green-500 hover:bg-green-600 text-white hover:scale-102 transition-all' 
                    : 'bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white hover:scale-102 transition-all'
            }`}
        >
            {copied ? "Copied" : "📄"}
        </button>
    );

}