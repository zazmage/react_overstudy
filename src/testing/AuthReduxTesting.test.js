import "@testing-library/jest-dom";
import reducer, { setUser, setReady } from "../app/slices/authSlice";

describe("Authorization redux Test", () => {
  const initialState = {
    user: null,
    ready: false,
  };

  test("Must return auth initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      user: null,
      ready: false,
    });
  });

  test("Must return updated user state", () => {
    expect(
      reducer(
        initialState,
        setUser({ name: "Daniel", email: "daniel@gmail.com", uid: 123456789 })
      )
    ).toEqual({
      user: { name: "Daniel", email: "daniel@gmail.com", uid: 123456789 },
      ready: false,
    });
  });

  test("Must return updated ready state", () => {
    expect(reducer(initialState, setReady())).toEqual({
      user: null,
      ready: true,
    });
  });
});
