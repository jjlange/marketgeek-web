// Content view for the login modal
const LoginModalView = (props) => {
    return (
        <div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white  pt-8 text-left">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 sm:text-sm"
                        value={props.email}
                        onChange={props.onChangeEmail}
                    />
                </div>
            </div>

            
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white mt-8 text-left">
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
    )
}

// Export modal
export default LoginModalView