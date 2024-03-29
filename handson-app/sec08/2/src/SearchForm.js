import { useInput } from "./hooks";

const SearchForm = ({ onSearch }) => {
  const [searchProps, resetValue] = useInput("");

  const submit = (e) => {
    e.preventDefault();
    onSearch(searchProps.value);
    resetValue();
  };

  return (
    <form onSubmit={submit}>
      <input type="text" {...searchProps} placeholder="login id..." required />
      <button>Search</button>
    </form>
  );
};

export { SearchForm };
