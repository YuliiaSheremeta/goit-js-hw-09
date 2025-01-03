const feedbackFormEl = document.querySelector('.feedback-form');

let formData = {
    email: '',
    message: '',
};

const fillFormFields = () => {
    try {
        const formDataFromLS = JSON.parse(localStorage.getItem("feedback-form-state"));
        if (formDataFromLS === null || formDataFromLS === undefined) { return; }
     
        if (typeof formDataFromLS === 'object') {
            formData = formDataFromLS;
        

            for (const key in formData) {
                if (formData.hasOwnProperty(key) && feedbackFormEl.elements[key]) {
                    feedbackFormEl.elements[key].value = formData[key] || '';
                };
            }
        }
    }
    
    catch (err) {
        console.log(err);
}};
fillFormFields();

const onFormFieldInput = event => {
    const { target: formFieldEl } = event;

    const fieldValue = formFieldEl.value;
    const fieldName = formFieldEl.name;

    formData[fieldName] = fieldValue.trim();

    localStorage.setItem("feedback-form-state", JSON.stringify(formData)); 
};

const onFeedbackFormSubmit = event => {
    event.preventDefault();

    const { currentTarget: formEl } = event;
    if (!formData.email || !formData.message) {
        alert('Fill please all fields') 
        return;
    };
    console.log(formData);
    formEl.reset();
    localStorage.removeItem('feedback-form-state');
}

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);