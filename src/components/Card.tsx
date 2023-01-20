
interface CardProps {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => {

  return (
    <div
      className="w-full h-full rounded-md relative p-8 border-2"

    >
      {children}
    </div>
  );
};

export default Card;
