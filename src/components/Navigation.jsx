import { useForm } from "../context/FormContext";
import { validateStep } from "../utils/validation";

function Navigation({ onSubmit }) {
  const {
    form,
    currentStep,
    setCurrentStep,
    errors,
    setErrors,
  } = useForm();

  const handleContinue = () => {
    const stepErrors = validateStep(currentStep, form);

    setErrors(stepErrors);

    if (Object.keys(stepErrors).length > 0) {
      const firstError = Object.values(stepErrors)[0];

      alert(firstError);

      return;
    }

    setCurrentStep((step) => Math.min(step + 1, 4));
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((step) => Math.max(step - 1, 1));
  };

  const handleSubmit = () => {
    const stepErrors = validateStep(1, form);

    if (Object.keys(stepErrors).length > 0) {
      alert("Please complete your personal information.");

      setCurrentStep(1);
      setErrors(stepErrors);

      return;
    }

    onSubmit();
  };

  return (
    <div className="wizard-footer">
      <div className="footer-left">
        {currentStep > 1 && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleBack}
          >
            Back
          </button>
        )}
      </div>

      <div className="footer-right">
        {currentStep < 4 ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleContinue}
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSubmit}
          >
            Submit Application
          </button>
        )}
      </div>
    </div>
  );
}

export default Navigation;