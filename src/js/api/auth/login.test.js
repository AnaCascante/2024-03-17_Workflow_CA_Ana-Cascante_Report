//Import the function to test
import { login } from "..auth/login.js";


//Mock the fetch function
globalThis.fetch = jest.fn(() => 
    Promise.resolve({ 
        json: () => Promise.resolve({ accessToken: 'mock-token' }),
        statusText: 'OK'
    })
);

//Mock localStorage
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: function(key) {
            return store[key];
        },
        setItem: function(key, value) {
            store[key] = value.toString();
        },
        clear: function() {
            store = {};
        }
    };
})();

Object.defineProperty(window, 'localStorage', {value: localStorageMock});   

describe('login', () => {
    beforeEach(() => { 
        localStorage.clear();
    });
    it('should store the token in localStorage', async () => {
        await login('test-user', 'test-password');
        expect(localStorage.getItem('token')).toBe('mock-token');
    });
});
