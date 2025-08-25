import React from "react";
import { RouterProvider } from "react-router";
import router from "./routes";
import { Toaster } from "sonner";

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" richColors closeButton />
    </>
  );
};

export default App;
