export class User {
    name: string;
    surname: string;
    email: string;
    password: string;
    createDate: Date;

    get fullName(): string {
        return this.name + ' ' + this.surname;
    }
}
