class addressbook{
    constrcutor(firstName,lastName,address,city,state,zip,phone,email){
        this.firtsName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }
    get firstName() { return this._firstName; }
    set firstName(firstName) {
    
            this._firstName = firstName;
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
            this._lastName = lastName;
    
    }
    get address() { return this._address; }
    set address(address) {

            this._address = address;
    }


    get city() { return this._city; }
    set city(city) {

            this._city = city;
       
    }

    
    get state() { return this._state; }
    set state(state) {
                    this._state = state;
    
    }

    get zip() { return this._zip; }
    set zip(zip) {
    
            this._zip = zip;
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
            this._phoneNumber = phoneNumber;
    }

    get email() { return this._email; }
    set email(email) {
    
            this._email = email;
    
    }

    toString() {
        return "\nName: " + this.firstName + " " + this.lastName +
            "\nAddress: " + this.address +
            "\nCity: " + this.city +
            "\nState: " + this.state +
            "\nZip: " + this.zip +
            "\nPhone Number: " + this.phoneNumber +
            "\nEmail: " + this.email;
    }
}
let contactarray = new Array();
contactarray.push(new addressbook("mayura","kolhe","sarasvatinagar","jalgoan","maharashtra",1234,1111111111,"mayuraa@gmail.com"));
console.log(contactarray);
let length = contactarray.length;
for(let i=0;i<length;i++){
console.log(contactarray(i));
}