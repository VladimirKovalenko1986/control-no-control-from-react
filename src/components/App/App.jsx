import Title from "../Title/Title";
import css from "./App.module.css";
import FormNoControl from "../FormNoControl/FormNoControl";
import FornControl from "../FornControl/FornControl";

export default function App() {
  const handleAddUser = (newUser) => {
    console.log("handleAddUser", newUser);
  };

  const makeFormControl = (newValues) => {
    console.log("makeFormControl", newValues);
  };

  return (
    <div className={css.conteiner}>
      <Title text="No Control" variant="noControl" />
      <FormNoControl onSubmit={handleAddUser} />

      <Title text="Control" variant="control" />
      <FornControl onFormControl={makeFormControl} />
    </div>
  );
}
