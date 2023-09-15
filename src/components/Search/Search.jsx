import Button from "../Button/Button";
import { useState } from "react";
import { UilSearch } from '@iconscout/react-unicons'

function Search() {
  const [category, setCategory] = useState(true);
  return (
    <div className="relative w-96 text-stone-700">
      <input
        className="bg-stone-300 border-0 rounded-3xl py-2.5 pr-5 pl-12 w-full h-10 focus:outline-none focus:bg-stone-100 placeholder:text-stone-700"
        type="text"
        placeholder="Tìm kiếm"
      />
      <Button type="btn-text" size="small" className="absolute top-0 left-2 rounded-r-full">
        <UilSearch size="24" />
      </Button>
      <Button
        type="btn-primary" size="small"
        className="w-24 absolute top-0 right-0 py-2 rounded-r-3xl"
        onClick={() => setCategory((pre) => !pre)}
      >
        {category ? "Việc làm" : "Freelancer"}
      </Button>
    </div>
  );
}

export default Search;
