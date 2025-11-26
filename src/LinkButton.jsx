import CopyButton from "./CopyButton";

// src/LinkButton.jsx
export default function LinkButton({ title, url }) {
    return (
        <div className="flex items-center gap-2 w-full max-w-xs mx-auto my-2">
            <a href={url} 
                className="flex-1 p-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-center rounded-lg hover:scale-102 transition-all" 
                target="_blank" 
                rel="noopener noreferrer">
                {title}
            </a>
            <CopyButton textToCopy={url} />
        </div>
    );
}