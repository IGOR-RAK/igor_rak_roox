export interface IUser {
    id:number;
    name:string;
    username:string;
    email:string;
    address:{
        street: string,        
        city:  string,
        zipcode:  string,
    };
    phone: string;
    website: string;
    company: {
      name: string      
    };
    comments?:string;
  }