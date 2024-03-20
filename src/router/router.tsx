import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage";
import OverView from "../Pages/Dashboard/OverView";
import App from "../App";
import AllSupplies from "../Pages/AllSupplies/AllSupplies";
import CreateSupply from "../Pages/CreateSupply/CreateSupply";
import TopDonors from "../Pages/TopDonors/TopDonors";
import Testimonial from "../Pages/Testimonial/Testimonial";



const router = createBrowserRouter([
    {
        path: "/",
        element:<MainPage></MainPage>
    },
    {
        path: "/dashboard",
        element: <App></App>,
        children: [
          {
            path: "/dashboard/overview",
            element: <OverView />,
          },
          {
            path: "/dashboard/supplies",
            element: <AllSupplies/>,
          },
          {
            path: "/dashboard/create-supply",
            element: <CreateSupply/>,
          },
          {
            path: "/dashboard/leaderboard",
            element: <TopDonors/>,
          },
          {
            path: "/dashboard/create-testimonial",
            element: <Testimonial/>,
          },
        ],
      },
]);

export default router;
