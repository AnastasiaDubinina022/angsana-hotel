import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import axios from "axios";

import './ContactForm.scss';

const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
    axios.post("http://localhost:3001/usersData", values)
      .then(response => {
        console.log("Добавлено:", response.data);
        resetForm();
      })
      .catch(error => {
        console.error("Ошибка:", error);
      });
  };

    return(
        <Formik
            initialValues={{  
                type: '',
                name: '',
                email: '',
                message: ''
            }}
            validationSchema={Yup.object({  
                type: Yup.string()
                        .required('Select the type of enquiry'),
                name: Yup.string()
                        .min(2, 'At least 2 characters')
                        .required('Required field!'),
                email: Yup.string()
                        .email('Incorrect address')
                        .required('Required field!'),
                message: Yup.string()
                        .min(10, 'At least 10 characters')
                        .required('Required field!')
            })}
            onSubmit={handleSubmit}
            > 
            <Form className="form">
                    <div className='field-wrapper'>
                        <Field
                            id="type"
                            name="type"
                            as='select'
                            className="contact-form__input" 
                            tabIndex="1" 
                        >
                            <option value="" disabled >Type of enquiry *</option>
                            <option value="general">General enquiries</option>
                            <option value="guest-service">Guest service enquiries</option>
                            <option value="bookings">Reservations and bookings</option>
                            <option value="website">Website enquiries</option>
                            <option value="spa">Spa enquiries</option>
                            <option value="other">Other</option>
                        </Field>
                        <ErrorMessage className="error" name="type" component='div'/>
                    </div>
                <div className='field-wrapper'>
                    <Field  
                        id="name"
                        name="name"
                        type="text"
                        className="contact-form__input"
                        placeholder="Your name *" 
                        tabIndex="2"
                    />
                    <ErrorMessage className="error" name="name" component='div'/> 
                </div>
                <div className='field-wrapper'>
                    <Field  
                        id="email"
                        name="email"
                        type="email"
                        className="contact-form__input" 
                        placeholder="Your email *"
                        tabIndex="3"
                    />
                    <ErrorMessage className="error" name="email" component='div'/>
                </div> 
                <div className='field-wrapper'>
                    <Field  
                        id="message"
                        name="message"
                        as='textarea'
                        className="contact-form__textarea"
                        placeholder="Your message *" 
                        tabIndex="4"
                    />
                    <ErrorMessage className="error_textarea" name="message" component='div'/> 
                </div>
                <div className="contact-form__button yellow-button blocked">
                    <button type="submit" tabIndex="5">Send message</button>
                </div>
            </Form>
        </Formik>
    )
}

export default ContactForm;