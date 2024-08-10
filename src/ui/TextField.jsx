const TextField = ({ label, name, onChange, value }) => {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        value={value}
        name={name}
        onChange={onChange}
        type={'text'}
        autoComplete="off"
        className="textInputField"
      />
    </div>
  );
};
export default TextField;
