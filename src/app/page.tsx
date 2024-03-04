export default function Home() {
  const renderCards = () => {
    // Create an array to hold the cards
    let cards = [];
    // Loop from 1 to 100 to create 100 cards
    for (let i = 1; i <= 100; i++) {
      // Push each card into the array
      cards.push(
        <div
          key={i}
          className="p-4 text-center  bg-background  h-80  w-full rounded-sm border shadow-sm"
        >
          {/* Content of your card */}
          Product {i}
        </div>
      );
    }
    // Return the array of cards
    return cards;
  };

  return (
    <main className="min-w-[320px]">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
        {/* Render the cards by calling the renderCards function */}
        {renderCards()}
      </div>
    </main>
  );
}
