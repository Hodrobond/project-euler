/*
You are given the following information, but you may prefer to do some research
for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century
unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century
(1 Jan 1901 to 31 Dec 2000)?
*/
export function getSolution(){
  var start = new Date("1901-01-01");
  var finish = new Date("2000-12-31");
  var dayMilliseconds = 1000 * 60 * 60 * 24;
  var sundays = 0;
  while (start <= finish) {
    var d = new Date();
    var date = start.getDate();
    var day = start.getDay()

    var weekOfMonth = Math.ceil((date - 1 - day) / 7);
    if (day === 0 && weekOfMonth === 0) {
      sundays++;
    }
    start = new Date(+start + dayMilliseconds);
  }
  return sundays;
}
