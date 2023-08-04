import { useRoutes } from "react-router-dom";
import './App.css';
import AddCreator from './pages/AddCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';
import ShowCreators from './pages/ShowCreators.jsx';
import ViewCreator from './pages/ViewCreator.jsx';


function App() {
  let element = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/add-creator", element: <AddCreator /> },
    { path: "/view-creator/:id", element: <ViewCreator /> },
    { path: "/edit-creator/:id", element: <EditCreator /> },
  ]);

  return element;
}

export default App
