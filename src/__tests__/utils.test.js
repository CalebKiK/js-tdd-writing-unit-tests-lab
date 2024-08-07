// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", ()=> {
    it("returns true if the word is the same forward and backward", () => {
        const word = "racecar";

        const result = isPalindrome(word);

        expect(result).toBe(true)
    });

    it("returns false if the word is not the same forward and backwards", () => {
        const word = "car";

        const result = isPalindrome(word);

        expect(result).toBe(false)
    });

    it("handles uppercase and lowercase words", () => {
        const word = "rAceCaR";

        const result = isPalindrome(word);

        expect(result).toBe(true)
    });

    it("handles if input is empty strings", () => {
        const word = "";

        expect(() => isPalindrome(word).toThrow());
    });

    it("handles if input is non-alphabetic characters", () => {
        const word = "w123t";

        expect(() => isPalindrome(word).toThrow());
    })
})
