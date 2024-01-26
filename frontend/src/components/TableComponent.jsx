import React from 'react';

const TableComponent = (props) => {
    return (
        <div class="overflow-x-auto mt-10">


        <table class="min-w-full text-left text-sm whitespace-nowrap">
      
         
          <thead class="uppercase tracking-wider border-b-2 dark:border-neutral-600">
            <tr>
              <th scope="col" class="px-6 py-4">
                Rank
              </th>
              <th scope="col" class="px-6 py-4">
                Name
              </th>
              <th scope="col" class="px-6 py-4">
                Point
              </th>
              <th scope="col" class="px-6 py-4">
                Category
              </th>
            </tr>
          </thead>
      
          
          <tbody>
            {
              props.data.map((data,index) => (
                <tr class="border-b dark:border-neutral-600">
                <th scope="row" class="px-6 py-4">
                  {data.attributes.rank}
                </th>
                <td class="px-6 py-4">{data.attributes.name}</td>
                <td class="px-6 py-4">{data.attributes.point}</td>
                <td class="px-6 py-4">{data.attributes.category}</td>
              </tr>
              ))
            }
      
           
      
           
      
          </tbody>
      
        </table>
      
      </div>
    );
};

export default TableComponent;