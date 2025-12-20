# 1) დაწერეთ პროგრამირებაში დაშვებული შეცდომების ორი კატეგორია. კომენტარის სახით ჩამოწერეთ Error-ების ტიპები, რომლებიც განვიხილეთ.
# errors - bugs & exeptions (typeError, syntaxError, nameError,)

# 1) 2) შექმენით სია და სცადეთ დაბეჭდოთ ელემენტი, რომელიც სიის range-ის საზღვარს გარეთ იქნება. except-ში დაბეჭდეთ: “Such index doesn’t exist”

lst = [1,2,3,4,5,6]

try:
    print(lst[10])
except TypeError:
    print("Such index doesn’t exist")