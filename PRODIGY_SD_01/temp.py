def celsius_to_fahrenheit(celsius):
    return round((celsius * 9/5) + 32, 2)

def celsius_to_kelvin(celsius):
    return round(celsius + 273.15, 2)

def fahrenheit_to_celsius(fahrenheit):
    return round((fahrenheit - 32) * 5/9, 2)

def fahrenheit_to_kelvin(fahrenheit):
    return round((fahrenheit + 459.67) * 5/9, 2)

def kelvin_to_celsius(kelvin):
    return round(kelvin - 273.15, 2)

def kelvin_to_fahrenheit(kelvin):
    return round(kelvin * 9/5 - 459.67, 2)

def main():
    temperature = float(input("Enter temperature value: "))
    unit = input("Enter original unit of measurement (Celsius, Fahrenheit, Kelvin): ").lower()

    celsius = None
    fahrenheit = None
    kelvin = None

    if unit == 'celsius':
        celsius = temperature
        fahrenheit = celsius_to_fahrenheit(celsius)
        kelvin = celsius_to_kelvin(celsius)
    elif unit == 'fahrenheit':
        fahrenheit = temperature
        celsius = fahrenheit_to_celsius(fahrenheit)
        kelvin = fahrenheit_to_kelvin(fahrenheit)
    elif unit == 'kelvin':
        kelvin = temperature
        celsius = kelvin_to_celsius(kelvin)
        fahrenheit = kelvin_to_fahrenheit(kelvin)
    else:
        print("Invalid unit of measurement")
        return

    print(f"{temperature} {unit.capitalize()} is equal to:")
    if celsius is not None:
        print(f"{celsius:.2f} Celsius")
    if fahrenheit is not None:
        print(f"{fahrenheit:.2f} Fahrenheit")
    if kelvin is not None:
        print(f"{kelvin:.2f} Kelvin")

if __name__ == "__main__":
    main()
