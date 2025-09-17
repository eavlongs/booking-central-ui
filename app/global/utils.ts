import type { GenericOption } from "~/types/general"

export function getOptionLabelByValue(
  options: GenericOption[],
  value: GenericOption["value"],
): string | null {
  return options.find((option) => option.value === value)?.label ?? null
}
