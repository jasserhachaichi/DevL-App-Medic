import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";

// Pages
import Home from "./../pages/Home";
import About from "./../pages/About";
import Login from "./../pages/Login";
import Signup from "./../pages/Signup";
import Principale from "./../pages/Principale";
import NotFound from "./../pages/NotFound";

//Components
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import ContactUs from "../pages/ContactUs";

const Routes = () => {
  const { token } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<><Navbar /> <Home /> <Footer /></>),
    },
    {
      path: "/login",
      element: (<><Navbar /> <Login /><Footer /></>),
    },
    {
      path: "/about",
      element:(<><Navbar />  <About /><Footer /></>),
    },
    {
      path: "/contactus",
      element:(<><Navbar />  <ContactUs /> <Footer /></>),
    },
    {
      path: "/signup",
      element:(<><Navbar />  <Signup /> <Footer /></>),
    },
    {
      path: "/principale",
      element: (
        <ProtectedRoute>
            <Navbar />
          <Principale />
          <Footer />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element:(<><Navbar /> <NotFound /><Footer /></>) ,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
