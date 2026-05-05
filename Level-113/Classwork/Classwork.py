# items = [
#     ("product1", 11),
#     ("product2", 9),
#     ("product3", 5),
#     ("product4", 13),
#     ("product5", 6),
#     ("product3", 23),
# ]

# # filter()

# # list => which obly contains products with price less than 10 

# filtered = list(filter(lambda item: item[1] <= 10, items))

# min_item = (filtered[0])[1]

# print(min_item)



# for i in filtered:
#     if i[1] < min_item:
#         min_item == i[1]
        
# print(f"The lowest price item: {min_item}")






names = ["Nika", "Luka", "Gvanca","Lazare","Deme"]


filtered_names = list(filter(lambda name: (name[0]).upper() == "L", names))


print(filtered_names)




# Probable classwork
# food = ["Salad H","Burger J","Fries J","Watermelon H", "Shawarma J","Carrot H", "Apple H"]




items = [
    ("product1", 11),
    ("product2", 9),
    ("product3", 5),
    ("product4", 13),
    ("product5", 6),
    ("product3", 23),
]

# map


# list only contains prices!

prices = list(map(lambda item: item[1], items ))



print(prices)


# Filter ის გამოყენებით:
# 1) languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"] დატოვე მხოლოდ ის ენები რომლების სიგრძეც მეტია 5ზე.

languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"]

filtered_langs = list(filter(lambda item: len.item > 5, languages))

print(filtered_langs)



# 2) foods = ["salad H", "burger J" , "fish H","fries J","fruits H","nuts H"]
# სიიდან დატოვე მხოლოდ ჯანსაღი საკვები —> H


foods = ["salad H", "burger J" , "fish H","fries J","fruits H","nuts H"]

filtered_foods = list(filter(lambda food: food[-1], foods))

print(filtered_foods)



# Map ის გამოყენებით:
# 3) languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"] თითოეულ ელემენტს წინ დაუმატეთ "I study"


languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"]




# 4) minutes = [60, 120, 180, 240, 30] მოცემულია წუთები სიაში,map() ის გამოყენებით წუთები გადაიყვანეთ საათებში და დაპრინტეთ
# Hint: hours = minutes / 60

minutes = [60, 120, 180, 240, 30]

mapped_minutes = list(map(lambda min: min(minutes / 60), minutes))

print(mapped_minutes)


