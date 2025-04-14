import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export default function Contact({ user: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.card} id={id}>
      <div>
        <div className={css.boxName}>
          
          <p className={css.title}>{name}</p>
        </div>
        <div className={css.boxName}>
          
          <p className={css.title}>{number}</p>
        </div>
      </div>

      <button className={css.button} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}