 
function sayHello(person: string): string {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);

interface personOptions{
    title: string;
    nickname: string;
    salary?: number;
    position?: string;
    attitude?: string;
    readonly SSN: number;
}

class Person implements personOptions{
    //first name, last name, age, phone number, state, zip code, and occupation
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: number;
    state: string;
    zipCode: number;
    occupation: string;
    hourlyWage: number;
    certs: string[];

    title: string;
    nickname: string;
    salary: number;
    position: string;
    attitude: string;
    SSN: number;


   constructor( 
    firstName: string,
    lastName: string,
    age: number,
    phoneNumber: number,
    state: string,
    zipCode: number,
    occupation: string,
    hourlyWage?: number,
    certs?: string[] 
   ){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.state = state;
    this.zipCode = zipCode;
    this.occupation = occupation;
    this.hourlyWage = hourlyWage;
    this.certs = certs;
   }

   getAll(){
       return "First Name: " + this.firstName + "<br> Last Name: " + this.lastName + "<br> Age: " + this.age + "<br> Phone Number: " + this.phoneNumber + "<br> State:  " + this.state + "<br> Zip Code: " + this.zipCode + "<br> Occupation: " + this.occupation; 
   }

   getFullName(){
       return this.firstName + " " + this.lastName;
   }

   getLocation(){
       return this.firstName + "'s Location is: " + this.state + " " + this.zipCode;
   }

   getNameAndPhoneNumber(){
       return this.firstName + " " + this.lastName + "<br>" + this.phoneNumber;
   }

   getAgeWithName(){
       return this.firstName + " is " + this.age + " years old."; 
    }

    getJob(){
        return this.firstName + " works as a " + this.occupation;
    }

    calculateWage(hours? : number){
        if (hours == null){
            hours = 40;
        }

        var earnings = hours * this.hourlyWage;
        return this.firstName + " usually makes $" + earnings + " in a " + hours + " hour work-week.";
    }

    addCerts(...qualifications: string[]){
        if (this.certs == undefined){
            this.certs = [];
        }

        this.certs = [...this.certs, ...qualifications];

        return this.firstName + " has all these certificates and degrees: " + this.certs;
    }

    checkAttitude(attitude: string){
        if (attitude.localeCompare(this.attitude) == 0){
            return this.getAll() + "<br> Attitude: " + this.attitude;
        }
    }

    checkSalary(salary: number){
        if (salary == this.salary){
            return this.getAll() + "<br> Salary: " + this.salary;
        }
    }

    // title: string;
    // nickname: string;
    // salary: number;
    // position: string;
    // attitude: string;
    // SSN: number;


}

var Karen = new Person("Karen", "Warren", 55, 9657345211, "MA", 67853, "Florist", 45, ["BA", "MA", "MFA"]);
var Gary = new Person("Gary", "Smit", 48, 7543642135, "TN", 65654, "Pilot");
var Tomas = new Person("Tomas", "Cabrera", 23, 2423339872, "PR", 89432, "Mechanic", 25);
var Jamel = new Person("Jamel", "Thomas", 32, 7045756869, "NC", 28023, "Software Engineer");

document.getElementById("para2").innerHTML = Karen.getAgeWithName();
document.getElementById("para3").innerHTML = Gary.getLocation();
document.getElementById("para4").innerHTML = Tomas.getNameAndPhoneNumber() + "<br>" + Tomas.calculateWage();
document.getElementById("para5").innerHTML = Jamel.getFullName() + "<br>" + Jamel.getJob();

document.getElementById("karenC").innerHTML = Karen.addCerts("MBA", "JD", "CPA");
Tomas.attitude = "Bueno";
document.getElementById("tomasOpt").innerHTML = Tomas.checkAttitude("Bueno");
Gary.salary = 85000;
document.getElementById("garyOpt").innerHTML = Gary.checkSalary(85000);



