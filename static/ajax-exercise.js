"use strict";

// Part 1

// use 'response' to update the text in #fortune-text
$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
    $('#fortune-text').text(response);
  });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    zipcode: $('#zipcode-field').val()
  };

  // TODO: choose a request method (GET or POST) by uncommenting one of
  // these blocks of code

  $.get('/weather', formData, (response) => {
    $('#weather-info').text(response.forecast)
    // we only care about the returning the forecast 
  });
});


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  // TODO: create an object to store key-value pairs that'll be sent to
  // the server

  // TODO: make a request to /order-melons
  //
  // In the callback function, use the response from the server to
  // update #order-status. IMPORTANT: if the result code is 'ERROR',
  // make it show up in red.
});
