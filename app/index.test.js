import { add, HourlyEmployee } from "./index.js";

describe("Calc", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("Employees", () => {
  const employee = new HourlyEmployee({
    first: "Mark",
    last: "Zuckerberg",
    position: "Clerk",
    hourlyRate: "1000",
  });

  it("creates an Hourly Employee", () => {
    expect(employee).toBeInstanceOf(HourlyEmployee);
  });

  it("returns the correct full name of an Hourly Employee", () => {
    expect(employee.fullName).toBe("Mark Zuckerberg");
  });

  it("calculates the correct pay w/o specifying the hours", () => {
    expect(employee.calculatePay()).toBe(40000);
  });
});
