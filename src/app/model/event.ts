export class Event {

    eventId: number;
    name: string;
    description: string;
    locationName: string;
    date: {year:number, month: number, day: number};
    time: {hour: number, minute: number};
    entryCost: string;
    familyFriendly: boolean;  
    zipCode: string;  
    city: string;
    state: string;
    address: string;

}