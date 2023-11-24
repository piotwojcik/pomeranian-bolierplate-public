import { getNumberOfTasks, getRandomTaskName } from './TestedComponent';

describe('getNumberOfTasks', () => {
  test('returns 0 for an empty array', () => {
    expect(getNumberOfTasks([])).toBe(0);
    expect(getNumberOfTasks(1)).toBeUndefined();
    expect(() => getNumberOfTasks()).toThrow();
  });
});

describe('gestRandomTaskName', () => {
  test('returns first element from test data', () => {
    const getRandomMock = jest.fn().mockReturnValue(0);
    expect(getRandomTaskName(getRandomMock)).toEqual(TODO_NAMES.at(0));
  });
});
