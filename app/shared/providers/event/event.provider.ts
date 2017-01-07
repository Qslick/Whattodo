
export class EventProvider {



    private title: string;
    private description: string;
    private priority: number;
    private startTime: any;
    private endTime: any;

    private isInstantiated: boolean = false;
    private emptyList: boolean;
    private event = [];

    constructor() {

    }

    public newEvent(title: string, description: string,
        priority: number, startTime: number,
        endTime: number) {

        // if (!this.isInstantiated) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.startTime = startTime;
        this.endTime = endTime;
        this.isInstantiated = true;
        // }//end instantiation check
    }


    // -----Getters and Setters-----
    public setTitle(title: string) {
        this.title = title;
    }

    public setDescription(description: string) {
        this.description = description;
    }

    public setPriority(priority: number) {
        this.priority = priority;
    }

    public setStartTime(startTime: number) {
        this.startTime = startTime;
    }

    public setEndTime(endTime: number) {
        this.endTime = endTime;
    }

    public getTitle() {
        return this.title;
        //testing
    }

    public getDescription() {
        return this.description;
    }

    public getPriority() {
        return this.priority;
    }

    public getStartTime() {
        return this.startTime;
    }

    public getEndTime() {
        return this.endTime;
    }

    public getAll() {
        return (
            "Title: " + this.title
            + "\nDescription: " + this.description
            + "\nPriority: " + this.priority
            + "\nStart Time: " + this.startTime
            + "\nEnd Time: " + this.endTime
        );
    }
    // -----Getters and Setters-----
}