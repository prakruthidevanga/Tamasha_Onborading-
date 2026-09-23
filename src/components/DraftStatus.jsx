import { useState } from "react";
import { useForm } from "../context/FormContext";

function DraftStatus() {
  const {
    form,
    draftSaved,
  } = useForm();

  const [showDetails, setShowDetails] =
    useState(false);

  return (
    <div className="draft-status-wrapper">
      <button
        type="button"
        className="draft-status"
        onClick={() =>
          setShowDetails(
            (previous) => !previous
          )
        }
      >
        <span
          className={`status-dot ${
            draftSaved ? "saved" : ""
          }`}
        ></span>

        <span className="draft-status-text">
          {draftSaved
            ? "Draft saved locally"
            : "Saving draft..."}
        </span>

        <span className="draft-toggle">
          {showDetails ? "Hide" : "View"}
        </span>
      </button>

      {showDetails && (
        <div className="draft-details">
          <div className="draft-details-header">
            <div>
              <strong>Saved Draft</strong>
              <p>Your current onboarding data</p>
            </div>

            <span className="storage-label">
              LOCAL STORAGE
            </span>
          </div>

          <div className="draft-detail-row">
            <span>Name</span>

            <strong>
              {form.name || "Not provided"}
            </strong>
          </div>

          <div className="draft-detail-row">
            <span>Email</span>

            <strong>
              {form.email || "Not provided"}
            </strong>
          </div>

          <div className="draft-detail-row">
            <span>Portfolio</span>

            <strong>
              {form.portfolio || "Not provided"}
            </strong>
          </div>

          <div className="draft-detail-row">
            <span>Track</span>

            <strong>
              {form.track || "Not selected"}
            </strong>
          </div>

          <div className="draft-detail-row">
            <span>Experience</span>

            <strong>
              {form.experience ||
                "Not selected"}
            </strong>
          </div>

          <div className="draft-detail-row">
            <span>Technologies</span>

            <strong>
              {form.techStack.length > 0
                ? form.techStack.join(", ")
                : "None selected"}
            </strong>
          </div>

          <div className="draft-note">
            <span>✓</span>
            Automatically saved in this browser.
          </div>
        </div>
      )}
    </div>
  );
}

export default DraftStatus;