//* https://medium.com/@thebabscraig/javascript-design-patterns-part-1-the-factory-pattern-5f135e881192
//*https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases-7b9f0d22151d
//*factory es un patron de diseño, y es muy usado

//*factory pattern is preferred in cases where the object creation process depends on dynamic factors — such as when we want to dynamically create subclasses. In some cases, however, this distinction is not clear.

function vehicleFactory(manufacturer, plateNO) {
    return {
        manufacturer,
        plateNO,
        startEngine() {
            console.log("reving engine")
        },
        drive() {
            console.log("driving car...")
        }
    }
}

const Vehicle1 = vehicleFactory("Toyota", 12345);
console.log(Vehicle1)
    // prints 
    //{
    //  manufacturer: 'Toyota',
    //  plateNO: 12345,
    //  startEngine: [Function: startEngine],
    //  drive: [Function: drive]
    //}

const Vehicle2 = vehicleFactory("Ford", 13345);
console.log(Vehicle2)
    // prints 
    // {
    //  manufacturer: 'Ford',
    //  plateNO: 13345,
    //  startEngine: [Function: startEngine],
    //  drive: [Function: drive]
    // }