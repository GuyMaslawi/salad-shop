import { Div, MainTitle } from "./HeaderStyle";

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <Div>
      <MainTitle>{title}</MainTitle>
    </Div>
  );
};

export default Header;
