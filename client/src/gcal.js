import request from 'superagent'

const CALENDAR_ID = 'd6tp0clanoig6cfmegish28qf0@group.calendar.google.com'
const API_KEY = 'AIzaSyAWQ7FOU544fk7hE0GsVZiCRwW0MHCX1oQ'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}
