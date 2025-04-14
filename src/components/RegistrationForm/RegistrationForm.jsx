import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    // dispatch(register(values));
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Welcome");
      })
      .catch(() => {
        toast.error(" Not valid !");
      });
    action.resetForm();
  };

  return (
    <>
      <h2>Registration Form</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form action="#" className={css.formik}>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" className={css.input} />

          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" className={css.input} />

          <label htmlFor="password">Password:</label>
          <Field
            type="password"
            id="password"
            name="password"
            className={css.input}
          />
          <button type="submit" className={css.button}>
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
}