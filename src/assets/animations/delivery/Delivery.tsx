import { Animation } from "../../../components";
import json from './delivery.json';

export const Delivery = () => {
    return (
        <Animation animation={json} width="100%" height="100%"/>
    );
};

export default Delivery;