export function generateRandomEmail() {
  const timestamp = Date.now();
  return `test${timestamp}@test.com`;
}

export function generateUserData(overrides = {}) {
  return {
    title: 'Test',
    firstName: 'Test',
    lastName: 'Test',
    street: 'Test Straße',
    streetNumber: '1',
    zip: '10439',
    city: 'Berlin',
    birthdate: '1990-12-12',
    password: 'Qwerty123',
    email: generateRandomEmail(),
    ...overrides,
  };
}