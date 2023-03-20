import { createContext, useContext, ReactNode, useState } from "react";

export interface CreateToastsData {
  name: string;
  playersNumber: number;
  duration: string;
  goals: string;
  rule: number;
}

interface ToastData {
  type: "success" | "error" | "info";
  title: string;
  message: string;
}

interface ToastContextData {
  open: boolean;
  toastContent?: ToastData;
  handleOpenToast: ({ type, title, message }: ToastData) => void;
  handleCloseToast: () => void;
}

interface ToastsProviderProps {
  children: ReactNode;
}

const ToastsContext = createContext<ToastContextData>({} as ToastContextData);

const ToastsProvider = ({ children }: ToastsProviderProps) => {
  const [open, setOpen] = useState(false);
  const [toastContent, setToastContent] = useState<ToastData>();

  const handleOpenToast = ({ type, title, message }: ToastData) => {
    setToastContent({ type, title, message });
    setOpen(true);
  };

  const handleCloseToast = () => {
    setToastContent(undefined);
    setOpen(false);
  };

  return (
    <ToastsContext.Provider
      value={{
        open,
        toastContent,
        handleOpenToast,
        handleCloseToast,
      }}
    >
      {children}
    </ToastsContext.Provider>
  );
};

function useToasts(): ToastContextData {
  const context = useContext(ToastsContext);

  if (!context) {
    throw new Error("useToasts must be used within an ToastsProvider");
  }

  return context;
}

export { ToastsProvider, useToasts };
