export interface IAdders {
    street: string;
    city: string;
    zipcode: string;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAdders;
    phone: string;
    website: string;
    company: ICompany,
    comment?: string
}