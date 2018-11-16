

import { BasePage, IdentificationType } from "./BasePage";

const Locators = {

    Duration:{
        type: IdentificationType[IdentificationType.Xpath],
        value: "//Duration"
    }

}


export class CourseDetailsPage extends BasePage{

    duration = this.ElementLocator(Locators.Duration);

    ClickDuration(){
        this.duration.click();
    }
}