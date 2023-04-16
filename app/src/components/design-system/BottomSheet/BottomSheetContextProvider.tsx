import React from 'react';
import { BottomSheetContextType } from './BottomSheet.types';

const BottomSheetContext = React.createContext<BottomSheetContextType | null>(
  null,
);

const BottomSheetContextProvider: React.FC<BottomSheetContextProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <BottomSheetContext.Provider value={props}>
      {children}
    </BottomSheetContext.Provider>
  );
};

type BottomSheetContextProviderProps = {
  children: React.ReactNode;
} & BottomSheetContextType;

const useBottomSheetContext = () => {
  const context = React.useContext(BottomSheetContext);

  if (!context) {
    throw new Error(
      'bottom sheet context should be used with BottomSheetContextProvider',
    );
  }

  return context;
};

export default BottomSheetContextProvider;
export { useBottomSheetContext };
