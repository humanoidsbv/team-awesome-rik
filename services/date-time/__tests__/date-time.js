import { createTimeStamp } from '../date-time';

test('if timestamp is created using nl locale date and time', () => {
  expect(createTimeStamp('01-01-1988', '09:00')).toBe('1988-01-01T08:00:00.000Z');
});
