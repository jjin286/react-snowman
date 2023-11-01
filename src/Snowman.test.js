// import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

  const wrongLetters = 'zyxwvu';
  //FIXME: '7' needs to be changed to variable
  for (let i = 0; i < 7; i++) {
    const wrongGuesses = container.querySelector(`#${wrongLetters[i]}`);
    console.log('WRONG GUESSES', wrongGuesses)
    fireEvent.click(wrongGuesses);
  }

  expect(
    container.querySelector("#Snowman-buttons")
  ).toHaveAttribute('hidden');
})
