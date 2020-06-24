import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export class User {
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string = "user";
    token: string;
}