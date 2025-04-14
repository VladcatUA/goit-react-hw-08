import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(logIn(values));
    action.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form action="#" className={css.formik}>
          <div className={css.inputBox}>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="login" name="email" className={css.input} />
          </div>
          <div className={css.inputBox}>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              className={css.input}
            />
          </div>

          <button type="submit" className={css.button}>
            Log in
          </button>
        </Form>
      </Formik>
    </>
  );
}