// Coding Challenge # 3

const mark = {
    fullName: 'Mark Cuban',
    mass: 10,
    height: 1.69,

    calcBmi: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const jimmy = {
  fullName: 'Jimmy Butler',
  mass: 80,
  height: 1.25,

  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBmi();
jimmy.calcBmi();
console.log(mark.bmi, jimmy.bmi);

if (mark.bmi > jimmy.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher.`)
} else if (jimmy.bmi > mark.bmi) {
    console.log(`${jimmy.fullName}'s BMI ${jimmy.bmi} is higher.`);
}


