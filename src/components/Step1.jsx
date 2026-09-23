import { useForm } from "../context/FormContext";
import { validateStep } from "../utils/validation";

function Step1() {
  const {
    form,
    errors,
    setErrors,
    updateField,
  } = useForm();

  const validateField = (field) => {
    const stepErrors = validateStep(1, form);

    setErrors((previous) => ({
      ...previous,
      [field]: stepErrors[field] || "",
    }));
  };

  return (
    <>
      <div className="step-header">
        <h2>Tell us about yourself</h2>
        <p>
          Start with your basic information so we can create your profile.
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="name">
          Full Name <span className="required-asterisk">*</span>
        </label>

        <input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          onBlur={() => validateField("name")}
          className={errors.name ? "input-error" : ""}
        />

        {errors.name && (
          <div className="error-message">{errors.name}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email Address <span className="required-asterisk">*</span>
        </label>

        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          onBlur={() => validateField("email")}
          className={errors.email ? "input-error" : ""}
        />

        {errors.email && (
          <div className="error-message">{errors.email}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="portfolio">
          Portfolio / GitHub
          <span className="optional-tag">(optional)</span>
        </label>

        <input
          id="portfolio"
          type="url"
          placeholder="https://github.com/yourname"
          value={form.portfolio}
          onChange={(e) => updateField("portfolio", e.target.value)}
          onBlur={() => validateField("portfolio")}
          className={errors.portfolio ? "input-error" : ""}
        />

        {errors.portfolio && (
          <div className="error-message">{errors.portfolio}</div>
        )}
      </div>
    </>
  );
}

export default Step1;