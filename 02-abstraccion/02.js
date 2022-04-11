class Student {
    constructor() {
        let name;
        let marks;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getMarks() {
        return this.marks;
    }
    setMarks(marks) {
        this.marks = marks;
    }

}
let stud = new Student();
stud.setName("Sonu");
stud.setMarks(95);
console.log(stud.getName() + " " + stud.getMarks());