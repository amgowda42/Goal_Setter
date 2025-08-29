import { RouterProvider } from "react-router";
import router from "./routes";
import { Toaster } from "sonner";
import AuthLoader from "./app/AuthLoader";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <AuthLoader />
      <Toaster position="bottom-right" richColors closeButton />
    </>
  );
};

export default App;
