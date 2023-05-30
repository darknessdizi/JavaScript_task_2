import time

def primeNumbers (number):
    arrayElements = []
    for i in range(2, number + 2):
        for y in range(2, i + 1):
            if i == y:
                arrayElements.append(i)
            elif i % y == 0:
                break
    return arrayElements


start = time.time()
print(primeNumbers(100000))
end = time.time()
print('Затраченное время: ', round((end - start) * 10**3, 5), 'ms')