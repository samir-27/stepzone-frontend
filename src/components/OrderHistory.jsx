import React from 'react'

const OrderHistory = () => {
  return (
    <div>
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th scope="col" class="px-6 py-3 text-start text-md font-bold text-blue-700">Product</th>
                    <th scope="col" class="px-6 py-3 text-start text-md font-bold text-blue-700">Qty</th>
                    <th scope="col" class="px-6 py-3 text-start text-md font-bold text-blue-700">Address</th>
                    <th scope="col" class="px-6 py-3 text-start text-md font-bold text-blue-700">Date</th>
                    <th scope="col" class="px-6 py-3 text-end text-md font-bold text-blue-700">price</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                  <tr>
                    <td class="px-6 py-4 text-sm text-blue-500">puma</td>
                    <td class="px-6 py-4 text-sm text-blue-500">2</td>
                    <td class="px-6 py-4 text-sm text-blue-500">Ahmedabad,gujarat</td>
                    <td class="px-6 py-4 text-sm text-blue-500">12/12/2024</td>
                    <td class="px-6 py-4 text-sm text-blue-500 text-end">$500</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm text-blue-500">puma</td>
                    <td class="px-6 py-4 text-sm text-blue-500">2</td>
                    <td class="px-6 py-4 text-sm text-blue-500">Ahmedabad,gujarat</td>
                    <td class="px-6 py-4 text-sm text-blue-500">12/12/2024</td>
                    <td class="px-6 py-4 text-sm text-blue-500 text-end">$500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory
