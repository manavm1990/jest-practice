import axios from "axios";
import { add, getUsers } from "./index.js";

it("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

// In order to test this w/o making an actual request, we can use a mock.
jest.mock("axios");

describe("getUsers", () => {
  it("gets users", () => {
    const mockResponse = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    };

    axios.mockResolvedValue(mockResponse);

    // `toEqual` uses strict equality. Use it for objects (non-primitives).
    return getUsers.then((response) =>
      expect(response[0]).toEqual(mockResponse)
    );
  });
});
