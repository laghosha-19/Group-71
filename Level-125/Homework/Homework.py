class Employee:
    def __init__(self,name, salary):
        self.name  = name
        self.salary = salary
        
    def get_salary(self):
        return f"${self.salary}"
    
    
class Manager (Employee):
    def bonus_salary(self):
        return f"${int(self.salary +( self.salary * 0.2))}"
    


Employee1 = Employee ("Saba", 1200)
print(Employee1.get_salary())
    
Manager1 = Manager  ("Deme", 2400)
print(Manager1.get_salary())




class Vehicle:
    def __init__(self, brand, year ,color , horsepower):
        self.brand = brand
        self.year = year
        self.color= color
        self.horsepower = horsepower
        
    def drive(self):
        return f"{self.color} {self.brand} is going "
    
    def stop(self):
        return f"{self.color} {self.brand} is stopping "

class car(Vehicle):
    def drift(self):
        return  f"{self.year} {self.name} is drifting "

class Bike (Vehicle):
    def bouncing(self):
        return f"{self.color} {self.name} {self.brand} is bouncing"
    
    
class motorcycle(Vehicle):
    def Wheel (self):
        return f"{self.year} {self.brand} is wheeling "
    
vehicle1 = Vehicle("BMW", 2017, "Black", 1600)
print(vehicle1.drive())
print(vehicle1.stop())






