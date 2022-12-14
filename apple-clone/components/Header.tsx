import Image from "next/image";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { selectBasketItems } from "../redux/basketSlice";
import { useSelector } from "react-redux";

function Header() {
  const session = false;
  const items = useSelector(selectBasketItems);

  return (
    <header
      className="sticky top-0 z-30 flex w-full items-center
    justify-between bg-[#e7ecee] p-4"
    >
      <div
        className="flex items-center justify-center
      md:w-1/5"
      >
        <Link href="/">
          <Image
            alt="headerImage"
            src="https://rb.gy/vsvv2o"
            objectFit="contain"
            width="20"
            height="20"
            className="cursor-pointer opacity-75
        transition hover:opacity-100"
          />
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        {/*dummy links*/}
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="flex items-center justify-center space-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500  text-[10px] text-white">
              {items.length}
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>

        {session ? <h1>User</h1> : <UserIcon className="headerIcon" />}
      </div>
    </header>
  );
}

export default Header;
