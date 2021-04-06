interface IDateProvider {
  dateNow(): Date;
  compareInHours(start_date: Date, endDate: Date): number;
  convertToUTC(date: Date): string;
}

export { IDateProvider };
