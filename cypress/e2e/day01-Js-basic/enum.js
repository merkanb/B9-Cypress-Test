const browsers={
    CHROME:"chrome",
    FF: "firefox",
    EDGE: "edge",
    SAFARI: "safari"
}

let browser=browsers.CHROME
browser=browsers.EDGE


function execute () {
    switch(browser) { 
        case browsers.CHROME:
        console.log("execute on chrome")
        break
        case browsers.FF:
        console.log("execute on firefox")
        break 
        case browsers.EDGE:
        console.log("execute on Edge")
        break 
        case browsers.SAFARI:
        console.log("execute on Safari")
        break
    }
}


console.log(execute())   // will give chosen case statement up      //  execute on chrome
    