import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={css.box}>
      <h2> Welcome to the Phonebook!</h2>
      <p>Your personal contact manager.
Please, register or log in to manage your contacts.</p>
    </div>
  );
}
