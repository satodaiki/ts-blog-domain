class UserId {
    private _id: string;
    constructor(id: string) {
        if (id.length === 0) {
            throw new Error('userId cannot be registered with zero length.');
        }
        this._id = id;
    }

    public get id() {
        return this._id;
    }
}

export default UserId;