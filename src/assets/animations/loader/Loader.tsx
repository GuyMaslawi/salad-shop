import { Animation } from "../../../components";
import json from './loader.json';
import { Wrapper } from "./LoaderStyle";

export const Loader = () => {
    return (
        <Wrapper>
            <Animation animation={json} width="800px" height="auto"/>
        </Wrapper>
    );
};

export default Loader;