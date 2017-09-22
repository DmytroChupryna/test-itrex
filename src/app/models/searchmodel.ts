/**
 * Created by dmitrij on 22.09.17.
 */


export class Searchmodel{

    public start: Date;
    public end: Date;
    public item1: string;
    public item2: string;

    constructor(
        start: Date,
        end: Date,
        item1: string,
        item2: string
    ){

        this.start = start;
        this.end = end;
        this.item1 = item1;
        this.item1 = item2;
    }

}

