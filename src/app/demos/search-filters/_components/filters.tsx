"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { FilterValues, filterAtom } from "../filter-atom";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";

const formSchema = z.object({
  query: z.string().optional(),
  gender: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

const FilterInputs = () => {
  const [filters, setFilters] = useAtom(filterAtom);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: filters.query ?? "",
      gender: filters.gender ?? "",
    },
  });

  const formWatch = useWatch(form);

  useEffect(() => {
    const newSearch: FilterValues = {
      query: form.getValues("query"),
      gender: form.getValues("gender"),
    };
    setFilters(newSearch);
  }, [form, formWatch, setFilters]);

  return (
    <Form {...form}>
      <form className="space-y-8 flex flex-row justify-between">
        <div className="flex items-center gap-4">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name / Surname Search" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
};

export default FilterInputs;
