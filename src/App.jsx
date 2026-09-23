import { useState } from "react";

import { useForm } from "./context/FormContext";

import Stepper from "./components/Stepper";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Review from "./components/Review";
import Navigation from "./components/Navigation";

import "./App.css";

function App() {
  const {
    form,
    currentStep,
    draftSaved,
    setForm,
    setCurrentStep,
    setErrors,
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const startNewApplication = () => {
    setForm({
      name: "",
      email: "",
      portfolio: "",
      track: "",
      experience: "",
      techStack: [],
    });

    setCurrentStep(1);
    setErrors({});
    setSubmitted(false);

    localStorage.removeItem("tamasha-onboarding");
  };

  if (submitted) {
    return (
      <main className="app-container">
        <div className="wizard-card">
          <div className="success-page">
            <div className="success-content">

              <div className="success-icon">
                🎉
              </div>

              <h2>
                Application Submitted Successfully!
              </h2>

              <p className="success-message">
                Thank you, <strong>{form.name}</strong>!
                Your onboarding profile has been registered for Tamasha.live.
              </p>

              <div className="success-details">

                <div className="success-detail-row">
                  <strong>Email:</strong>
                  <span>{form.email}</span>
                </div>

                <div className="success-detail-row">
                  <strong>Track:</strong>
                  <span>{form.track}</span>
                </div>

                <div className="success-detail-row">
                  <strong>Experience:</strong>
                  <span>{form.experience}</span>
                </div>

                <div className="success-detail-row">
                  <strong>Tech Stack:</strong>
                  <span>
                    {form.techStack.length > 0
                      ? form.techStack.join(", ")
                      : "Not specified"}
                  </span>
                </div>

              </div>

              <button
                type="button"
                className="start-new-button"
                onClick={startNewApplication}
              >
                Start New Application
              </button>

            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="app-container">
      <div className="wizard-card">

        <header className="wizard-brand-header">
          <div className="brand-logo-area">

            <div className="brand-badge-logo">
              T
            </div>

            <div className="brand-text">
              <h1>Tamasha</h1>
              <span className="sub-tag">
                Developer Onboarding
              </span>
            </div>

          </div>

          <div
            className={`draft-indicator ${
              draftSaved ? "saved" : "saving"
            }`}
          >
            <span className="dot"></span>

            {draftSaved ? "Draft Saved" : "Saving..."}
          </div>
        </header>

        <Stepper />

        <section className="step-content">
          {currentStep === 1 && <Step1 />}

          {currentStep === 2 && <Step2 />}

          {currentStep === 3 && <Step3 />}

          {currentStep === 4 && <Review />}
        </section>

        <Navigation
          onSubmit={() => setSubmitted(true)}
        />

      </div>
    </main>
  );
}

export default App;