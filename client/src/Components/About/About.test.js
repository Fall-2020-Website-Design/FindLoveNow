import React from "react";
import { About } from "./About";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { AuthProvider } from "../../Context/authContext";

Enzyme.configure({ adapter: new Adapter() });
describe("About Us", () => {
  const params = {
    context: {
      userID: null,
      email: "",
      isAuthenicated: false,
    },
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<About />, params.context);
  });

  test("renders", () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <AuthProvider value={params.context}>
            <About />
          </AuthProvider>
        </MemoryRouter>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
