import * as React from "react";
import { create } from "react-test-renderer";
import Details from "../page/Detail";

test("snapshot", () => {
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot();
});
