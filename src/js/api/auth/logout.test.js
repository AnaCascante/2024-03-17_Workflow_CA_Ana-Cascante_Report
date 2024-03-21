//Import logout function and remove function
import { logout } from "./logout.js";
import { remove } from "../../storage/index.js";

//Mock the remove token from localStorage
describe("logout", () => {
    it("should remove the token from localStorage", () => {
        // Arrange
        const localStorageMock = {
            removeItem: jest.fn(),
        };
        global.localStorage = localStorageMock;

        // Act
        logout();

        // Assert
        expect(localStorageMock.removeItem).toHaveBeenCalledWith("token");
    });
});

