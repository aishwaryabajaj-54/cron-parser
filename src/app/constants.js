module.exports = {
    "TIME_CONSTANTS": [
        {
            "name": "MINUTE",
            "min": [0],
            "max": [59]
        },
        {
            "name": "HOUR",
            "min": [0],
            "max": [23]
        },
        {
            "name": "DAY OF MONTH",
            "min": [1],
            "max": [31]
        },
        {
            "name": "MONTH",
            "min": [1],
            "max": [12],
        },
        {
            "name": "DAY OF WEEK",
            "min": [0, 7],
            "max": [6]
        },
        {
            "name": "YEAR",
            "min": [1970],
            "max": [2100]
        }
    ],
    "Month_To_Number": {"jan":"1","feb":"2","mar":"3","apr":"4","may":"5","jun":"6","jul":"7","aug":"8","sep":"9","oct":"10","nov":"11","dec":"12"},
    "Days_To_Number": {"sun":"0","mon":"1","tue":"2","wed":"3","thu":"4","fri":"5","sat":"6"},
    "ALL": "*",
    "SEPERATOR": ",",
    "RANGE": "-",
    "STEP": "/"
}