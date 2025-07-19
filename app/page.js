"use client";
import React from "react";
import Hero from "./(lndpg)/Hero";
import WhereStudentWork from "./(lndpg)/WhereStudentWork";
import Goals from "./(lndpg)/Goals";
import TrainingApproach from "./(lndpg)/TrainingApproach";
import TrainingOptions from "./(lndpg)/TrainingOptions";
import EnrollDiscount from "./(lndpg)/Enroll-Discount";
// import NewsLetter from "./(lndpg)/NewsLetter";

const page = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhereStudentWork />
      <Goals />
      <EnrollDiscount />
      <TrainingApproach />
      <TrainingOptions />

      {/* <NewsLetter /> */}
    </div>
  );
};

export default page;
