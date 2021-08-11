
//ingredients images
import cucumberIcon from '../../assets/ingredients/cucumber.png';
import tomatoIcon from '../../assets/ingredients/tomato.png';
import eggIcon from '../../assets/ingredients/egg.png';
import tunaIcon from '../../assets/ingredients/tuna.png';
import potatoIcon from '../../assets/ingredients/potato.png';
import lettuceIcon from '../../assets/ingredients/lettuce.png';
import cornIcon from '../../assets/ingredients/corn.png';
import onionIcon from '../../assets/ingredients/onion.png';
import mashroomIcon from '../../assets/ingredients/mashroom.png';
import pastaIcon from '../../assets/ingredients/pasta.png';
import pickelsIcon from '../../assets/ingredients/pickles.png';


export const getIcon = (name: string) => {
    switch (name) {
        case "cucumber":
            return cucumberIcon;
        case "tomato":
            return tomatoIcon;
        case "egg":
            return eggIcon;
        case "tuna":
            return tunaIcon;
        case "potato":
            return potatoIcon;
        case "lettuce":
            return lettuceIcon;
        case "corn":
            return cornIcon;
        case "onion":
            return onionIcon;
        case "mashroom":
            return mashroomIcon;
        case "pasta":
            return pastaIcon;
        case "pickles":
            return pickelsIcon;
    }
};
