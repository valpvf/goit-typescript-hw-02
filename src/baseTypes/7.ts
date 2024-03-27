/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}
function isWeekend(day: Day) {
  if (day === Day.SATURDAY || day === Day.SUNDAY) {
    console.log("It's weekend");
    return true;
  } else {
    console.log("It's not weekend");
    return false;
  }
}

isWeekend(new Date().getDay() - 1);
export {};
