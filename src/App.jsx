import { RouterProvider } from "react-router-dom"
// import AppRoutes from "./routes/AppRoutes"
import AppRouter from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <RouterProvider router={AppRouter} />
      
    </>

  )
}

export default App