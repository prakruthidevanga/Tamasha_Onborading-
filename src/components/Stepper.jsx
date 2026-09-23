import { useForm } from "../context/FormContext";

const steps = [
  "Personal",
  "Preferences",
  "Technology",
  "Review",
];

function Stepper() {
  const { currentStep } = useForm();

  return (
    <div className="progress-bar-container">
      <div className="progress-steps-list">
        {steps.map((step, index) => {
          const stepNumber = index + 1;

          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;

          return (
            <div
              key={step}
              className={`progress-step-item ${
                isActive ? "active" : ""
              } ${isCompleted ? "completed" : ""}`}
            >
              <div className="step-circle">
                {isCompleted ? "✓" : stepNumber}
              </div>

              <div className="step-title">{step}</div>

              {stepNumber < steps.length && (
                <div className="step-line"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stepper;