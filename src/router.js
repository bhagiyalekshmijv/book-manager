import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import EditBook from "./components/EditBook";


const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
    { path: "", element: <BookList/> },
    { path: "add", element: <AddBook/> },
    { path: "edit/:id", element: <EditBook/> }
    ]
}
]);

export default router;