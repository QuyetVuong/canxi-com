import React from 'react';


export function ChatButton() {
    return (
        <div className="chat-buttons">
            <a href="https://zalo.me/0979793995" target="_blank" rel="noopener noreferrer" className="chat-button zalo">
                <img src="https://img.icons8.com/?size=100&id=0m71tmRjlxEe&format=png&color=000000" alt="Chat Zalo" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61563069237427&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" 
            className="chat-button facebook">
                <img src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="Chat Facebook" />
            </a>
            <a href="tel:0979793995" className="chat-button " id='hotline'>
                <img  src="https://img.icons8.com/?size=100&id=9659&format=png&color=228BE6" alt="Hotline" />
            </a>
        </div>
    );
}


