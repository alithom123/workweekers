console.log("in background.js for main extension.");
// background.js

    chrome.runtime.onInstalled.addListener(function() {

      // Get number of quotes by reading in json and checking size. Probably store it in storage also. Not that much.
      var num_quotes;
      var quotes_list;
      $.getJSON("quoteList.json", function(json) {
          num_quotes = json.length;
          console.log('num_quotes var set to ' + num_quotes);
          quotes_list = json;
          console.log('quotes_list var set to ' + JSON.stringify(quotes_list));

          // chrome.storage.local.set({'quote_index': 0, 'num_quotes': num_quotes, 'quotes_list': json}, function(){
          //       console.log('variables stored locally');
          // });
          chrome.storage.local.set({'quote_index': 0, 'num_quotes': 22, 'quotes_list': json, 'test': 'testd'}, function(){
              console.log('Local variable store completed.');
          });
          // chrome.storage.local.set({'a': 0}, function(){
          //     console.log('Local variable store completed.');
          // });
      });
    });

    chrome.tabs.onCreated.addListener(function(tab) {
        //Load html template.  DONE in manifest.json "chrome_url_overrides" : { "newtab": "mitch.html"}
        //Get next joke from storage.
        //Increment value for joke_index & put in storage.
        //Populate html with joke.
    });
