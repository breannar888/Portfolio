import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";

function ContactPage() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);

  return (
    <div>
      <h2>Contact Me!</h2>
      
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ width: "25%", border: "1px solid red" }}
      >
        <form
          name="contact"
          method="POST"
          action="/contact/?success=true"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <TextField id="standard-basic" label="name" name="name" /> <br />
          <TextField id="standard-basic" label="email" name="email" /> <br />
          <TextField
            multiline
            id="standard-multiline-static"
            label="message"
            name="message"
          />
          <br />
          <div>
            <Button type="submit">Send</Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default ContactPage;
