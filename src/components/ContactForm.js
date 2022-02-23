import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Tooltip from "@mui/material/Tooltip";
import { Formik } from "formik";
import * as Yup from "yup";
import "../scss/contact.css";

function ContactForm() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  const handleSubmit = (values, errors) => {
    console.log("Success!");
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    email: Yup.string()
      .email("Enter a valid email.")
      .required("Email is required."),
    message: Yup.string().required("Please leave a message."),
  });
  //mui styles for form TextField and Button
  const FormTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#97594C",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#734A44",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#734A44",
        backgroundColor: "#c4c4c442",
      },
      "&:hover fieldset": {
        borderColor: "#734A44",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#97594C",
      },
    },
  });

  const Btn = styled(Button)(({ theme }) => ({
    backgroundColor: "#D47B59",
    fontFamily: ['"Salsa", cursive'],
    textTransform: "capitalize",
    textDecoration: "none",
    color: "black",
    borderRadius: 0,
    fontSize: 16,
    padding: 10,
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      padding: 8,
    },
  }));

  return (
    <div className="contact-wrapper">
      <div className="contact-title">Contact Me</div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values, errors) => {
          handleSubmit(values, errors);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => {
          return (
            <Box noValidate autoComplete="off">
              <form
                onSubmit={handleSubmit}
                className="form-wrap"
                name="contact"
                method="POST"
                action="/contact/?success=true"
                data-netlify="true"
                id="contact"
              >
                <input type="hidden" name="form-name" value="contact" />
                <FormTextField
                  value={values.name}
                  onChange={handleChange("name")}
                  onBlur={handleBlur("name")}
                  id="standard-basic"
                  label="name"
                  name="name"
                  required
                />
                <div className="contact-error">
                  {touched.name && errors.name}
                </div>
                <FormTextField
                  value={values.email}
                  onChange={handleChange("email")}
                  onBlur={handleBlur("email")}
                  id="standard-basic"
                  label="email"
                  name="email"
                  required
                />
                <div className="contact-error">
                  {touched.email && errors.email}
                </div>
                <FormTextField
                  value={values.message}
                  onChange={handleChange("message")}
                  onBlur={handleBlur("message")}
                  multiline={true}
                  rows={3}
                  id="standard-multiline-static"
                  label="message"
                  name="message"
                  required
                />
                <div className="contact-error">
                  {touched.message && errors.message}
                </div>
                {success && (
                  <p style={{ color: "green" }}>Thank you for reaching out! </p>
                )}
                <div className="form-btn-wrap">
                  <div className="form-socials">
                    <Tooltip title="Github" placement="top">
                      <a
                        href="https://github.com/breannar888"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                      </a>
                    </Tooltip>
                    <Tooltip title="LinkedIn" placement="top">
                      <a
                        href="https://www.linkedin.com/in/breanna-ransom/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      </a>
                    </Tooltip>
                  </div>
                  <Btn type="submit" variant="contained">
                    Send Email
                  </Btn>
                </div>
              </form>
            </Box>
          );
        }}
      </Formik>
    </div>
  );
}

export default ContactForm;
