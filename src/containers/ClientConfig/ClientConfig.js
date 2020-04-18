import React, { useState, useEffect, useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHttp } from "../../hooks/http.hook";
import "./ClientConfig.css";

const ClientConfigSchema = Yup.object().shape({
  checkStatePeriod: Yup.number()
    .positive()
    .integer("Must be an integer")
    .min(1, "Lower than 1!")
    .required(`Required`),
  sendDataPeriod: Yup.number()
    .moreThan(
      Yup.ref("checkStatePeriod"),
      "Less than state period not allowed!"
    )
    .integer("Must be an integer")
    .min(2, "Lower than 2!")
    .required("Required"),
});

export const ClientConfig = () => {
  const { request, loading } = useHttp();

  const [clientConfig, setClientConfig] = useState(null);
  const [error, setError] = useState(false);
  const [send, setSend] = useState(false);

  const fetchGetClientConfig = useCallback(async () => {
    try {
      const fetched = await request(
        `http://localhost:8000/GetClientConfig`,
        "GET",
        null
      );
      console.log(fetched);
      if (fetched !== null) {
        setClientConfig(fetched.d);
      }
    } catch (e) {
      console.log(e);
    }
  }, [request]);

  useEffect(() => {
    fetchGetClientConfig();
  }, [fetchGetClientConfig]);

  console.log(error, send);

  return (
    <div className="formWrapper">
      {clientConfig && (
        <>
          <div style={{ marginBottom: "3vh" }}>
            <h3>Your Current Client Configuration</h3>
            <br />
            <div className="currentConfig">
              {" "}
              Check State Period (sec): {clientConfig.c}
            </div>
            <div className="currentConfig">
              {" "}
              Send Data Period (sec): {clientConfig.s}
            </div>
            <hr />

            <div className="currentConfig">
              Min-Max Check State Period (sec): 1 - &#8734;
            </div>
            <div className="currentConfig">
              Min-Max Send Data Period (sec): 2 - &#8734;
              <br />
              <small>
                (The period of sending data to the server should be bigger than
                the Check State Period)
              </small>
            </div>
            <hr />
          </div>
        </>
      )}
      <h3>Set up your Client Configuration</h3>

      <Formik
        initialValues={{
          checkStatePeriod: "",
          sendDataPeriod: "",
        }}
        validationSchema={ClientConfigSchema}
        onSubmit={async (values) => {
          try {
            const data = await request(
              `http://localhost:8000/SetClientConfig`,
              "POST",
              {
                d: {
                  c: `${values.checkStatePeriod}`,
                  s: `${values.sendDataPeriod}`,
                },
              }
            );
            if (data !== null) {
              setSend(true);
              fetchGetClientConfig();
            }
          } catch (error) {
            setError(true);
            console.log(error);
          }
        }}
      >
        {() => (
          <Form className="col-md-3  form-group">
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
      {!error && send ? (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Data changed successfully
          <button
            onClick={() => setSend(false)}
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ) : error && !send ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          The data was not changed. Error, please try again
          <button
            onClick={() => setError(false)}
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ) : null}
    </div>
  );
};
