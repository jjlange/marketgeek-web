/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description SelectBox Component
 **/

// Imports
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

// Import icons
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

export default function SelectBox(props) {
    const choices = []

    // for each props.choices and add to choices
    for (let i = 0; i < props.choices.length; i++) {
        choices.push(props.choices[i])
    }

    const [selected, setSelected] = useState(props.default ? choices[0] : {id: -1, name: "Choose..."});

    return (
        <div className="w-full">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative">
            <Listbox.Button className="appearance-none dark:text-white relative w-full py-[9px] pl-3 pr-10 text-left bg-white dark:bg-gray-700 rounded-lg cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 shadow-sm focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm border border-gray-300 dark:border-gray-600">
              <span className="block truncate dark:text-white">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="w-5 h-5 text-black"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full py-0.5 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {choices.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `cursor-default select-none relative py-2 pl-10 pr-4 ${
                        active ? 'text-sky-900 bg-sky-100' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate dark:text-white ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    )
}