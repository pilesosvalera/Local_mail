import React from 'react';

const Inbox = () => {
    const emails = [
        { sender: 'alice@example.com', subject: 'Hello!', date: '2026-04-15' },
        { sender: 'bob@example.com', subject: 'Meeting Reminder', date: '2026-04-14' },
        { sender: 'carol@example.com', subject: 'Your Invoice', date: '2026-04-13' },
        // Add more emails as needed
    ];

    return (
        <div>
            <h1>Inbox</h1>
            <ul>
                {emails.map((email, index) => (
                    <li key={index}>
                        <strong>From:</strong> {email.sender} <br />
                        <strong>Subject:</strong> {email.subject} <br />
                        <strong>Date:</strong> {email.date} <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inbox;