// import React from "react";
import { render } from "@testing-library/react";
import Snowman from "./Snowman";

test("renders without crashing", function(){
  render(<Snowman />);
})

test("matches snapshot", function(){
  const {container} = render(<Snowman />);
  expect(container).toMatchSnapshot();
})

test("should lose after max wrong guesses", function(){
  const {container} = render(<Snowman />);

  expect()
})
