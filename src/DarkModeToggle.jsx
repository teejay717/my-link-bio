import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('darkMode');
        if (saved === 'true') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        document.documentElement.classList.toggle('dark', newMode);
        localStorage.setItem('darkMode', newMode);
    };

    return (
        <button 
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
        >
            {darkMode ? '🌙' : '☀️'}
        </button>
    );
}

