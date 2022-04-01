import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";

const Signup = () => {
  const [checked, setChecked] = React.useState([true, false]);
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      country: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(8, "Minimum length=8 (firstname)")
        .required("Required field (firstname)"),
      lastName: Yup.string()
        .min(8, "Minimum length=8 (lastName)")
        .required("Required field (lastname)"),
      address1: Yup.string().min(32, "must be mininum 32 charcters").required(),
      address2: Yup.string(),
      city: Yup.string().required(),
      state: Yup.string(),
      zip: Yup.string()
        .min(6, "Must be 6 digit only")
        .max(6, "Must be 6 digit only")
        .required(),
      country: Yup.string().required()
    }),
    onSubmit: (values) => {}
  });
  console.log(formik);
  return (
    <div>
      <div
        style={{
          marginLeft: "400px",
          marginRight: "400px",
          border: "1px solid black"
        }}
      >
        <h1>Checkout</h1>
        <form
          onSubmit={formik.handleSubmit}
          style={{ paddingLeft: "40px", paddingRight: "40px" }}
        >
          <br />

          {/* error will handle herer as kind of alert */}
          <div
            className="alert"
            style={{
              backgroundColor: "#f44336",
              color: "white"
            }}
          >
            {formik.errors.firstName ? (
              <p style={{ padding: "0px", fontSize: "10px", margin: "0px" }}>
                {formik.errors.firstName}
              </p>
            ) : null}
            {formik.errors.lastName ? (
              <p
                style={{
                  padding: "0px",
                  fontSize: "10px",
                  margin: "2px"
                }}
              >
                {formik.errors.lastName}
              </p>
            ) : null}
            {formik.errors.address1 ? (
              <p style={{ padding: "0px", fontSize: "10px", margin: "2px" }}>
                {formik.errors.address1}
              </p>
            ) : null}
            {formik.errors.address2 ? (
              <p style={{ padding: "0px", fontSize: "10px", margin: "2px" }}>
                {formik.errors.address2}
              </p>
            ) : null}
            {formik.errors.city ? (
              <p style={{ padding: "0px", fontSize: "10px", margin: "2px" }}>
                {formik.errors.city}
              </p>
            ) : null}
            {formik.errors.country ? (
              <p style={{ padding: "0px", fontSize: "10px", margin: "2px" }}>
                {formik.errors.country}
              </p>
            ) : null}
            {formik.errors.zip ? (
              <p style={{ padding: "0px", fontSize: "10px", margin: "2px" }}>
                {formik.errors.zip}
              </p>
            ) : null}
          </div>
          <h4 style={{ textAlign: "start" }}>Shipping address</h4>
          <div style={{ display: "flex", alignItems: "start", gap: "60px" }}>
            <TextField
              name="firstName"
              id="standard-required"
              label="First name *"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />

            <TextField
              name="lastName"
              id="standard-required"
              label="Last name *"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </div>

          <div>
            <TextField
              fullWidth
              sx={{ m: 1 }}
              name="address1"
              id="standard-required"
              label="Address line 1 *"
              variant="standard"
              // paddingRight="20px"
              onChange={formik.handleChange}
              value={formik.values.address1}
            />
          </div>
          <div>
            <TextField
              fullWidth
              sx={{ m: 1 }}
              name="address2"
              id="standard-required"
              label="Address line 2"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.address2}
            />
          </div>
          <div style={{ display: "flex", alignItems: "start", gap: "60px" }}>
            <TextField
              name="city"
              id="standard-required"
              label="City *"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.city}
            />

            <TextField
              name="state"
              id="standard-required"
              label="State/Provience/Region"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.state}
            />
            {formik.errors.state ? <p>{formik.errors.state}</p> : null}
          </div>
          <div style={{ display: "flex", alignItems: "start", gap: "60px" }}>
            <TextField
              name="zip"
              id="standard-required"
              label="Zip / Postal code *"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.zip}
            />

            <TextField
              name="country"
              id="standard-required"
              label="Country *"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.country}
            />
          </div>
          <div style={{ display: "flex", alignItems: "start" }}>
            <FormControlLabel
              label="Use this address for payment details"
              control={
                <Checkbox checked={checked[1]} onChange={handleChange3} />
              }
            />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button type="submit" variant="contained">
              Next
            </Button>
          </div>
          <br />
        </form>
      </div>
      <div>
        <p>
          Copyrights ©
          <Link href="#" color="inherit">
            {"Your Website"}
          </Link>{" "}
          2022
        </p>
      </div>
    </div>
  );
};
export default Signup;
