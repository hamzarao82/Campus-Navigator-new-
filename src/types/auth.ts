export interface User {
  id: string;
  email: string;
  role: 'student' | 'faculty' | 'admin';
  hasMapAccess: boolean;
  preferences?: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  accessibility: boolean;
  notifications: boolean;
  language: string;
}
