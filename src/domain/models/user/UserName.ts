class UserName {
    private _name: string;
    constructor(name: string) {
        if (name.length === 0) {
            throw new Error('userName cannot be registered with zero length.');
        }
        this._name = name;
    }

    public get name() {
        return this._name;
    }
}

export default UserName;