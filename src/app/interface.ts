export interface Signup {
    name:string,
    password: string,
    email: string
}

export interface Login {
    email: string,
    password: string,

}

export interface ProductDetails {
    name: string,
    price: string,
    weight:string,
    category:string,
    color:string,
    description:string,
    image:string,
    id:Number
}