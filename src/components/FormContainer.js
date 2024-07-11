import React, { useState, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Navigation from "./Navigation";

const FormContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const validate = () => {
    const errors = {};
    
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
       window.alert("are you confirmed?");
      console.log("Form submitted:", formData);
     
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      {currentStep === 0 && (
        <Step1 formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {currentStep === 1 && (
        <Step2 formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {currentStep === 2 && <Step3 formData={formData} />}
      <Navigation
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default FormContainer;
