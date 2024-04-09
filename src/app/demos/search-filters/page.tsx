"use client";
import React, { useEffect, useRef, useState } from "react";
import FilterInputs from "./_components/filters";
import FilterResults from "./_components/results";

export interface Person {
  name: string;
  surname: string;
  gender: string;
}

import people from "@/data/people.json";
import { useAtom } from "jotai";
import { appliedFiltersAtom, filterAtom } from "./filter-atom";

const SearchFilters = () => {
  const [appliedFilters] = useAtom(appliedFiltersAtom);
  const [filteredResult, setFilteredResult] = useState<Person[]>(people);

  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current = renderCountRef.current + 1;
  });

  useEffect(() => {
    let result = people;
    if (appliedFilters.query) {
      result = result.filter((person) =>
        person.name
          .toLowerCase()
          .includes((appliedFilters.query || "").toLowerCase())
      );
    }
    if (appliedFilters.gender && appliedFilters.gender !== "all") {
      result = result.filter((person) =>
        person.gender
          .toLowerCase()
          .includes((appliedFilters.gender || "").toLowerCase())
      );
    }
    setFilteredResult(result);
  }, [appliedFilters]);

  return (
    <div className="flex flex-col gap-4">
      <div className="border p-4">
        Rendered: <strong>{renderCountRef.current / 2}</strong>
        <br />
        Parent Page doing filtering and passing data to FilterResults
        <br />
        Filters are set in FilterInputs
        <br />
        {JSON.stringify(appliedFilters)}
      </div>
      <div className="border p-4">
        <FilterInputs />
      </div>
      <div className="border p-4">
        <FilterResults people={filteredResult} />
      </div>
    </div>
  );
};

export default SearchFilters;
