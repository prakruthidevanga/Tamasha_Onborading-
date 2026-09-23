const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const urlPattern =
  /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i;

export function validateStep(step, form) {
  const errors = {};

  if (step === 1) {
    if (!form.name.trim()) {
      errors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!emailPattern.test(form.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (form.portfolio.trim() && !urlPattern.test(form.portfolio.trim())) {
      errors.portfolio = "Please enter a valid URL.";
    }
  }

  if (step === 2) {
    if (!form.track) {
      errors.track = "Please select a primary track.";
    }

    if (!form.experience) {
      errors.experience = "Please select your experience level.";
    }
  }

  if (step === 3) {
    // The assessment does not specify technologies for Fullstack.
    if (form.track !== "Fullstack" && form.techStack.length === 0) {
      errors.techStack = "Please select at least one technology.";
    }
  }

  return errors;
}