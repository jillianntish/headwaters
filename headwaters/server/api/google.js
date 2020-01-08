module.exports = {
CLIENT_ID : '252751we734600-se6610ol8twerwern886jj7gc5m2ugaai.apps.googleuserecontent.com',
API_KEY : 'AIzaSyCnk5CDEX3Pvwerwerwe0OpnVf4eW_Lmeere80',

// Array of API discovery doc URLs for APIs used by the quickstart
DISCOVERY_DOCS : ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
SCOPES : "https://www.googleapis.com/auth/calendar",

// var authorizeButton = document.getElementById('authorize_button');
// var signoutButton = document.getElementById('signout_button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
handleClientLoad: function() {
  gapi.load('client:auth2', initClient);
},

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
initClient: function() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
},

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
updateSigninStatus: function(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    listUpcomingEvents();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
},

/**
 *  Sign in the user upon button click.
 */
handleAuthClick: function(event) {
  gapi.auth2.getAuthInstance().signIn();
},

/**
 *  Sign out the user upon button click.
 */
handleSignoutClick: function(event) {
  gapi.auth2.getAuthInstance().signOut();
},

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
appendPre: function(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
},

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */
listUpcomingEvents: function() {
  gapi.client.calendar.events.list({
    'calendarId': 'primary',
    'timeMin': (new Date()).toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'maxResults': 10,
    'orderBy': 'startTime'
  }).then(function(response) {
    var events = response.result.items;
    appendPre('Upcoming events:');

    if (events.length > 0) {
      for (i = 0; i < events.length; i++) {
        var event = events[i];
        var when = event.start.dateTime;
        if (!when) {
          when = event.start.date;
        }
        appendPre(event.summary + ' (' + when + ')')
      }
    } else {
      appendPre('No upcoming events found.');
    }
  });
}
};
