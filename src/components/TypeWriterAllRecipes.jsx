import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const TypeWriterAllRecipes = () => {
  const [text] = useTypewriter({
    words: [
      "find the summary of all the recipes in one page.",
      "the details of any recipe by clicking the View Details button.",
    ],
    loop:0
  });
  return (
    <div className="py-6 px-6 flex gap-5 justify-start border border-teal-600 rounded m-3 bg-[#fe9eb9] shasow-xl">
      <h1 className="text-xl font-semibold">
        Here You Can <span className="text-teal-700">{text}</span>
        <Cursor></Cursor>{" "}
      </h1>
    </div>
  );
};

export default TypeWriterAllRecipes;
