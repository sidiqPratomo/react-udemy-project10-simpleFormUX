import useValue from "../hooks/use-value";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    reset: resetName,
    hasError: nameHasError,
    valueInputHandler: nameInputHandler,
    valueBlurHandler: nameBlurHandler,
  } = useValue((value) => value.trim() !== "");
  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    reset: resetLastName,
    hasError: lastNameHasError,
    valueInputHandler: lastNameInputHandler,
    valueBlurHandler: lastNameBlurHandler,
  } = useValue((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    reset: resetEmail,
    hasError: emailHasError,
    valueInputHandler: emailInputHandler,
    valueBlurHandler: emailBlurHandler,
  } = useValue((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;
  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(enteredName, enteredLastName, enteredEmail);
    resetName();
    resetLastName();
    resetEmail();
  };

  const nameInputClasses = nameHasError ? "form-control invalid" : "form-control";
  const lastNameInputClasses = lastNameHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailHasError ? "form-control invalid" : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" onChange={nameInputHandler} onBlur={nameBlurHandler} value={enteredName} />
          {nameHasError && <p className="error-text">name must not be emptied</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" onChange={lastNameInputHandler} onBlur={lastNameBlurHandler} value={enteredLastName} />
          {lastNameHasError && <p className="error-text">name must not be emptied</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" onChange={emailInputHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {emailHasError && <p className="error-text">please input a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
