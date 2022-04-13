const { request } = require('express');
const { faker } = require('@faker-js/faker');
const express = require( 'express');
const res = require('express/lib/response');

const app = express(); //funcion devuelve objetos con propiedades
console.log(app);

class User{
    constructor(){
        this._id = faker.datatype.uuid;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id=faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street:faker.address.streetName(),
            city:faker.address.cityName(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
}

app.get("/api/users/new",(request,response) =>{
    return response.status(200).json(new User());
})

app.get("/api/companies/new", (request,response) =>{
    return response.status(200).json(new Company());
})

app.get("/api/user/company", (request,response) =>{
    return response.status(200).json({user: new User(), company: new Company()});
})


app.listen( 8080, () => {
    console.log( 'El servidor se encuentra corriendo en el puerto 8080')
});