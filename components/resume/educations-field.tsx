import { getFormattedDates } from '@/utils/date-formatter';
import { PortableText } from '@portabletext/react';

export default function EducationsField({ education }: any) {
  return (
    <div>
      { education.map((item: any) => (
        <div key={ item._key }>
          <h5 className="text-md text-gray-500 dark:text-gray-400">
            { getFormattedDates(item.startDate, item.endDate) }
          </h5>

          <div>
            <h4 className="text-md font-semibold">
              { `${item.school}, ${item.location}` }
            </h4>

            <h5 className="text-md">
              { `${item.title}, ${item.major}` }
            </h5>

            <div className="text-sm pt-2">
              <PortableText value={ item.description } />
            </div>
          </div>
        </div>
      )) }
    </div>
  );
}
