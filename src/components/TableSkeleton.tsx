import { repeat } from '../utils';

function Cell() {
  return (
    <div className="h-6 left-0 top-0 animate-pulse bg-gray-300 rounded-md"></div>
  );
}

export function TableSkeleton({ count = 1 }: { count?: number }) {
  return (
    <div className="flex flex-wrap flex-auto">
      {repeat(
        count,
        <table className="basis-1/3">
          <tbody className="text-left border border-gray-400 relative">
            <tr>
              <th className="p-2 text-xl border border-gray-400" colSpan={3}>
                <Cell />
              </th>
            </tr>
            <tr>
              <td className="p-2 text-lg border border-gray-400" colSpan={2}>
                <Cell />
              </td>
              <td className="p-2 text-lg text-center border border-gray-400">
                <Cell />
              </td>
            </tr>
            {repeat(
              6,
              <tr>
                <td className="p-2 w-1/12 text-lg text-center border border-gray-400">
                  <Cell />
                </td>
                <td className="p-2 w-9/12 border border-gray-400">
                  <Cell />
                </td>
                <td className="p-2 w-2/12 text-center border border-gray-400">
                  <Cell />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
