/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Widget component
 **/

// Widget component
const Widget = props => {
    var textAlign
    if(props.textAlign === "left"){
        textAlign = "text-left"
    } else if(props.textAlign === "center"){
        textAlign = "text-center"
    } else if(props.textAlign === "right"){
        textAlign = "text-right"
    }

    return (
        <div className={"flex w-full border border-gray-100 dark:border-gray-800 col-span-" + props.columns + " pt-2 pb-4 pl-6 pr-6 rounded-lg bg-white/90 dark:bg-gray-800/50 mt-4 md:shadow-2xl items-center " + textAlign + ""}>
            <div className="w-full">
            {props.icon}
            <h2 className="text-lg font-bold text-sky-600 dark:text-sky-400 uppercase pt-4">{props.title}</h2>
            {props.view}
            </div>
        </div>
    )
}

export default Widget
