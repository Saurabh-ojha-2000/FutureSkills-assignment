import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
function Hero({ cardsArray, handleSearch }) {
  console.log(cardsArray);
  return (
    <>
      <main className="flex-1 bg-gray-100">
        <section className="bg-grey-200 text-center py-16">
          <h1 className="text-4xl font-bold mb-4">How can we help?</h1>
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <Input
                onChange={handleSearch}
                type="search"
                placeholder="Search"
                className="w-full pl-4 pr-10 py-2 border rounded-full"
              />
              <Button
                variant="default"
                className="absolute right-0 top-0 h-full px-4 rounded-full"
              >
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardsArray.map((card, index) => (
              <Card key={index} className="p-4 h-full">
                <CardHeader>
                  <CardTitle className="truncate">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Hero;
