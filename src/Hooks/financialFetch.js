import axios from 'axios';

// Method to get a specific ticket from Polygon.io
export const fetchTicker = (query) => {
    return new Promise((resolve, reject) => {
        axios.get('https://api.polygon.io/v3/reference/tickers?active=true&search=' + query + '&sort=ticker&market=stocks&order=asc&limit=1&apiKey=loHZH3xI8iALabQ1tcSlFdSFL1OaOVqe')
        .then(result => {
            var object = result.data.results
          

            resolve(result[0])
        }).catch(err => {
            reject(err)
        })
    })
}

// Method to get popular stocks from Polygon.io
export const fetchPopularStocks = (limit) => {
    return new Promise((resolve, reject) => {
        console.log('https://api.polygon.io/v2/reference/news?limit=' + limit + '&apiKey=loHZH3xI8iALabQ1tcSlFdSFL1OaOVqe')
        axios.get('https://api.polygon.io/v2/reference/news?limit=' + limit + '&apiKey=loHZH3xI8iALabQ1tcSlFdSFL1OaOVqe')
        .then(result => {
            var object = result.data.results;
            resolve(object)
        }).catch(err => {
            reject(err)
        })
    })
}

// Method to fetch a price by a ticker from Polygon.io
export const fetchPrice = (ticker) => {    
    // Get yesterday date
  //  var date = getYesterdayDate();
  var date  = "2022-04-01";
    return new Promise((resolve, reject) => {
        axios.get('https://api.polygon.io/v1/open-close/'+ ticker + '/' + date +'?adjusted=true&apiKey=su2GHXggTKaoePfKqNUhylp7bS10S3Cy')
        .then(result => {
            resolve(result.data.close)
        }).catch(err => {
            reject(false)
        })
    })

}

export const fetchSentiments = () => {
   return new Promise((resolve, reject) => {
        fetch("/Tests/searchResults.json")
        .then((res) => res.json())
        .then(res => {

            var positive = 0
            var neutral = 0
            var negative = 0

            for(var x = 0; x < res.length; x++) {
               if(res[x].sentiment_id == 0){
                   positive++
               } else if(res[x].sentiment_id == 1) {
                   neutral++
               } else if(res[x].sentiment_id == 2) {
                   negative++
               }
            }

            console.log("Positive", positive)
            console.log("Neutral", neutral)
            console.log("Negative", negative)


            var cost = positive + negative + neutral

            positive = (positive/cost) * 100
            negative = (negative/cost) * 100
            neutral  = (neutral/cost) * 100

            var result = [{
                "positive": positive,
                "neutral": neutral,
                "negative": negative
            }]
            resolve(result)
        }).catch(err => {
            reject(false)
        })
   })
}

// Method to return yesterdays date
function getYesterdayDate() {
    // Get yesterday date
    var date = new Date(new Date().getTime() - 24*60*60*1000);

    // Convert to ISO time format
    date = date.toISOString().slice(0, 10);

    // Get year, month and day from String
    const year = date.toString().split("-")[0]
    const month =  date.toString().split("-")[1]
    const day = date.toString().split("-")[2]

    // Return in correct format
    return year + "-" + month + "-" + day;
}
