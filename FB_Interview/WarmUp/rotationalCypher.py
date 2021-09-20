import math
# Add any extra import statements you may need here


# Add any helper functions you may need here
def rotateNumber(c, rotation_factor):
    # c=8 rot = 23 ==> 8 + 3 = 11 ==> 0 + (11 - 9) = 3
    ascii_sum = ord(c) + (rotation_factor % 10)
    if (ascii_sum) > ord("9"):
        return chr(0 + (ascii_sum - 10))
    else:
        return chr(ascii_sum)


def rotateUppercase(c, rotation_factor):
    ascii_sum = ord(c) + (rotation_factor % 26)
    if (ascii_sum) > ord("Z"):
        return chr(0 + (ascii_sum - 26))
    else:
        return chr(ascii_sum)


def rotateLowercase(c, rotation_factor):
    ascii_sum = ord(c) + (rotation_factor % 26)
    if (ascii_sum) > ord("z"):
        return chr(0 + (ascii_sum - 26))
    else:
        return chr(ascii_sum)


def rotationalCipher(input, rotation_factor):
    # Write your code here
    output = ""
    print(ord("0"), ord("9"))
    print(ord("A"), ord("Z"))
    print(ord("a"), ord("z"))
    for c in input:
        if ord("0") <= ord(c) <= ord("9"):
            output += rotateNumber(c, rotation_factor)
        elif ord("A") <= ord(c) <= ord("Z"):
            output += rotateUppercase(c, rotation_factor)
        elif ord("a") <= ord(c) <= ord("z"):
            output += rotateLowercase(c, rotation_factor)
        else:
            output += c
    print(output)
    return output


rotationalCipher("Zebra-493?", 0)
