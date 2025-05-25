import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'calendar-app',
  styleUrl: 'calendar-app.css',
  shadow: true,
})
export class CalendarApp {
  @Prop() availability: string;
  @Prop() prices: string;

  @State() currentMonth: number;
  @State() currentYear: number;

  constructor() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth(); // Months are 0-indexed
  }

  private parseAvailability() {
    return this.availability ? JSON.parse(this.availability) : {};
  }

  private parsePrices() {
    return this.prices ? JSON.parse(this.prices) : {};
  }

  private getPriceForDate(date: string, prices: any) {
    const [year, month] = date.split('-');
    const monthPrices = prices[year]?.[month];
    return monthPrices || null;
  }

  private isAvailable(date: string, availability: any) {
    return availability[date] === undefined || availability[date];
  }

  private getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  private renderCalendar() {
    const { currentYear, currentMonth } = this;
    const prices = this.parsePrices();

    // Check if the current month has a price
    const monthPrice = prices[currentYear]?.[String(currentMonth + 1).padStart(2, '0')];
    if (!monthPrice) {
      return null; // Don't render the calendar if no price for this month
    }

    const daysInMonth = this.getDaysInMonth(currentYear, currentMonth);
    const availability = this.parseAvailability();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

    const firstDayWeekday = (firstDayOfMonth.getDay() + 6) % 7;

    const calendarRows = [];
    let week = [];
    let dayOfMonth = 1;

    for (let i = 0; i < 6; i++) { // Up to 6 weeks in a month
      for (let j = 0; j < 7; j++) { // 7 days in a week
        if (i === 0 && j < firstDayWeekday) {
          week.push(<td></td>); // Empty cells before the first day of the month
        } else if (dayOfMonth <= daysInMonth) {
          const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dayOfMonth).padStart(2, '0')}`;
          const price = this.getPriceForDate(date, prices);
          const isAvailable = this.isAvailable(date, availability);
          const availabilityClass = isAvailable ? 'available' : 'unavailable';

          week.push(
            <td class={availabilityClass}>
              <div class="day">{dayOfMonth}</div>
              {isAvailable && price && <div class="price">{price}€</div>}
            </td>
          );
          dayOfMonth++;
        }
      }
      calendarRows.push(<tr>{week}</tr>);
      week = [];
      if (dayOfMonth > daysInMonth) break;
    }

    return calendarRows;
  }

  private handleMonthChange(increment: number) {
    const { currentYear, currentMonth } = this;
    let newMonth = currentMonth + increment;
    let newYear = currentYear
    if (newMonth < 0) {
      newMonth = 11
      newYear = currentYear - 1
    } else  if (newMonth > 11) {
      newMonth = 0
      newYear = currentYear + 1
    }

    const prices = this.parsePrices();
    const newYearStr = newYear.toString();
    const nextMonthPrice = prices[newYearStr]?.[String(newMonth + 1).padStart(2, '0')];

    if (!nextMonthPrice) {
      this.currentYear = currentYear;
      this.currentMonth = currentMonth;
      return; // Don't allow month change if no price available for the month
    }

    this.currentYear = newYear;
    this.currentMonth = newMonth;
  }

  render() {
    const { currentYear, currentMonth } = this;
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const prices = this.parsePrices();
    const monthPrice = prices[currentYear]?.[String(currentMonth + 1).padStart(2, '0')];

    if (!monthPrice) {
      return null; // Don't render the calendar if no price for this month
    }

    return (
      <div class="calendar">
        <div class="header">
          <button onClick={() => this.handleMonthChange(-1)}>&lt;</button>
          <div class="month-year">
            {monthNames[currentMonth]} {currentYear}
          </div>
          <button onClick={() => this.handleMonthChange(1)}>&gt;</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
              <th>Sun</th>
            </tr>
          </thead>
          <tbody>{this.renderCalendar()}</tbody>
        </table>
      </div>
    );
  }
}
