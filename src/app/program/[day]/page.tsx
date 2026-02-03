import { notFound } from "next/navigation"
import { ProgramDayPage } from "@/modules/program/ui/pages/program-day-page"
import { programDays } from "@/modules/program/data/programs"

type Props = {
  params: Promise<{ day: string }>
}

export async function generateStaticParams() {
  return Object.keys(programDays).map((day) => ({
    day: day.replace("day-", ""),
  }))
}

export default async function Page({ params }: Props) {
  const { day } = await params
  const normalized = day.startsWith("day-") ? day : `day-${day}`
  const key = normalized as keyof typeof programDays

  if (!(key in programDays)) {
    return notFound()
  }

  return <ProgramDayPage day={normalized} />
}
