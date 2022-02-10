/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Modal component
 */

// Imports
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

// Modal component
const Modal = props => {
  return (
    <Transition.Root show={props.show} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={props.onClose}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500/75 dark:bg-gray-800/80 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className={"inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6"}>
              <div>
                {props.icon && 
                    <div className={"mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-sky-100"}>
                        {props.icon}
                    </div>
                }

                <div className="mt-3 text-left sm:mt-5">
                  <Dialog.Title as="h2" className="text-4xl leading-6 font-medium dark:font-normal text-gray-800 dark:text-white">
                    {props.title}
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-lg text-gray-500 dark:text-white font-medium dark:font-light">
                        {props.description}
                    </p>
                  <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white  pt-8">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 sm:text-sm"
                    value={props.email}
                    onChange={props.onChangeEmail}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white mt-8">
                  Password:
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 sm:text-sm"
                    value={props.password}
                    onChange={props.onChangePassword}
                  />
                </div>
              </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 flex flex-row-reverse space-x-4 space-x-reverse">
                <button
                  type="button"
                  className={"w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-3 text-white bg-sky-800/80 hover:bg-sky-800/70 focus:ring-sky-500 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"}
                  onClick={props.onSubmit}
                >
                  {props.primaryButton}
                </button>
                <button
                  type="button"
                  className="w-full mt-3 inline-flex justify-center items-center rounded-lg border border-gray-300 dark:border-transparent px-4 py-2 bg-white dark:bg-transparent text-lg font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:mt-0 sm:col-start-1"
                  onClick={props.onClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal