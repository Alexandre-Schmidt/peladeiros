import { Outlet } from "react-router-dom";

import { Toast } from "../../components/Toast";
import { useToasts } from "../../contexts/useToasts";

import { Container } from "./styles";

export function DefaultLayout() {
  const { open, toastContent } = useToasts();

  return (
    <Container>
      <div>
        <Outlet />
        {toastContent && (
          <Toast
            open={open}
            type={toastContent.type}
            title={toastContent.title}
            message={toastContent.message}
          />
        )}
      </div>
    </Container>
  );
}
