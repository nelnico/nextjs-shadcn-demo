import Image from "next/image";
import Link from "next/link";
import girl1Image from "@/app/assets/girl1.png";
import girl2Image from "@/app/assets/girl2.png";

export default function Home() {
  const renderCards = () => {
    // Create an array to hold the cards
    let cards = [];
    // Loop from 1 to 100 to create 100 cards
    for (let i = 1; i <= 100; i++) {
      // Push each card into the array
      cards.push(
        <Link href="/escort" key={i}>
          <div className="p-4 text-center  bg-background  h-80  w-full rounded-sm border shadow-sm">
            <Image
              src={i % 2 === 0 ? girl1Image : girl2Image}
              alt="Picture of the author"
              className=" object-fill  hover:scale-105  h-full w-full"
            />
          </div>
        </Link>
      );
    }
    // Return the array of cards
    return cards;
  };

  return (
    <main className="min-w-[320px]">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
        {renderCards()}
      </div>
    </main>
  );
}
