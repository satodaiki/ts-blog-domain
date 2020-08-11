class DiaryId {
    private value: string;

    constructor(value: string) {
        if (value === null || value === undefined) {
            throw new Error("value cannot be null or undefined.");
        }
        this.value = value;
    }
}

export default DiaryId;