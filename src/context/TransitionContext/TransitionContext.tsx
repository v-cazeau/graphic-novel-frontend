import { ReactNode, createContext, useState } from 'react';

interface TransitionContextType {
  toggleCompleted: (value: boolean) => void;
  completed: boolean;
}

interface TransitionProviderProps {
  children: ReactNode;
}

const TransitionContext = createContext<TransitionContextType>({ toggleCompleted: () => {}, completed: false });

export const TransitionProvider = ({ children }: TransitionProviderProps) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = (value: boolean) => {
    setCompleted(value);
  };

  return (
    <TransitionContext.Provider
      value={{
        toggleCompleted,
        completed,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export default TransitionContext;
