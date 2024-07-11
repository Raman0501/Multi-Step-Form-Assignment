import React from "react";

const Navigation = ({ currentStep, setCurrentStep, handleSubmit }) => {
  return (
    <div>
      {currentStep > 0 && (
        <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
      )}
      {currentStep < 2 ? (
        <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
      ) : (
          <button onClick={handleSubmit}>Submit</button>
          
      )}
    </div>
  );
};

export default Navigation;
