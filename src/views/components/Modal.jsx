/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Modal component
 **/

// Imports
import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'

// Modal component
const Modal = props => {
  const ContentView = props.contentView;

  const isPrimaryDisabled = props.isPrimaryDisabled

  // Text align left, center, right
  var textAlign = "text-left"

  switch (props.textAlign) {
    case "left":
      textAlign = "text-left"
      break;
    case "center":
      textAlign = "text-center"
      break;
    case "right":
      textAlign = "text-right"
      break;
    default:
      textAlign = "text-left"
  }

  return (
    <Transition.Root show={props.show} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm bg-white/10 " onClose={props.onClose}>
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
            <Dialog.Overlay className="fixed inset-0 bg-gray-500/75 dark:bg-gray-800/80" />
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
            <div className={"inline-block align-bottom dark:bg-gray-900 bg-gray-100 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6 mt-12"}>
              <div className="pb-4">
                {props.icon && 
                    <div className={"mx-auto flex items-center justify-center h-16 w-16 rounded-full text-gray-800 dark:text-gray-100"}>
                        {props.icon}
                    </div>
                }

                {
                  // Better on the left side, since the natural reading direction is left to right.
                  // Exception for languages that read right to left, such as Arabic and Hebrew.
                }
                <div className={"pt-4 " + textAlign + " sm:mt-5"}>
                  <Dialog.Title as="h2" className="text-4xl leading-6 font-medium dark:font-normal text-gray-800 dark:text-white">
                    {props.title}
                  </Dialog.Title>

                  <Dialog.Description>
                    <div className="mt-4">
                      <p className="text-lg text-gray-700 dark:text-white dark:font-light">
                          {props.description}
                      </p>

                      {ContentView}
                    </div>
                  </Dialog.Description>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 flex flex-row-reverse space-x-4 space-x-reverse">
                {isPrimaryDisabled ?
                    <button
                      type="button"
                      className={"w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-3 text-white bg-gray-400/80 focus:ring-gray-400/80 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-0"}
                      onClick={props.onPrimary}
                      disabled
                    >
                      {props.primaryButton}
                    </button>
                  :   
                  <button
                    type="button"
                    className={"w-full inline-flex justify-center rounded-lg border shadow-sm px-4 py-3 text-sky-100 border-sky-800/80 bg-sky-700 hover:bg-sky-800/70 focus:ring-sky-800/80 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-0"}
                    onClick={props.onPrimary}
                  >
                    {props.primaryButton}
                  </button>
                }
                {props.secondaryButton &&
                <button
                  type="button"
                  className="w-2/3 mt-3 inline-flex justify-center items-center rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 bg-white dark:bg-transparent text-lg font-medium text-gray-700 dark:text-slate-100 hover:bg-gray-50 dark:hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:col-start-1 dark:focus:ring-offset-0"
                  onClick={props.onSecondary}
                >
                  {props.secondaryButton}
                </button>
                }
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal