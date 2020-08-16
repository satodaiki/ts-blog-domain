import * as chai from 'chai';
import UserApplicationService from '@/application/user/UserApplicationService';
import InMemoryUserRepository from '@/repositories/inMemory/InMemoryUserRepository';
import UserData from '@/application/user/UserData';

describe('Test User', () => {

    const userApplicationService = new UserApplicationService(new InMemoryUserRepository());

    it('signup', () => {
        const name: string = "test"
        const email: string = "test@test.com"
        const password: string = "test"

        const userData: UserData = userApplicationService.signUp(name, email, password);

        chai.assert.strictEqual(userData.name, name);
    });

    it('login', () => {
        const name: string = "test"
        const email: string = "test@test.com"
        const password: string = "test"

        const userData: UserData = userApplicationService.signUp(name, email, password);

        chai.expect(() => userApplicationService.login(email, password)).not.to.throw()
    });
});