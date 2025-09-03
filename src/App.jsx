import MainLayout from "./Layouts/MainLayout";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import ProductPage from "./Pages/ProductPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} />{" "}
        {/* path คือหน้าที่ไม่ได้ระบุบ path จะให้ขึ้น 404  */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
