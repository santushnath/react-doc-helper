import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

export interface DHSettings {
  offsetTop?: string;
  codeBlockTheme?: 'github' | 'dracula' | string;
}

const defaultSettings: DHSettings = {
  offsetTop: '1rem',
  codeBlockTheme: 'github',
};

const DHContext = createContext<{
  settings: DHSettings;
  setSettings: (settings: DHSettings) => void;
}>({
  settings: defaultSettings,
  setSettings: () => {},
});

interface DHProviderProps {
  children: ReactNode;
  settings?: DHSettings;
}

export const DHProvider: React.FC<DHProviderProps> = ({
  children,
  settings: initialSettings,
}) => {
  const [settings, setSettings] = useState<DHSettings>({
    ...defaultSettings,
    ...initialSettings,
  });

  useEffect(() => {
    if (initialSettings && typeof initialSettings === 'object') {
      console.log('initialSettings', typeof initialSettings);
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
export const useDHContext = () => {
  const context = useContext(DHContext);

  if (!context) {
    throw new Error(
      'useDHContext should be used within the DHContext provider!'
    );
  }

  return context;
};
