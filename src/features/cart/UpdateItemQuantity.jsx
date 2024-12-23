import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decItemQuantity, incItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decItemQuantity(pizzaId))}>
        -
      </Button>
      <span className="font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(incItemQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}
