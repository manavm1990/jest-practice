// Note 🎵: We would normally just throw a bunch of unrelated fxns
// into a single file. This is just for the sake of practice.

// Calc
export const add = (a, b) => a + b;

export const sub = (a, b) => a - b;

export const mul = (a, b) => a * b;

export const div = (a, b) => a / b;

// Employees
class Employee {
  constructor({ first, last, position }) {
    this._firstName = first;
    this._lastName = last;
    this.position = position;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

export class HourlyEmployee extends Employee {
  constructor({ first, last, position, hourlyRate }) {
    super({ first, last, position });
    this.hourlyRate = hourlyRate;
  }

  calculatePay(hours = 40) {
    return hours * this.hourlyRate;
  }
}

export class SalariedEmployee extends Employee {
  constructor({ first, last, position, salary }) {
    super({ first, last, position });
    this.salary = salary;
  }

  get weeklyPay() {
    return this.salary / 52;
  }
}
