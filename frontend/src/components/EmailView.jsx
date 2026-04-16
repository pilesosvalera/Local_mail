import React from 'react';

const EmailView = ({ email }) => {
    const { from, to, subject, body, date } = email;
    return (
        <div className="email-view">
            <h2>{subject}</h2>
            <p><strong>From:</strong> {from}</p>
            <p><strong>To:</strong> {to}</p>
            <p><strong>Date:</strong> {new Date(date).toUTCString()}</p>
            <div className="email-body">
                <p>{body}</p>
            </div>
        </div>
    );
};

export default EmailView;