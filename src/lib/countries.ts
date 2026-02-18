import countries from "i18n-iso-countries"
import enLocale from "i18n-iso-countries/langs/en.json"

countries.registerLocale(enLocale)

const names = countries.getNames("en", { select: "official" }) as Record<string, string>

/** All country names (official English), sorted A–Z. */
export const countryNames = Object.values(names).sort((a, b) => a.localeCompare(b))

/** For dropdowns: { value: name, label: name }. Australia first, then A–Z, then Other. */
export const countryOptions = (() => {
  const list = countryNames
    .filter((name) => name !== "Australia")
    .map((name) => ({ value: name, label: name }))
  const australia = { value: "Australia", label: "Australia" }
  return [australia, ...list, { value: "Other", label: "Other" }]
})()
