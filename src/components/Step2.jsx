import { useForm } from "../context/FormContext";

const tracks = [
  {
    name: "Frontend",
    description: "Build user interfaces and web experiences.",
  },
  {
    name: "Backend",
    description: "Build APIs, services and server-side systems.",
  },
  {
    name: "Fullstack",
    description: "Work across frontend and backend development.",
  },
  {
    name: "UI/UX Design",
    description: "Design intuitive digital products and experiences.",
  },
];

const experienceLevels = ["Junior", "Mid", "Senior"];

function Step2() {
  const {
    form,
    errors,
    selectTrack,
    updateField,
  } = useForm();

  return (
    <>
      <div className="step-header">
        <h2>Your professional preferences</h2>
        <p>
          Tell us about the role and experience level that best describes you.
        </p>
      </div>

      <div className="form-group">
        <label>
          Primary Track <span className="required-asterisk">*</span>
        </label>

        <div className="radio-cards-grid">
          {tracks.map((track) => (
            <label
              key={track.name}
              className={`radio-card ${
                form.track === track.name ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="track"
                value={track.name}
                checked={form.track === track.name}
                onChange={() => selectTrack(track.name)}
              />

              <div>
                <div className="radio-title">{track.name}</div>
                <div className="radio-desc">
                  {track.description}
                </div>
              </div>
            </label>
          ))}
        </div>

        {errors.track && (
          <div className="error-message">{errors.track}</div>
        )}
      </div>

      <div className="form-group">
        <label>
          Experience Level <span className="required-asterisk">*</span>
        </label>

        <div className="pill-options-group">
          {experienceLevels.map((level) => (
            <button
              key={level}
              type="button"
              className={`pill-option ${
                form.experience === level ? "active" : ""
              }`}
              onClick={() => updateField("experience", level)}
            >
              {level}
            </button>
          ))}
        </div>

        {errors.experience && (
          <div className="error-message">
            {errors.experience}
          </div>
        )}
      </div>
    </>
  );
}

export default Step2;