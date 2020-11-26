const { insertFavorite, getFavoritesFromUser, deleteAllFavorites, deleteFavoriteFromUser } = require('../models/favorites');
const { insertUser, findUserByAccountId, deleteAllUsers } = require('../models/users');

const user = {
    account_id: '3245:dadaweew:1234',
    email: 'otheruser@example.com'
};

const song = {
    song_name: 'el ansioso.mp3',
    path_lower: '/el ansioso.mp3'
}

const anotherSong = {
    song_name: 'sasaheyo.wav',
    path_lower: '/attack on titan/songs/sasaheyo.wav'
}

test('Expect to insert user and insert favorite.', async() => {
    await deleteAllFavorites();
    await deleteAllUsers();
    const success = await insertUser(user);
    const dummyUser = await findUserByAccountId({ account_id: user.account_id });

    const favoriteSucess = await insertFavorite({ user_id: dummyUser.user_id }, song);
    const secondFavoriteSucess = await insertFavorite({ user_id: dummyUser.user_id }, anotherSong);
    expect(favoriteSucess).toBe(true);
});

test('expect to get songs from user', async() => {
    const dummyUser = await findUserByAccountId({ account_id: user.account_id });
    const songs = await getFavoritesFromUser({ user_id: dummyUser.user_id });

    expect(songs).toHaveLength(2)
})

test('expect user be inserted and not insert favorite.', async() => {
    await deleteAllFavorites();
    await deleteAllUsers();
    const success = await insertUser(user);
    const dummyUser = await findUserByAccountId({ account_id: user.account_id });

    const favoriteSucess = await insertFavorite({ user_id: 'notAValidId' }, song);
    expect(favoriteSucess).toBe(false);
});