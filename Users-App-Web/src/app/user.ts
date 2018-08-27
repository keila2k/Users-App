export class User {
  id: number;
  name: string;
  username: string;
  password: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  birthDate: string;
  habits: {title: string, description: string}[];
  admin: boolean;
}

