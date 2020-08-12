class DiaryId {
    private _value: string;

    constructor(value: string) {
        if (value === null || value === undefined) {
            throw new Error("value cannot be null or undefined.");
        }
        this._value = value;
    }

    get value(): string {
        return this._value;
    }
}

export default DiaryId;