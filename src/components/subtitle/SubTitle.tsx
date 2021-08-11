import { Title } from "./SubTitleStyle";

interface SubTitleProps{
    text: string;
}

export const SubTitle = ({text}: SubTitleProps) => {
    return (
        <Title>{text}</Title>
    );
};

export default SubTitle;