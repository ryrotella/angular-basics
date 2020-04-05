var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage, certs) {
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
    Person.prototype.getAll = function () {
        return "First Name: " + this.firstName + "<br> Last Name: " + this.lastName + "<br> Age: " + this.age + "<br> Phone Number: " + this.phoneNumber + "<br> State:  " + this.state + "<br> Zip Code: " + this.zipCode + "<br> Occupation: " + this.occupation;
    };
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getLocation = function () {
        return this.firstName + "'s Location is: " + this.state + " " + this.zipCode;
    };
    Person.prototype.getNameAndPhoneNumber = function () {
        return this.firstName + " " + this.lastName + "<br>" + this.phoneNumber;
    };
    Person.prototype.getAgeWithName = function () {
        return this.firstName + " is " + this.age + " years old.";
    };
    Person.prototype.getJob = function () {
        return this.firstName + " works as a " + this.occupation;
    };
    Person.prototype.calculateWage = function (hours) {
        if (hours == null) {
            hours = 40;
        }
        var earnings = hours * this.hourlyWage;
        return this.firstName + " usually makes $" + earnings + " in a " + hours + " hour work-week.";
    };
    Person.prototype.addCerts = function () {
        var qualifications = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            qualifications[_i] = arguments[_i];
        }
        if (this.certs == undefined) {
            this.certs = [];
        }
        this.certs = __spreadArrays(this.certs, qualifications);
        return this.firstName + " has all these certificates and degrees: " + this.certs;
    };
    Person.prototype.checkAttitude = function (attitude) {
        if (attitude.localeCompare(this.attitude) == 0) {
            return this.getAll() + "<br> Attitude: " + this.attitude;
        }
    };
    Person.prototype.checkSalary = function (salary) {
        if (salary == this.salary) {
            return this.getAll() + "<br> Salary: " + this.salary;
        }
    };
    return Person;
}());
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
