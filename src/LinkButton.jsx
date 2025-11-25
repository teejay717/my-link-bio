// src/LinkButton.jsx
export default function LinkButton({ title, url }) {
    return (
        <a href={url} className="link-button" target="_blank" rel="noopener noreferrer">
        {title}
        </a>
    );
}