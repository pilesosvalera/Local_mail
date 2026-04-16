import React, { useState } from 'react';

const Compose = () => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Functionality to send the email goes here
        console.log('Email sent to:', to);
        console.log('Subject:', subject);
        console.log('Body:', body);
        // Reset fields
        setTo('');
        setSubject('');
        setBody('');
    };

    return (
        <div>
            <h2>Compose New Email</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        To:
                        <input type="email" value={to} onChange={(e) => setTo(e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Subject:
                        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                    </label>
                </div>
                <div>
                    <label>
                        Body:
                        <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
                    </label>
                </div>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
};

export default Compose;