//*apply

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
console.log(

  person.fullName.apply(person1)
)




const person2 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person3 = {
  firstName:"John",
  lastName: "Doe"
}
console.log(
  person2.fullName.apply(person3, ["Oslo", "Norway"])

)

//*lo mismo pero con call:

const person4 = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person5 = {
  firstName:"Juan",
  lastName: "Palotes"
}
console.log(

  person4.fullName.call(person5, "Oslo", "Norway")
  )