import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Person } from "../page";

interface FilterResultsProps {
  people: Person[];
}

const FilterResults = ({ people }: FilterResultsProps) => {
  if (people.length === 0) return <h1>Loading...</h1>;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Surname</TableHead>
          <TableHead>Gender</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {people.map((person, index) => (
          <TableRow key={index}>
            <TableCell>{person.name}</TableCell>
            <TableCell>{person.surname}</TableCell>
            <TableCell>{person.gender}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FilterResults;
