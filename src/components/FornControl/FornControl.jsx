import css from "./FornControl.module.css";
import { FaTshirt } from "react-icons/fa";
import { useId, useState } from "react";

export default function FornControl({ onFormControl }) {
  const initial = {
    size: "md",
    color: "blue",
  };
  const sizeId = useId();
  const colorId = useId();
  const [values, setValues] = useState(initial);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormControl({ values });
    setValues(initial);
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={css.form}
      onSubmit={handleSubmit}
    >
      <FaTshirt size="160" color={values.color} className={css.icon} />

      <div className={css.conteiner}>
        <label htmlFor={sizeId}>Size</label>
        <select
          className={css.select}
          name="size"
          id={sizeId}
          value={values.size}
          onChange={handleChange}
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div className={css.conteiner}>
        <label htmlFor={colorId}>Color</label>
        <select
          className={css.select}
          name="color"
          id={colorId}
          value={values.color}
          onChange={handleChange}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <button type="submit" className={css.button}>
        Submit
      </button>
    </form>
  );
}
