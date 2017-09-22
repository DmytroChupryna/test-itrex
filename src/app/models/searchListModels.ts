import {Searchmodel} from "./searchmodel";



export class SearchListmodel {
    public flight: Searchmodel[];
    public cars: Searchmodel[];
    public hotels: Searchmodel[];

    constructor(
        flight: Searchmodel[],
        cars: Searchmodel[],
        hotels: Searchmodel[]
    ){
        this.flight = flight;
        this.cars = cars;
        this.hotels = hotels;
    }

}