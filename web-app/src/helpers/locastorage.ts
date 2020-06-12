export const saveToken = (token: string): void => localStorage.setItem('token', token);

export const getToken = (): string | null => localStorage.getItem('token');

export const deleteToken = (): void => localStorage.removeItem('token');
