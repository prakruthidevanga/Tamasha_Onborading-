import { createContext, useContext, useEffect, useState } from "react";

const FormContext = createContext();

const defaultForm = {
  name: "",
  email: "",
  portfolio: "",
  track: "",
  experience: "",
  techStack: [],
};

export function FormProvider({ children }) {
  const [form, setForm] = useState(defaultForm);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [draftSaved, setDraftSaved] = useState(false);

  // Restore saved draft
  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem("tamasha-onboarding");

      if (savedDraft) {
        const data = JSON.parse(savedDraft);

        if (data.form) {
          setForm({
            ...defaultForm,
            ...data.form,
            techStack: Array.isArray(data.form.techStack)
              ? data.form.techStack
              : [],
          });
        }

        if (data.currentStep) {
          setCurrentStep(data.currentStep);
        }
      }
    } catch (error) {
      console.log("Could not restore draft.");
    }
  }, []);

  // Debounced auto-save
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(
          "tamasha-onboarding",
          JSON.stringify({
            form,
            currentStep,
          })
        );

        setDraftSaved(true);
      } catch (error) {
        console.log("Could not save draft.");
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [form, currentStep]);

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setDraftSaved(false);

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  const selectTrack = (track) => {
    setForm((previous) => ({
      ...previous,
      track,
      techStack: [],
    }));

    setErrors((previous) => ({
      ...previous,
      track: "",
      techStack: "",
    }));

    setDraftSaved(false);
  };

  const toggleTechnology = (technology) => {
    setForm((previous) => {
      const alreadySelected = previous.techStack.includes(technology);

      return {
        ...previous,
        techStack: alreadySelected
          ? previous.techStack.filter((item) => item !== technology)
          : [...previous.techStack, technology],
      };
    });

    setErrors((previous) => ({
      ...previous,
      techStack: "",
    }));

    setDraftSaved(false);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        setForm,
        currentStep,
        setCurrentStep,
        errors,
        setErrors,
        draftSaved,
        updateField,
        selectTrack,
        toggleTechnology,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}