from rules import *

print("""
---------GOAL---------
 SHOW / HIDE them all
---------GOAL---------""")

queue = new_q()
while True:
    print_q(queue)
    num = get_input()
    pick(queue, num)
    if is_unified(queue):
        print_q(queue)
        print("\n - == === UNIFIED === == -")
        quit()
