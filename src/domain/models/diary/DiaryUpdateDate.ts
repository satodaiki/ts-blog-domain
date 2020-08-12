class DiaryUpdateDate {
    private value: Date;

    constructor(value: Date) {
        if (value === null || value === undefined) {
            throw new Error("value cannot be null or undefined.");
        }
        this.value = value;
    }
}

export default DiaryUpdateDate;