import React from "react";
import { shallow } from "enzyme";
import Valoration from "./Valoration";

describe("Valoration", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Valoration />);
    expect(wrapper).toMatchSnapshot();
  });
});
