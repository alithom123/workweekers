// content.js
console.log("runs content_mitch.js when new tab loads I think")

var quoteId = '';

// Main function that kicks everything off.
function setNextQuote() {

    console.log('in setNextQuote');

    var quote_index;
    var num_quotes;
    var quotes_list;

    chrome.storage.local.get(['quote_index','num_quotes','quotes_list'], function (values) {
    // chrome.storage.local.get(['a'], function (values) {

        console.log('stored values = ');
        console.log(values);
        var quote_index = values.quote_index;
        var num_quotes = values.num_quotes;
        var quotes_list = values.quotes_list;

        // var quote_fits = false;
        var quote;

        // Remove quotes that are too long and look bad on page.
        /*
        while(!quote_fits) {

            quote = quote_list[quote_index].quote;

            if(quote.length < 250)
            {
                quote_fits = true;
            }
            else
            {
                quote_index++;
            }
        }
        */

        quote = quotes_list[quote_index].quote;
        quote_index = (quote_index + 1) % num_quotes;
        quoteId = quote_index;


        console.log('Got quote = ' + quote);
        $("#quote").text(quote);
        $("title").text(quote);

        // console.log("Here are the local storage values.");
        // console.log(values);

        chrome.storage.local.set({'quote_index': quote_index}, function()
        {
            console.log('Updated quote_index to ' + quote_index);
        });
    });
    }

setNextQuote();
