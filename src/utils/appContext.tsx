import { createContext } from 'react';

interface AppContextType {
  isSignedIn: boolean;
  setIsSignedIn: (value: boolean) => void;
}

export const AppContext = createContext<AppContextType | null>(null);