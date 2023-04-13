import { LetterFeature } from "@/features/letter/letter.feature";
import React from "react";

export const Yours = () => {
  const { myLetters } = LetterFeature();
  return <div>Yours</div>;
};
