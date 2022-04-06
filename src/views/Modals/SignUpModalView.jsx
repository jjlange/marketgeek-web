// Imports
import SelectBox from '../Components/SelectBox'
import { useState } from 'react'

// Content view for the Sign Up modal
const SignUpModalView = (props) => {
    const genderChoices = [
        { id: 1, name: 'Male' },
        { id: 2, name: 'Female' },
        { id: 3, name: 'Other...' },
    ]

    return (
        <div className="mb-12">
            <div className="flex space-x-8">
                <div className="w-full">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-white  pt-8 text-left">
                        First Name(s)
                    </label>
                    <div className="mt-1">
                        <input
                            id="firstName"
                            name="firstName"
                            type="name"
                            autoComplete="name"
                            className="appearance-none w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 sm:text-sm"
                            value={props.firstName}
                            onChange={props.onChangeFirstName}
                        />
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-white  pt-8 text-left">
                        Surname
                    </label>
                    <div className="mt-1">
                        <input
                            id="lastName"
                            name="lastName"
                            type="name"
                            autoComplete="name"
                            className="appearance-none w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 sm:text-sm"
                            value={props.surName}
                            onChange={props.onChangeSurName}
                        />
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white  pt-8 text-left">
                    Email address
                </label>
                <div className="mt-1">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="appearance-none w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 sm:text-sm"
                        value={props.email}
                        onChange={props.onChangeEmail}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white  pt-8 text-left">
                    Password
                </label>
                <div className="mt-1">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password"
                        className="appearance-none w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 sm:text-sm"
                        value={props.password}
                        onChange={props.onChangePassword}
                    />
                </div>
            </div>
            <div className="flex space-x-8">
                <div className="w-full">
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 dark:text-white  pt-8 text-left">
                        Date of Birth
                    </label>
                    <div className="mt-1">
                        <input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            autoComplete="dateOfBirth"
                            className="appearance-none w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 sm:text-sm"
                            value={props.birthDate}
                            onChange={props.onChangeEmail}
                        />
                    </div>
                </div>
                <div className="w-2/3">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-white  pt-8 text-left">
                        Gender
                    </label>
                    <div className="mt-1">
                        <SelectBox choices={genderChoices}></SelectBox>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Export modal
export default SignUpModalView