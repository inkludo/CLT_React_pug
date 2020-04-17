import React, {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHttp } from "../../hooks/http.hook";
import { useToasts } from 'react-toast-notifications'
import "./ClientConfig.css";

const ClientConfigSchema = Yup.object().shape({
  checkStatePeriod: Yup.number()
    .positive()
    .integer("Must be an integer")
    .min(30, "Lower than 30!")
    .max(300, "The number cannot exceed 300!")
    .required(`Required`),
  sendDataPeriod: Yup.number()
    .moreThan(
      Yup.ref("checkStatePeriod"),
      "Less than state period not allowed!"
    )
    .integer("Must be an integer")
    .min(60, "Lower than 60!")
    .max(3600, "The number cannot exceed 3600!")
    .required("Required"),
});

export const ClientConfig = () => {
  const { request, loading} = useHttp();
 

  return (
    <div className="formWrapper">
      
      <h1>Set up your Client Configuration</h1>
      <Formik
        initialValues={{
          checkStatePeriod: "",
          sendDataPeriod: "",
        }}
        validationSchema={ClientConfigSchema}
        onSubmit={async (values) => {
          try {
            await request(
              `http://localhost:8000/SetClientConfig`,
              "POST",
              {"d": {"c": `${values.checkStatePeriod}`, "s": `${values.sendDataPeriod}`}}
            );
          } catch (error) {
            console.log(error);
          }
       
         
        }}
      >
        {() => (
          <Form className="col-md-4  form-group">
            <label htmlFor="checkStatePeriod">Check State Period (sec)</label>
            <Field
              name="checkStatePeriod"
              id="checkStatePeriod"
              className="form-control"
              type="number"
              placeholder="Enter an integer"
            />

            <ErrorMessage component="span" name="checkStatePeriod" />
            <br />
            <label htmlFor="sendDataPeriod">Send Data Period (sec)</label>
            <Field
              name="sendDataPeriod"
              id="sendDataPeriod"
              className="form-control"
              type="number"
              placeholder="Enter an integer"
            />

            <ErrorMessage component="span" name="sendDataPeriod" />
            <br />

            <button
              disabled={loading}
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      
    </div>
  );
};
