class DiaryCreateDate {
    private value: Date;

    constructor(value: Date) {
        if (value === null || value === undefined) {
            throw new Error("value cannot be null or undefined.");
        }
        if (new Date() > value) {
            throw new Error("value cannot be less than current date.");
        }
        this.value = value;
    }
}

export default DiaryCreateDate;