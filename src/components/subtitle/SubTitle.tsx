import { Title } from "./SubTitleStyle";

interface SubTitleProps {
  text: string;
  className?: string;
}

export const SubTitle = ({ text, className }: SubTitleProps) => {
  return <Title className={className}>{text}</Title>;
};

export default SubTitle;
