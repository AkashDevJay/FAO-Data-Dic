import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Root from './pages/Root';
import Home from './pages/home/Home';
import DataForm from './pages/dataForm/DataForm';
import PowerBI from './pages/powerBI/PowerBI';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <div>error 404</div>,
        children: [
            {
                path:"/",
                element: <Home />
            },
            {
                path:"/form",
                element: <DataForm />
            },
            {
              path:"/powerBI",
              element: <PowerBI />
          }
        ]
    }
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
