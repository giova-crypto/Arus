import { HolidayAPI } from 'holidayapi';
const key = 'a8468558-8770-499a-a99d-8a9f6113a507'
const holidayApi = new HolidayAPI({ key });
holidayApi.holidays({
  country: 'CO',
  year: '2021',
});