import React, { useState } from 'react';

interface PasswordGuardProps {
    children: React.ReactNode;
    password: string;
}

export const PasswordGuard: React.FC<PasswordGuardProps> = ({ children, password }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue === password) {
            setIsAuthorized(true);
            setError(false);
        } else {
            setError(true);
            setInputValue('');
        }
    };

    if (isAuthorized) {
        return (
            <div className="main-content-revealed">
                {children}
            </div>
        );
    }

    return (
        <div id="password-overlay">
            <div className="password-box">
                <div className="password-logo">Online Desktop</div>
                <p className="password-msg">このサイトを閲覧するにはパスワードが必要です。</p>
                <form id="password-form" onSubmit={handleSubmit}>
                    <input
                        type="password"
                        id="password-input"
                        placeholder="パスワードを入力"
                        autoFocus
                        autoComplete="off"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" id="password-submit">閲覧する</button>
                </form>
                {error && (
                    <p id="password-error" className="password-error">
                        パスワードが正しくありません。
                    </p>
                )}
            </div>
        </div>
    );
};
