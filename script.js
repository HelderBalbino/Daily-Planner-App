const currentDay = $('#currentDay');
const calendarContainer = $('#calendar-container');
const clear = $('#clear');

let startHour = 1;
let endHour = 24;
let storage = [];

// function to display the days in d/m/y
function DateDisplay() {
  let todayDate = dayjs().format('dddd[,] DD MMM YYYY [at] HH:mm:ss');
  currentDay.text(todayDate);
}
setInterval(DateDisplay, 1);

// function to render the calendar rows
function renderCalendarRows() {
  // for loop to create all rows and display in the correct order
  for (let i = startHour; i <= endHour; i++) {
    const calendarEvent = $('<div>')
      .attr('id', 'calendar-event')
      .addClass('row');
    const eventHour = $('<div>')
      .attr('id', 'event-hour')
      .addClass('col-md-1 hour')
      .text(i + ':00');
    const eventText = $('<textarea>')
      .attr('id', 'event-text')
      .attr('placeholder', 'Add new calendar event')
      .addClass('col-md-10 description');
    const eventSave = $('<button>')
      .attr('id', 'event-save')
      .addClass('col-md-1 saveBtn')
      .text('Save');

    // appends created elements to rows
    calendarEvent.append(eventHour, eventText, eventSave);

    calendarContainer.append(calendarEvent);

    let currentHour = dayjs().format('H');

    // checks whether hours are correct and apply appropriate class
    currentHour == i
      ? eventText.addClass('present')
      : currentHour > i
      ? eventText.addClass('past')
      : eventText.addClass('future');

    // runs the save button
    $('#event-save').on('click', function () {
      console.log('saved');
    });
  }
}

renderCalendarRows();
