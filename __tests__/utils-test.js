import {validateText} from '../utils';

describe('Utils Testing', () => {
  beforeAll(() => {
    jest.mock('react-native');
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  test('validateText parenthesis success', async () => {
    expect(validateText('(texto de prueba)')).toBeTruthy();
  });
  test('validateText parenthesis error', () => {
    expect(validateText('(texto de prueba')).toBeFalsy();
  });
  test('validateText brackets success', async () => {
    expect(validateText('[texto de prueba]')).toBeTruthy();
  });
  test('validateText brackets error', () => {
    expect(validateText('[texto de prueba')).toBeFalsy();
  });
  test('validateText keys success', async () => {
    expect(validateText('{texto de prueba}')).toBeTruthy();
  });
  test('validateText keys error', () => {
    expect(validateText('{texto de prueba')).toBeFalsy();
  });
  test('validateText multiple parenthesis success', () => {
    expect(validateText('(){}[texto de prueba][]{}()')).toBeTruthy();
  });
  test('validateText multiple parenthesis error', () => {
    expect(validateText('()}[texto de prueba[{}()')).toBeFalsy();
  });
});
