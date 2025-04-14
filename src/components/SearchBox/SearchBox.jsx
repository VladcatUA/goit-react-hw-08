import { nanoid } from "nanoid";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const idSearchInput = nanoid();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <h2>Search filter</h2>
      <label htmlFor={idSearchInput}>Find contacts by name</label>
      <input
        id={idSearchInput}
        type="text"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}