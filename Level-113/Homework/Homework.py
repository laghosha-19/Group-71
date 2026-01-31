# 3) კომენტარის სახით დაწერეთ, თუ რაში ვიყენებთ map და filter ფუნქციებს. მოიყვანეთ თითო მაგალითი.


# filter ფუნქციით ჩვენ შეგვიძლია შევცვალოთ უკვე არსებულ სიაში რაიმე ხოლო map ფუნქციის გამოყენებით ჩვენ შეგვიძლია შევცვალოთ სია (მაგ:დავამატოთ რაიმე ელემენტი)
# filter example 
names = ["Nika", "Luka", "Gvanca","Lazare","Deme"]


filtered_names = list(filter(lambda name: (name[0]).upper() == "L", names))


print(filtered_names)

# map example
items = [
    ("product1", 11),
    ("product2", 9),
    ("product3", 5),
    ("product4", 13),
    ("product5", 6),
    ("product3", 23),
]

prices = list(map(lambda item: item[1], items ))



print(prices)

# 4) მოცემულია სია celsius = [0, 25, 100, -10, 37]
# გადააქციეთ Celsius-ები Kelvin-ში map-ის გამოყენებით.

# Hint:ფორმულა Kelvin = Celsius + 273


celsius = [0, 25, 100, -10, 37]

kelvined = list(map(lambda cel: cel + 273, celsius))

print(kelvined)


# 5) შექმენით რიცხვების სია. map-ის გამოყენებით შეინახეთ სიის თითოეული ელემენტი აყვანილი კვადრატში squared სიაში.


list_on_nums = [20,30,43,39,62,2]

squared = list(map(lambda s: s ** 2 , list_on_nums))

print(list_on_nums)


# 6) 5 მომხმარებელს შემოატანინეთ სახელი input-ით, შემდეგ კი შეინახეთ usernames სიაში.
# გამოიყენეთ map, იმისთვის რომ თითოეულ სახელს წინ დაუწეროთ "Welcome". განახლებული შედეგი შეინახეთ სიაში სახელწოდებით greet_users
# ???


# 
# 7) შექმენით Dict, მასში შეინახეთ key და value წყვილებად მანქანის დასახელება და მისი გამოშვების წელი. გამოიყენეთ filter, რომ old_years ცვლადში შეინახოთ მხოლოდ 2000-წლამდე გამოშვებული მანქანები (სიის სახით).


car_specs = {
    "Mercedes w140" : 1998,
    "Tesla Model 3": 2021,
    "Toyota Corolla": 1998,
    "BMW E46": 1999,
    "Mercedes C-Class": 2018
}

old_years = list(filter(lambda c: c[1] < 2000, car_specs))

print(old_years)

