import {simpsons} from "../../date/date.ts";
import {CharecterComponent} from "../character-component/CherecterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map(value => <CharecterComponent item={value}>
                    {value.info}
                    </CharecterComponent>)
            }
        </div>
    );
};