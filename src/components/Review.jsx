import { useForm } from "../context/FormContext";

function Review() {
  const {
    form,
    setCurrentStep,
  } = useForm();

  return (
    <>
      <div className="step-header">
        <h2>Review your profile</h2>
        <p>
          Check your information before submitting your onboarding profile.
        </p>
      </div>

      <div className="review-cards-list">

        {/* Personal Information */}
        <div className="review-card">
          <div className="review-card-header">
            <h3>Personal Information</h3>

            <button
              type="button"
              className="btn-edit"
              onClick={() => setCurrentStep(1)}
            >
              Edit
            </button>
          </div>

          <div className="review-card-body">
            <div className="review-row">
              <span className="review-label">Name</span>
              <span className="review-value">
                {form.name || "Not provided"}
              </span>
            </div>

            <div className="review-row">
              <span className="review-label">Email</span>
              <span className="review-value">
                {form.email || "Not provided"}
              </span>
            </div>

            <div className="review-row">
              <span className="review-label">Portfolio</span>
              <span className="review-value">
                {form.portfolio ? (
                  <a
                    href={
                      form.portfolio.startsWith("http")
                        ? form.portfolio
                        : `https://${form.portfolio}`
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {form.portfolio}
                  </a>
                ) : (
                  "Not provided"
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="review-card">
          <div className="review-card-header">
            <h3>Professional Preferences</h3>

            <button
              type="button"
              className="btn-edit"
              onClick={() => setCurrentStep(2)}
            >
              Edit
            </button>
          </div>

          <div className="review-card-body">
            <div className="review-row">
              <span className="review-label">Track</span>

              <span className="review-value">
                <span className="highlight-badge">
                  {form.track || "Not selected"}
                </span>
              </span>
            </div>

            <div className="review-row">
              <span className="review-label">Experience</span>

              <span className="review-value">
                {form.experience || "Not selected"}
              </span>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="review-card">
          <div className="review-card-header">
            <h3>Technology</h3>

            <button
              type="button"
              className="btn-edit"
              onClick={() => setCurrentStep(3)}
            >
              Edit
            </button>
          </div>

          <div className="review-card-body">
            <div className="review-row">
              <span className="review-label">Tech Stack</span>

              <div className="review-value">
                {form.techStack.length > 0 ? (
                  <div className="tech-tags-wrapper">
                    {form.techStack.map((technology) => (
                      <span
                        className="tech-tag"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                ) : (
                  "Not specified"
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Review;