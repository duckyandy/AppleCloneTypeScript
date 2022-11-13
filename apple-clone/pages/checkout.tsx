import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isTemplateSpan } from "typescript";
import Button from "../components/Button";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectBasketItems, selectBasketTotal } from "../redux/basketSlice";
import Currency from "react-currency-formatter";

function checkout() {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const router = useRouter();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );

  //group different items together
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });

    setGroupedItemsInBasket(groupedItems);
  }, [items]);
  return (
    <div className="overflow-y min-h-screen">
      <Head>
        <title>Bag- Apple</title>
      </Head>
      <Header />
      <main className="mx-auto max-w-5xl pb-24">
        <div className="px-5">
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {items.length > 0 ? "Review your bag." : "Your bag is empty."}
          </h1>

          {items.length === 0 && (
            <Button
              title="Continue Shopping"
              onClick={() => router.push("/")}
            />
          )}
        </div>
        {items.length && (
          <div className="mx-5 md:mx-8">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <CheckoutProduct key={key} id={key} items={items} />
            ))}
            <div>
              <div>
                <div>
                  <div>
                    <p>Subtotal:</p>
                    <p>
                      <Currency quantity={basketTotal} currency="HKD" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default checkout;
