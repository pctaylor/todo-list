import { startOfDay } from 'date-fns';

export class Project {
    constructor(name, description = '') {
        this.name = name;
        this.description = description;
    }

    addAttribute(attribute, attributeType) {

        //check whether this attribute type has been created before
        // if it has, add the attribute to an array for that type
        // if it hasn't create an array for that type
        if (this.attributeType === null) {
            this.attributeType = attributeType;
            
        }


        this.attribute = attribute;
        this.attributeType = attributeType;
        this.creationDate = startOfDay(new Date());
    }
}