/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Button component
 */

const Button = props => {
    // Get colour
    return (
        <button className={"mx-2 inline-flex items-center px-3 py-[0.4em] border text-base border-transparent font-medium rounded-lg text-"+ props.textColor + " bg-"+ props.lightMode + "-800/80 dark:bg-"+ props.darkMode + "-800/80 hover:bg-"+ props.lightMode + "-800/70 dark:hover:bg-"+ props.darkMode + "-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-"+ props.lightMode + "-500 dark:focus:ring-"+ props.darkMode + "-500 transition ease-in"} onClick={props.onClick}>
            {props.title}
            {props.children}
        </button>
    )
}

Button()

export default Button