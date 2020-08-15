class UserCreateDate {
    private _createDate: Date;
    constructor(createDate: Date) {
        this._createDate = createDate;
    }

    public get createDate() {
        return this._createDate;
    }
}

export default UserCreateDate;