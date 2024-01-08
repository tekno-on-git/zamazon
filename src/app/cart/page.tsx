import { getCart } from "@/lib/db/cart";
import CartItem from "./CartItem";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/utils/formatData";

export const metadata = {
  title: "Your Cart- Zamazon",
};

export default async function CartPage() {
  const cart = await getCart();

  return (
    <div className="">
      <h1 className="mb-6 text-3xl font-bold"> CART</h1>
      {cart?.items.map((cartItem) => (
        <CartItem
          cartItem={cartItem}
          key={cartItem.cartId}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && <p>Your cart is empty</p>}
      <div className="flex flex-col items-end sm:items-center">
        <p className="mb-3 font-bold">
          Total: {formatPrice(cart?.subtotal || 0)}
        </p>
        <button className="btn btn-primary sm:w-[200px]">Checkout</button>
      </div>
    </div>
  );
}
