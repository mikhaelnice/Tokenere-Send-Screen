import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SelectCurrency from "./pages/SelectCurrency";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectSendMethod from "./pages/SelectSendMethod";
import PaymentMethod from "./pages/PaymentMethod";
import P2PPayment from "./pages/P2PPayment";
import UserPayment from "./pages/UserPayment";
import UserPaymentVerify from "./pages/UserPaymentVerify";
import UserPaymentOtpVerify from "./pages/UserPaymentOtpVerify";
import P2PPaymentOtpVerify from "./pages/P2PPaymentOtpVerify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectCurrency />,
  },
  {
    path: "/select-send-method",
    element: <SelectSendMethod />,
  },
  {
    path: "/select-user-method",
    children: [
      {
        path: "/select-user-method",
        element: <PaymentMethod />,
      },
      {
        path: "/select-user-method/send-user-payment",
        element: <UserPayment />,
      },
      {
        path: "/select-user-method/send-user-payment-verify",
        element: <UserPaymentVerify />,
      },
      {
        path: "/select-user-method/send-user-payment-otp-verification",
        element: <UserPaymentOtpVerify />,
      },
    ],
  },
  {
    path: "/select-P2P-method",
    children: [
      {
        path: "/select-P2P-method",
        element: <PaymentMethod />,
      },
      {
        path: "/select-P2P-method/send-P2P-payment",
        element: <P2PPayment />,
      },
      {
        path: "/select-P2P-method/send-P2P-payment-otp-verification",
        element: <P2PPaymentOtpVerify />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <NavBar />
      {/* <SelectCurrency /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
  );
}
export default App;
