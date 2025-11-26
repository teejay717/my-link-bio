// src/LinkButton.jsx
export default function LinkButton({ title, url }) {
    return (
        <a href={url} className=" block w-full max-w-xs mx-auto my-1.5 p-3 bg-blue-500 text-white text-center rounded-lg hover:bg-blue-600 hover:scale-105 transition-all " 
        target="_blank" 
        rel="noopener noreferrer">
        {title}
        </a>
    );
}