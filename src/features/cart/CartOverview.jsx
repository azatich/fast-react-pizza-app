import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalNumOfPizzas = useSelector(getTotalCartQuantity);
  const totalPriceOfPizzas = useSelector(getTotalCartPrice);

  if (!totalNumOfPizzas) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-xs uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalNumOfPizzas} pizzas</span>
        <span>${totalPriceOfPizzas}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
