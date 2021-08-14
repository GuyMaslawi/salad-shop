
//ingredients images
import cucumberIcon from '../../assets/images/ingredients/cucumber.png';
import tomatoIcon from '../../assets/images/ingredients/tomato.png';
import eggIcon from '../../assets/images/ingredients/egg.png';
import tunaIcon from '../../assets/images/ingredients/tuna.png';
import potatoIcon from '../../assets/images/ingredients/potato.png';
import lettuceIcon from '../../assets/images/ingredients/lettuce.png';
import cornIcon from '../../assets/images/ingredients/corn.png';
import onionIcon from '../../assets/images/ingredients/onion.png';
import mashroomIcon from '../../assets/images/ingredients/mashroom.png';
import pastaIcon from '../../assets/images/ingredients/pasta.png';
import pickelsIcon from '../../assets/images/ingredients/pickles.png';


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
