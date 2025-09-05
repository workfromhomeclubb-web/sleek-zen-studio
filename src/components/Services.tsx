import { useMemo, useState } from "react"
import { addDays, format, startOfWeek } from "date-fns"
import { PilatesButton } from "./ui/pilates-button"
import classImage from "@/assets/pilates-class.jpg"

const Services = () => {
  const [weekOffset, setWeekOffset] = useState(0)
  const [selected, setSelected] = useState(new Date())

  const weekDays = useMemo(() => {
    const base = startOfWeek(addDays(new Date(), weekOffset * 7), { weekStartsOn: 0 })
    return Array.from({ length: 7 }, (_, i) => addDays(base, i))
  }, [weekOffset])

  const offerings = useMemo(() => {
    const times = [10, 12, 17, 18]
    const titles = ["Reformer 1.0", "Strength + Conditioning", "Reformer 1.5", "Reformer 1.5"]
    const types = ["Pilates", "Weight Training", "Pilates", "Pilates"]
    const instructors = ["Taylor Abdo", "Maria Riggio", "Sandra Orzol", "Sandra Orzol"]
    const prices = [35, 25, 35, 35]
    return times.map((hour, i) => ({
      id: i,
      title: titles[i],
      type: types[i],
      instructor: instructors[i],
      datetime: new Date(selected.getFullYear(), selected.getMonth(), selected.getDate(), hour, 0, 0),
      durationMin: 45,
      price: prices[i],
    }))
  }, [selected])

  return (
    <section id="classes" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <div className="flex items-center justify-between border-b pb-4">
            <button aria-label="Previous week" onClick={() => setWeekOffset((v) => v - 1)} className="px-2 py-1 text-pilates-black/70 hover:text-pilates-black">‹</button>
            <div className="flex-1 mx-4 grid grid-cols-7 gap-2">
              {weekDays.map((d) => {
                const isSelected = format(d, 'yyyy-MM-dd') === format(selected, 'yyyy-MM-dd')
                return (
                  <button
                    key={d.toISOString()}
                    onClick={() => setSelected(d)}
                    className={`flex flex-col items-center py-2 rounded-md transition-colors ${isSelected ? 'bg-pilates-black text-white' : 'text-pilates-black hover:bg-pilates-light-gray/40'}`}
                  >
                    <span className="text-xs uppercase tracking-wide">{format(d, 'EEE')}</span>
                    <span className="mt-1 text-sm font-semibold">{format(d, 'd')}</span>
                  </button>
                )
              })}
            </div>
            <button aria-label="Next week" onClick={() => setWeekOffset((v) => v + 1)} className="px-2 py-1 text-pilates-black/70 hover:text-pilates-black">›</button>
          </div>
          <div className="flex items-center justify-center gap-4 pt-3 text-sm text-pilates-dark-gray">
            <span>Classes on {format(selected, 'EEEE, MMMM d')}</span>
          </div>
        </div>

        <div className="divide-y">
          {offerings.map((o) => (
            <div key={o.id} className="py-6 grid grid-cols-1 md:grid-cols-[auto_1fr_auto_auto_auto] gap-6 items-center">
              <div className="w-full md:w-40 h-24 md:h-20 overflow-hidden rounded-md bg-pilates-light-gray">
                <img src={classImage} alt="Class preview" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-pilates-dark-gray">{o.type}</div>
                <div className="text-lg md:text-xl font-semibold text-pilates-black">{o.title}</div>
                <div className="text-sm text-pilates-gray">{o.instructor}</div>
              </div>
              <div className="text-right md:text-left">
                <div className="font-medium text-pilates-black">{format(o.datetime, 'h:mma')} EDT</div>
                <div className="text-xs text-pilates-gray">({o.durationMin} min)</div>
              </div>
              <div className="font-medium text-pilates-black">${o.price.toFixed(2)}</div>
              <div className="justify-self-end">
                <PilatesButton size="sm" className="bg-pilates-black text-white hover:bg-pilates-dark-gray">BOOK</PilatesButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
