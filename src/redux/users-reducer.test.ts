import {follow, usersReducer} from './users-reducer';

// test('change following user', () => {
//     const initialState = {
//         users: [
//             {id: 1, followed: false, name: 'Anton', status: 'I am a boss', location: {city: 'Krasnodar', country: 'Russian'}},
//             {id: 2, followed: false, name: 'Anatoliy', status: 'I am a boss', location: {city: 'Krasnodar', country: 'Russian'}},
//             {id: 3, followed: false, name: 'Virtor', status: 'I am a boss', location: {city: 'Krasnodar', country: 'Russian'}}
//         ],
//         pageSize: 6,
//         currentPage: 1
//     }
//
//     const action = followAC(1)
//
//     const newState = usersReducer(initialState, action)
//
//     expect(newState.users[0].followed).toBe(true)
// })