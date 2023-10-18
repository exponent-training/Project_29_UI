import { Role } from "./role.model";

export class Customer {

    id: number | undefined ;
    firstname: string = '';
    lastname: string = '';
    fathername: string = '';
    identificationmark: string = '';
    address: string = '';
    uname: string = '';
    password: string = '';
    occupation: string ='';
    dateofbirth: string = '';
    contactno: string = '';
    emailid: string = '';
    aadharcar: string = '';
    pancard:string = '';
    gender:string = '';
    role: Role[] = [];

}