import crypto from 'crypto';

class UserPassword {
    private _password: string;
    constructor(password: string) {
        if (password.length === 0) {
            throw new Error('userName cannot be registered with zero length.');
        }
        const hashPass = crypto.createHash('md5').update(password).digest('hex');

        this._password = hashPass;
    }

    public get value() {
        return this._password;
    }
}

export default UserPassword;