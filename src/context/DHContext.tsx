import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  FC,
} from 'react';

export interface DHSettings {
  offsetTop?: string;
  codeBlockTheme?: 'github' | 'dracula' | string;
}

const defaultSettings: DHSettings = {
  offsetTop: '1rem',
  codeBlockTheme: 'github',
};

interface DHContextType {
  settings: DHSettings;
  setSettings: (settings: DHSettings) => void;
}

const DHContext = createContext<DHContextType | undefined>(undefined);

interface DHProviderProps {
  children: ReactNode;
  settings?: DHSettings;
}

export const DHProvider: FC<DHProviderProps> = ({
  children,
  settings: initialSettings,
}) => {
  const [settings, setSettings] = useState<DHSettings>({
    ...defaultSettings,
    ...initialSettings,
  });

  useEffect((): void => {
    if (initialSettings && typeof initialSettings === 'object') {
      setSettings((prevState) => ({ ...prevState, ...initialSettings }));
    }
  }, [initialSettings]);

  return (
    <DHContext.Provider value={{ settings, setSettings }}>
      {children}
    </DHContext.Provider>
  );
};

// Hook for easier access
export const useDHContext = (): DHContextType => {
  const context = useContext(DHContext);
  if (!context) {
    throw new Error('useDHContext must be used within a DHProvider');
  }
  return context;
};
