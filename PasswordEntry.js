import React, { useState } from 'react';

const PasswordEntry = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const validatePassword = () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return false;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password must contain at least one uppercase character.');
            return false;
        }
        if (!/[a-z]/.test(password)) {
            setError('Password must contain at least one lowercase character.');
            return false;
        }
        if (!/[0-9]/.test(password)) {
            setError('Password must contain at least one number.');
            return false;
        }
        if (!/[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/.test(password)) {
            setError('Password must contain at least one special character.');
            return false;
        }
        setError('');
        setSuccess('Password is valid!');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePassword()) {
            // Handle successful password entry
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {success && <div style={{ color: 'green' }}>{success}</div>}
        </div>
    );
};

export default PasswordEntry;
