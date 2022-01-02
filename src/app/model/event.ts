export class Event {

    eventId: string;
    name: string;
    description: string;
    location: string;
    date: string;
    time: string;
    entryCost: string;
    familyFriendly: boolean;  
    zipCode: string;  


    //zipcode: string;

    //other location fields: city name, street address, probably should be string

    //need to add fields to FE event form, FE event list, BE models class

    //consider! making location its own class and using that inside event?? could be really hard, do not know how to implement

}
