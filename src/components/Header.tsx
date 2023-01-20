import Search from "./Search";

interface HeaderProps {
  name: any;
}

const Header = ({ name }: HeaderProps) => {
  return (
    <>
      <div className="xl:px-32">
        <h1 className="text-5xl">{name}</h1>
        <Search />
      </div>
    </>
  );
};

export default Header;
