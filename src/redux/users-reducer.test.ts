import {followAC, usersReducer} from './users-reducer';

test('change following user', () => {
    const initialState = {
        users: [
            {id: 1, followed: false, fullName: 'Anton', status: 'I am a boss', location: {city: 'Krasnodar', country: 'Russian'}},
            {id: 2, followed: false, fullName: 'Anatoliy', status: 'I am a boss', location: {city: 'Krasnodar', country: 'Russian'}},
            {id: 3, followed: false, fullName: 'Virtor', status: 'I am a boss', location: {city: 'Krasnodar', country: 'Russian'}}
        ]
    }

    const action = followAC(1)

    const newState = usersReducer(initialState, action)

    expect(newState.users[0].followed).toBe(true)
})