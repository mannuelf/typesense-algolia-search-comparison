import { useDispatch } from 'react-redux';
import { ChangeEvent, useEffect, useState } from 'react';
import { setSearch } from 'store/reducers/SearchReducer';
import { fetchArticles } from 'store/reducers/ArticlesReducer';
import { useAppDispatch, useAppSelector } from 'hooks';
import useDebounce from 'hooks/useDebounce';

const SearchForm = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 1000);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (debouncedValue) {
      dispatch(setSearch(debouncedValue));
      dispatch(fetchArticles(debouncedValue));
    }
  }, [debouncedValue, dispatch]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setValue(e.target.value);
  }

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="py-4 px-4">
      <form id="searchForm" onSubmit={handleSubmit}>
        <label
          htmlFor="search"
          aria-labelledby="search"
          className="block text-sm font-medium text-gray-700"
        >
          Search news, {value}
        </label>
        <input
          type="text"
          name="search"
          id="search"
          value={value}
          onChange={handleChange}
          onFocus={(e: any) => (e.target.value = '')}
          className="mt-1 relative rounded-md shadow-sm p-2 w-full"
        />
      </form>
    </section>
  );
};

export default SearchForm;
