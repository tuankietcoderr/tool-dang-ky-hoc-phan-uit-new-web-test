import { RouterProvider } from "react-router-dom";
import { router } from "./routes/mainRoutes";
import { Provider } from "react-redux";
import { store } from "./store";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </DataProvider>
    </>
  );
}

export default App;
