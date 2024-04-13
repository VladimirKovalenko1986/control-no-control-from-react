import css from "./FormNoControl.module.css";
import { useId } from "react";

export default function FormNoControl({ onSubmit }) {
  const usernameId = useId();
  const roleId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    onSubmit({
      username: form.elements.username.value,
      role: form.elements.role.value,
    });
    form.reset();
  };
  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.conteiner}>
          <label htmlFor={usernameId}>Username</label>
          <input
            type="text"
            name="username"
            className={css.input}
            id={usernameId}
          />
        </div>

        <div className={css.conteiner}>
          <label htmlFor={roleId}>Role</label>
          <select name="role" id={roleId} className={css.select}>
            <option value="guest">Guest</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className={css.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
