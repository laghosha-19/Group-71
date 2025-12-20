# 2) დაწერეთ პროგრამირებაში დაშვებული შეცდომების ორი კატეგორია. კომენტარის სახით ჩამოწერეთ Error-ების ტიპები, რომლებიც განვიხილეთ.
# errors - bugs & exeprtions (typeError, syntaxError, nameError,)


# 3) მოიძიეთ ინფორმაცია ZeroDivisionError-ის შესახებ. რა შემთხვევაში ვაწყდებით მას პროგრამის გაშვების დროს?

# zeroDivisionError - ს ვაწყდებიტ იმ შემთხვევაში როდესაც ვცდილობთ რიცხვი გავყოთ ნულზე

# 5) მომხმარებელს შეაყვანინეთ ორი რიცხვი
# • და სცადეთ მათი გაყოფა
# • დაიჭირეთ:
# • ValueError
# • ZeroDivisionError
# თითოეული Exception-ის შემთხვევაში განსხვავებული შეტყობინება დაბეჭდეთ.

try:
    FirstNumber = int(input("Enter first Number"))
    SecondNumber= int(input("Enter second Number"))
    
    result = FirstNumber / SecondNumber 

except ValueError:
    print("Enter only numbers ")

except ZeroDivisionError:
    print("Please enter number grater than 0")
    
    
    
    
    
    
# 6) შექმენით Dictionary მომხმარებლის მონაცემებით.
# სცადეთ ისეთი key-ის მნიშვნელობის გამოტანა, რომელიც არ არსებობს. გამოიყენეთ Try/Except ბლოკი იმისთვის, რომ დაიჭიროთ KeyError.



User_Data = {
    "name":"Luka",
    "lastname":"laghoshvili",
    "age": 21,
    "language":"Georgian"
}

try:
    print(User_Data["Phone_number"])
except KeyError:
    print("key not found!")




# 7) მომხმარებელს შემოატანინეთ რიცხვი
# თუ ის ტექსტს შეიყვანს, დაბეჭდეთ:
# "Please Enter numbers only."


try:
    user_number = int(input("Enter Number!"))
    print(user_number)
except ValueError:
    print("Enter only numbers!")
