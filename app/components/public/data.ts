import type { GenericOption } from "~/types/general"

export const sortOptions: GenericOption[] = [
  {
    label: "None",
    value: null,
  },
  {
    label: "Name (A-Z)",
    value: "name",
  },
  {
    label: "Name (Z-A)",
    value: "-name",
  },
]
