import { useEffect, useState } from 'react';

// loops in header
const titles = ["Web Developer", "UI/UX Designer", "User Researcher", "2D/3D Artist", "Game Developer", "Silly Goose"];

export default function Typewriter() {
    const [text, setText] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        const typingSpeed = 120;
        const pauseAfterTyping = 1000;

        let timeout;

        if (!isDeleting && charIndex < currentTitle.length) {
            timeout = setTimeout(() => {
                setText(currentTitle.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        }
        else if (!isDeleting && charIndex === currentTitle.length) {
            timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
        }
        else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setText(currentTitle.slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, typingSpeed);
        }
        else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, titleIndex]);

    return (
        <section className="typewriter">
            <h1>and I'm a</h1>
            <h1 className="typewriter-text">{text}</h1>
        </section>
    );
}