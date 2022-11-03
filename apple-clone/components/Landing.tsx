import Image from "next/image";
import Button from "./Button";

function Landing() {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-bold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">By Intellect</span>
          <span className="block">Driven By Values</span>
        </h1>

        <div className="space-x-4">
          <Button title="Buy Now" />
          <a className="link">Learn More</a>
        </div>
      </div>
      <div
        className="relative hidden transition-all duration-500
        md:inline lg:h-[650px] lg:w-[600px]"
      >
        <Image
          alt="phone_image"
          src="/iphone5.webp"
          width={450}
          height={450}
          objectFit="contain"
        />
      </div>
    </section>
  );
}

export default Landing;