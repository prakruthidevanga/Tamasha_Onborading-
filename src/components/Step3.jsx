import { useForm } from "../context/FormContext";

const technologyOptions = {
  Frontend: ["React", "Vue", "TypeScript", "CSS Modules"],

  Backend: [
    "Node.js",
    "Python/Django",
    "PostgreSQL",
    "Redis",
  ],

  "UI/UX Design": [
    "Figma",
    "Storybook",
    "Design Systems",
  ],
};

function Step3() {
  const {
    form,
    errors,
    toggleTechnology,
  } = useForm();

  const technologies = technologyOptions[form.track] || [];

  return (
    <>
      <div className="step-header">
        <h2>Your technical skills</h2>
        <p>
          Select the technologies that match your selected track.
        </p>
      </div>

      {form.track === "Fullstack" ? (
        <div className="fullstack-info">
          <strong>Fullstack selected.</strong>
          <br />
          The assessment does not specify a separate technology
          list for this track, so you can continue to the review.
        </div>
      ) : technologies.length > 0 ? (
        <>
          <div className="form-group">
            <label>
              Technologies <span className="required-asterisk">*</span>
            </label>

            <div className="checkbox-cards-grid">
              {technologies.map((technology) => {
                const selected = form.techStack.includes(technology);

                return (
                  <label
                    key={technology}
                    className={`checkbox-card ${
                      selected ? "checked" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() =>
                        toggleTechnology(technology)
                      }
                    />

                    <span className="checkbox-custom">
                      {selected && (
                        <span className="checkmark-icon">
                          ✓
                        </span>
                      )}
                    </span>

                    <span className="tech-name">
                      {technology}
                    </span>
                  </label>
                );
              })}
            </div>

            {errors.techStack && (
              <div className="error-message">
                {errors.techStack}
              </div>
            )}
          </div>

          <div className="selected-summary-badge">
            {form.techStack.length === 0
              ? "No technologies selected"
              : `${form.techStack.length} technology${
                  form.techStack.length > 1 ? "ies" : "y"
                } selected`}
          </div>
        </>
      ) : (
        <div className="fullstack-info">
          Please select a track in the previous step first.
        </div>
      )}
    </>
  );
}

export default Step3;