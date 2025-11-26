// src/LinkButton.jsx
export default function LinkButton({ title, url }) {
    return (
        <a href={url} className=" block w-full max-w-md mx-auto my-2 p-3 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 transition-colors" 
        target="_blank" 
        rel="noopener noreferrer">
        {title}
        </a>
    );
}