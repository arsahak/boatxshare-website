"use client";

import { createBoatListerRequest } from "@/app/action/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

import ListingQuestionFour from "./ListingQuestionFour";
import ListingQuestionOne from "./ListingQuestionOne";
import ListingQuestionThree from "./ListingQuestionThree";
import ListingQuestionTwo from "./ListingQuestionTwo";

type Answer = { question: number; answer: string };

const BoatListingSection = () => {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const commonProps = {
    selectedOption,
    setSelectedOption,
    currentStep,
    setCurrentStep,
    answers,
    setAnswers,
  };

  const answersObject = answers.reduce((obj: any, item: any) => {
    obj[`question${item.question}`] = item.answer;
    return obj;
  }, {});

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    if (!answers.length) {
      setError("Please select an option before submitting.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("isBoatLister", JSON.stringify(false));
    formData.append(
      "isBoatListerDetails",
      JSON.stringify({
        listingRequest: true,
        listingRequestInfo: answersObject,
      })
    );

    const result = await createBoatListerRequest(formData);

    if (result.ok) {
      toast.success("Successfully send boat lister request");
      router.push("/");
    } else {
      setError(result.error || "Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ListingQuestionOne {...commonProps} />;
      case 2:
        return <ListingQuestionTwo {...commonProps} />;
      case 3:
        return <ListingQuestionThree {...commonProps} />;
      case 4:
        return <ListingQuestionFour {...commonProps} />;
      default:
        return (
          <div className="text-center">
            <h2 className="text-xl font-bold">All questions completed!</h2>
            <p className="mt-4">
              Thank you for providing the required details.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="bg-white">
      <div className="container pt-36 pb-20">
        {renderStep()}
        <div className="mt-8 flex justify-start space-x-6">
          {currentStep > 1 && (
            <button
              className="px-6 py-3 text-white bg-gray-500 hover:bg-gray-600 rounded-lg"
              onClick={handlePreviousStep}
            >
              Back
            </button>
          )}
          {currentStep <= 4 &&
            (currentStep === 4 ? (
              <button
                className={`px-6 py-3 text-white bg-primary hover:bg-hoverColor rounded-lg ${
                  selectedOption ? "" : "opacity-50 cursor-not-allowed"
                }`}
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : (
              <button
                className={`px-6 py-3 text-white bg-primary hover:bg-hoverColor rounded-lg ${
                  selectedOption ? "" : "opacity-50 cursor-not-allowed"
                }`}
                onClick={handleNextStep}
                disabled={!selectedOption}
              >
                Continue
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BoatListingSection;
