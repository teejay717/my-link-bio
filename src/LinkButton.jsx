import CopyButton from "./CopyButton";

// src/LinkButton.jsx
export default function LinkButton({ title, url }) {
    return (
        <div className="flex items-center gap-2 w-full max-w-xs mx-auto my-2">
            <a href={url} 
                className="flex-1 p-3 border-1 bg-blue-500 hover:bg-blue-600 dark:border-1 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-white text-center rounded-lg hover:scale-102 transition-all" 
                target="_blank" 
                rel="noopener noreferrer">
                {title}
            </a>
            <CopyButton textToCopy={url} />
        </div>
    );
}