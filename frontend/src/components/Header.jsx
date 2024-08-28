import { Button } from "./ui/button";
function LogInIcon(props) {
  return (
    <img
      {...props}
      src={
        "https://cdn.prod.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg"
      }
      alt="Log In Icon"
      width="40"
      height="40"
    />
  );
}
function Header({ setIsModalOpen }) {
  return (
    <>
      <header className="bg-black w-full rounded-t-md text-white  flex items-center justify-between px-11 py-2">
        <div className="flex items-center space-x-4">
          <div className="flex ml-16 items-center space-x-2">
            <LogInIcon className="w-20 h-12" />
          </div>
          <span> | </span>
          <span>Help Center</span>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="outline"
          className="text-white mr-4 bg-black border-white"
        >
          Submit a request
        </Button>
      </header>
    </>
  );
}

export default Header;
