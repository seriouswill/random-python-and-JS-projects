meal = 44.50
plus_tax = meal * 1.0675
plus_tip = plus_tax * 1.15
print(plus_tip)


# or another way

tax = 0.0675
tip = 0.15
meal = meal + (meal * tax)
total = meal + (meal * tip)
print(total)
