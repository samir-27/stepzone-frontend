import React, { useState, useEffect } from 'react';
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { useSearchParams } from 'react-router-dom';

const AccordionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useState({});

  const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', colorCode: '#ffffff' },
        { value: 'gray', label: 'Gray', colorCode: '#808080' },
        { value: 'blue', label: 'Blue', colorCode: '#0000ff' },
        { value: 'brown', label: 'Brown', colorCode: '#964B00' },
        { value: 'red', label: 'Red', colorCode: '#ff0000' },
        { value: 'pink', label: 'Pink', colorCode: '#ffc0cb' },
        { value: 'yellow', label: 'Yellow', colorCode: '#ffff00' },
        { value: 'green', label: 'Green', colorCode: '#008000' },
        { value: 'purple', label: 'Purple', colorCode: '#800080' },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'casual', label: 'Casual' },
        { value: 'flipfolp', label: 'FlipFlop' },
        { value: 'ethnic', label: 'Ethnic' },
        { value: 'formals', label: 'Formals' },
        { value: 'sandals', label: 'Sandals' },
        { value: 'sports', label: 'Sports' },
        { value: 'sneaker', label: 'sneaker' },
      ],
    },
    {
      id: 'brand',
      name: 'Brand',
      options: [
        { value: 'nike', label: 'Nike' },
        { value: 'adidas', label: 'Adidas' },
        { value: 'puma', label: 'Puma' },
        { value: 'bata', label: 'Bata' },
        { value: 'reebok', label: 'Reebok' },
        { value: 'skechers', label: 'Skechers' },
        { value: 'clarks', label: 'Clarks' },
      ],
    },
    {
      id: 'price',
      name: 'Price',
      options: [
        { value: '1000-3000', label: '1000-3000' },
        { value: '3000-5000', label: '3000-5000' },
        { value: '5000-10000', label: '5000-10000' },
        { value: '10000-15000', label: '10000-15000' },
        { value: '15000-25000', label: '15000-25000' },
        { value: '25000-35000', label: '25000-35000' },
        { value: 'above-35000', label: 'Above 35000' },
      ],
    },
  ];

  const handleFilterChange = (filterId, optionValue) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterId]: optionValue,
    }));
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
    setSearchParams({});
  };

  useEffect(() => {
    Object.keys(selectedFilters).forEach((key) => {
      if (selectedFilters[key]) {
        searchParams.set(key, selectedFilters[key]);
      } else {
        searchParams.delete(key);
      }
    });
    setSearchParams(searchParams);
  }, [selectedFilters, searchParams, setSearchParams]);

  const AccordionItem = ({ header, children }) => (
    <Item
      header={() => <>{header}</>}
      className="mb-2"
      buttonProps={{
        className: () =>
          `flex w-full p-4 text-left bg-slate-100 hover:bg-slate-200 text-xl font-bold rounded-md`,
      }}
      contentProps={{
        className: "transition-height duration-200 ease-out",
      }}
      panelProps={{ className: "p-4" }}
    >
      {children}
    </Item>
  );

  return (
    <>
      <Accordion>
        {filters.map((filter) => (
          <AccordionItem key={filter.id} header={filter.name}>
            <div className="flex flex-col space-y-2">
              {filter.options.map((option) => (
                <label key={option.value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={filter.id}
                    value={option.value}
                    checked={selectedFilters[filter.id] === option.value}
                    onChange={() => handleFilterChange(filter.id, option.value)}
                    className="form-checkbox"
                  />
                  {filter.id === 'color' && (
                    <span
                      className="w-4 h-4 inline-block rounded-full border-2 border-gray-900"
                      style={{ backgroundColor: option.colorCode }}
                    ></span>
                  )}
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
      <button className='bg-sky-900 p-2 rounded-md text-white font-semibold hover:bg-rose-600 w-full' onClick={handleClearFilters}>Clear Filters</button>
    </>
  );
};

export default AccordionComponent;
