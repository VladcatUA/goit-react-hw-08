import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const filterValue = useSelector(selectFilteredContacts);

  return (
    <div className={css.contactList}>
      {filterValue.map((el) => (
        <Contact key={el.id} user={el} />
      ))}
    </div>
  );
}