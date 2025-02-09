"use client";

interface Answer {
  question: number;
  answer: string;
}

interface ListingQuestionFourProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  selectedOption: string | null;
  setSelectedOption: (option: string | null) => void;
  answers: Answer[];
  setAnswers: (answers: (prev: Answer[]) => Answer[]) => void;
}

const ListingQuestionFour: React.FC<ListingQuestionFourProps> = ({
  selectedOption,
  setSelectedOption,
  answers,
  setAnswers,
}) => {
  const options = ["I am ready to go", "I need some information"];

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);

    setAnswers((prev) => [
      ...prev.filter((item) => item.question !== 4),
      { question: 4, answer: option },
    ]);
  };

  return (
    <div>
      <div className="max-w-5xl">
        <h2 className="font-bold text-lg md:text-2xl leading-snug text-center md:text-left">
          Great! Almost done.
        </h2>
        <h2 className="font-bold text-lg md:text-2xl leading-snug text-center md:text-left mt-4">
          Based on your responses, here is the information you need to know:
          This question is required.*
        </h2>
        <p className="text-base font-normal text-center md:text-left mt-4">
          (Scroll to complete ↓)
        </p>
      </div>

      <div className="mt-6 space-y-6">
        <section>
          <h3 className="font-bold text-lg md:text-xl">1. Rental Agreement</h3>
          <p className="text-lg mt-4">
            Getmyboat does not offer rental protection through our platform. You
            must provide a written or electronic rental agreement with the
            renter for each booking. This formal agreement must be read and
            signed by both parties before departure.
          </p>
        </section>
        <section>
          <h3 className="font-bold text-lg md:text-xl">
            2. Rental Instructions
          </h3>
          <p className="text-lg mt-4">
            You are required to provide clear pre-rental instructions on safety,
            operation, and emergency procedures. Always have a quick way for the
            renter to contact you in case of an emergency.
          </p>
        </section>
        <section>
          <h3 className="font-bold text-lg md:text-xl">3. Safety Equipment</h3>
          <p className="text-lg mt-4">
            You are required to provide all necessary safety equipment for the
            renter, including life vests and first aid. Confirm that the renter
            understands each item's location and proper usage.
          </p>
        </section>
        <section>
          <h3 className="font-bold text-lg md:text-xl">4. Payments</h3>
          <p className="text-lg mt-4">
            When your customers book a trip, they will pay the total cost
            upfront through Getmyboat. Once the trip is confirmed, you will
            receive the customer's details and can communicate with them
            directly. To help keep you safe, we do not allow advance cash
            payments or the sharing of contact information including email,
            websites, and phone numbers.
          </p>
        </section>
        <section>
          <p className="text-lg mt-4">
            *Certain bodies of water may require additional permits or
            regulations. By adding a listing on Getmyboat, you agree to be
            solely responsible for compliance with all local, state, and country
            ordinances.
          </p>
        </section>
        <section>
          <h3 className="font-bold text-lg md:text-xl">
            We understand that boating regulations can be difficult and want to
            ensure you are 100% ready for the water. Please let us know if you
            need more information before getting started.
          </h3>
        </section>
      </div>

      <div className="flex flex-col justify-center p-4 mt-8">
        <div className="w-full max-w-sm">
          {options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center p-4 mb-4 rounded-lg border ${
                selectedOption === option
                  ? "border-gray-800 bg-gray-100"
                  : "border-gray-300"
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              <input
                type="radio"
                id={`option-${index}`}
                name="userType"
                value={option}
                checked={selectedOption === option}
                className="w-5 h-5 accent-gray-800 cursor-pointer"
                readOnly
              />
              <label
                htmlFor={`option-${index}`}
                className="ms-2 text-lg font-medium cursor-pointer"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingQuestionFour;
