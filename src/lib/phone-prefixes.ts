import countries from "i18n-iso-countries"
import enLocale from "i18n-iso-countries/langs/en.json"
import { getCountryCallingCode } from "libphonenumber-js"

countries.registerLocale(enLocale)

const names = countries.getNames("en", { select: "official" }) as Record<string, string>

export const phonePrefixes = Object.keys(names)
  .map((alpha2) => {
    try {
      const code = getCountryCallingCode(alpha2 as any)
      const name = names[alpha2]
      return { value: `+${code}`, label: `${name} +${code}` }
    } catch {
      return null
    }
  })
  .filter(Boolean) as { value: string; label: string }[]

phonePrefixes.sort((a, b) => a.label.localeCompare(b.label))

const australia = phonePrefixes.find((p) => p.value === "+61")
if (australia) {
  const rest = phonePrefixes.filter((p) => p.value !== "+61")
  phonePrefixes.length = 0
  phonePrefixes.push(australia, ...rest)
}
phonePrefixes.push({ value: "+other", label: "Other" })
