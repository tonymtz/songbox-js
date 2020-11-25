const { insertUser, deleteAllUsers, findUserByAccountId } = require('../models/users');

const user = {
    account_id: '123:wweew:1234',
    email: 'user@example.com'
};

test('Expect user to be inserted', async() => {
    await deleteAllUsers();
    const rowsCount = await insertUser(user);
    expect(rowsCount).toBe(true);
});

test('Expect same user NOT to be inserted', async() => {
    await deleteAllUsers();
    const rowsCount = await insertUser(user);
    const rowsCountFinal = await insertUser(user);
    expect(rowsCountFinal).toBe(false);
});

test('Insert user and find it.', async() => {
    await deleteAllUsers();
    const rowsCountFinal = await insertUser(user);
    const dummyUser = await findUserByAccountId(user);
    expect(dummyUser).not.toBe(null);
});

test('Expect user not to be inserted', async() => {
    await deleteAllUsers();
    delete user.account_id
    const rowsCount = await insertUser(user);
    expect(rowsCount).toBe(undefined);
});

test('Expect user not to be inserted', async() => {
    await deleteAllUsers();
    delete user.email
    const rowsCount = await insertUser(user);
    expect(rowsCount).toBe(undefined);
});

test('Expect user not to be inserted', async() => {
    await deleteAllUsers();
    delete user.email
    delete user.account_id
    const rowsCount = await insertUser(user);
    expect(rowsCount).toBe(undefined);
});