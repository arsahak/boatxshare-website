"use client";

type ListingQuestionTwoProps = {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  selectedOption: string | null;
  setSelectedOption: (option: string | null) => void;
  answers: { question: number; answer: string }[];
  setAnswers: (answers: { question: number; answer: string }[]) => void;
};

const ListingQuestionTwo = ({
  currentStep,
  setCurrentStep,
  selectedOption,
  setSelectedOption,
  answers,
  setAnswers,
}: ListingQuestionTwoProps) => {
  const options = [
    "United States of America",
    "Canada",
    "Europe",
    "Rest of World",
  ];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    const updatedAnswers = answers.filter((a) => a.question !== currentStep);
    setAnswers([...updatedAnswers, { question: currentStep, answer: option }]);
  };

  const handleContinue = () => {
    if (selectedOption) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="p-4">
      <div className="max-w-5xl">
        <h2 className="font-bold text-lg md:text-2xl leading-snug text-center md:text-left">
          What region do you operate in? This question is required.*
        </h2>
      </div>
      <div className="flex flex-col justify-center p-4 mt-8">
        <div className="w-full max-w-sm">
          {options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center p-4 mb-4 rounded-lg border cursor-pointer ${
                selectedOption === option
                  ? "border-gray-800 bg-gray-100"
                  : "border-gray-300"
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              <input
                type="radio"
                id={`option-${index}`}
                name="region"
                value={option}
                checked={selectedOption === option}
                readOnly
                className="w-5 h-5 accent-gray-800"
              />
              <label
                htmlFor={`option-${index}`}
                className="ms-2 text-lg font-medium"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* <button
        className={`px-6 py-3 mt-8 rounded-lg w-36 ${
          selectedOption
            ? "text-white bg-primary hover:bg-hoverColor"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        onClick={handleContinue}
        disabled={!selectedOption}
      >
        Continue
      </button> */}
    </div>
  );
};

export default ListingQuestionTwo;
