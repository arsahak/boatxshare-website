'use client';

import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

export default function ThingsToKnow() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const allowedItems = [
    'pets',
    'swimming',
    'smoking',
    'alcohol',
    'kids under 12',
    'fishing',
    'glass bottles',
    'shoes',
    'liveboard',
  ];

  const accordionItems = [
    {
      key: 'allowed',
      title: 'Allowed on boat',
      content: (
        <div className="grid grid-cols-3 gap-y-4">
          {allowedItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <IoIosCheckmarkCircleOutline className="w-5 h-5 text-black" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: 'cancellation',
      title: 'Cancellation policy',
      content: 'Cancellation policy details go here.',
      badge: 'MODERATE',
    },
    {
      key: 'commercial',
      title: 'Commercial owner',
      content: 'Commercial owner details go here.',
    },
    {
      key: 'security',
      title: 'Security deposit',
      content: 'Security deposit details go here.',
    },
    {
      key: 'captain',
      title: 'Captain info',
      content: 'Captain information goes here.',
    },
  ];

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className=" p-6">
      <div className='grid grid-cols-3 gap-5'>
        <h2 className="col-span-1 text-lg font-bold text-gray-900">Things to know</h2>
        <div className="col-span-2 space-y-[1px]">
          {accordionItems.map(({ key, title, content, badge }) => (
            <div key={key} className="border-b ">
              <button
                onClick={() => toggleSection(key)}
                className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-900 font-medium">{title}</span>
                  {badge && (
                    <span className="px-2 py-0.5 text-xs font-semibold bg-orange-50 text-orange-600 rounded">
                      {badge}
                    </span>
                  )}
                </div>
                {openSection === key ? (
                  <BiChevronUp className="w-5 h-5 text-primary bg-blue-50 rounded" />
                ) : (
                  <BiChevronDown className="w-5 h-5 text-primary bg-blue-50 rounded" />
                )}
              </button>
              {openSection === key && (
                <div className="px-4 py-4">{content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr className='my-10'/>
    </div>
  );
}
