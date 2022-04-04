import "./App.scss";
import Navbar from "./ui/navbar";
import OrderTracker from "./components/order-tracker";

//Bootstrap for responsiveness
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="content">
      <Navbar />
      <OrderTracker />
    </div>
  );
}
