import { useState } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

export default function BusinessInvestorForm() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const [formData, setformData] = useState({
    businessName: "",
    businessEmail: "",
    businessPhoneNumber: "",
    industrySector: "",
    establishmentDate: "",
    revenueProfit: null,
    taxIdentificationNumber: "",
    purposeOfInvestment: "",
    valueOfEquity: 0,
    businessRegistration: "",
    licensesAndPermits: null,
    accountStatement: null,
  });

  // To be used later for submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataJson = JSON.stringify(formData);

    const alertMessage = `Submitted form data: ${formDataJson}`;

    alert(alertMessage);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="lg:w-1/2 lg:min-h-screen">
        <img
          src="/buisness.jpg"
          alt=""
          className="h-[390px] lg:h-screen w-full object-cover rounded-br-[1000px] lg:rounded-none lg:min-h-full"
        />
      </div>

      <div className="md:w-1/2">
        <form>
          {step == 1 && (
            <PageOne
              handleNext={handleNext}
              formData={formData}
              setformData={setformData}
            />
          )}
          {step == 2 && (
            <PageTwo
              formData={formData}
              setformData={setformData}
              handlePrevious={handlePrevious}
              handleSubmit={handleSubmit}
            />
          )}
        </form>
      </div>
    </div>
  );
}
