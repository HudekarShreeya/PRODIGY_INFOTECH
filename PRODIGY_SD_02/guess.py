import random

def guessing_game():
    print("Welcome to the Guessing Game!")
    print("I have selected a random number between 1 and 100.")
    print("Try to guess it!")

    # Generate a random number between 1 and 100
    number_to_guess = random.randint(1, 100)
    attempts = 0

    while True:
        guess = int(input("Enter your guess (between 1 and 100): "))
        attempts += 1

        if guess < number_to_guess:
            print("Too low! Try again.")
        elif guess > number_to_guess:
            print("Too high! Try again.")
        else:
            print(f"Congratulations! You've guessed the number {number_to_guess}!")
            print(f"It took you {attempts} attempts to win the game.")
            break

if __name__ == "__main__":
    guessing_game()
