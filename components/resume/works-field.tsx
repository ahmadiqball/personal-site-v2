import { getFormattedDates } from "@/utils/date-formatter"

export default function WorksField({works}: any) {
  works.sort((a: any,b: any) => {
    return (new Date(b.startDate)).getTime() - (new Date(a.startDate)).getTime()
  })

  return(
      <div>
      {works.map((work: any, index: any) => (
        <div key={index} className="mt-2">
          <h5 className="text-md text-gray-500 dark:text-gray-400">{getFormattedDates(work.startDate, work.endDate)}</h5>
          <div>
            <h4 className="text-md font-semibold">{work.position}</h4>
            <h5 className="text-md">{`${work.company}, ${work.location}`}</h5>
            <ol className="list-disc text-sm pt-1 ml-6">
              {work.description?.map((item: any, id: any) => (
                <li key={id}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      ))}
      </div>
  )
}