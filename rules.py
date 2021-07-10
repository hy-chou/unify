from random import choice, choices


d0 = choice(["."])
d1 = choice(["\u07E1"])
lvl_parfait = [3, 4, 6, 7, 9]  # , 10, 12, 13, 15, 16, 18]
lvl = choice(lvl_parfait)
options = [str(i + 1) for i in range(lvl)]
history = []


def is_unified(queue):
    for i in range(len(queue) - 1):
        if queue[i] != queue[i + 1]:
            return False
    return True


def new_q():
    queue = choices([0, 1], k=lvl)
    while is_unified(queue):
        queue = choices([0, 1], k=lvl)
    return queue


def print_q(queue):
    num_bar = ""
    bit_bar = ""
    bar = ""
    for i in range(1, lvl + 1):
        bar += "---"
        num_bar += " " + str(i) + " "
        bit_bar += " " + (d1 if queue[i - 1] else d0) + " "
    print("\n")
    print(num_bar)
    print(bit_bar)
    print(bar, end="")


def get_input():
    msg = " {} : ".format(len(history) + 1)
    while True:
        num = input(msg)
        if num in options:
            return int(num)
        else:
            print("bad move...\n", end="")


def pick(queue, num):
    history.append(num)
    flip(queue, num)
    if num - 1 >= 1:
        flip(queue, num - 1)
    if num + 1 <= lvl:
        flip(queue, num + 1)


def flip(queue, num):
    queue[num - 1] = (0 if queue[num - 1] else 1)
