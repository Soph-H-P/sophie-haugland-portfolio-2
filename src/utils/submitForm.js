const handleContactFormSubmit = async (e, setMessageIsSent, setIsError, setIsSending) => {
  e.preventDefault();
  setIsError(false);
  setMessageIsSent(false);
  setIsSending(true);
  const formData = e.target;

  const sendFormUrl = formData.action;
  const method = formData.method;
  const body = new FormData(formData);
  try {
    const response = await fetch(sendFormUrl, {
      method,
      body,
    });
    if (response.ok) {
      setMessageIsSent(true);
      setIsSending(false);
      formData.reset();
    } else {
      setMessageIsSent(false);
      setIsError(true);
    }
  } catch (error) {
    setIsError(true);
    setIsSending(false);
    console.log(error);
  }
};

export default handleContactFormSubmit;
