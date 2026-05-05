import turtle

t = turtle.Turtle()
t.pensize(3)
t.speed(5)

def rectangle(w, h):
    for i in range(2):
        t.forward(w)
        t.right(90)
        t.forward(h)
        t.right(90)

t.penup()
t.goto(-120,120)
t.pendown()
t.fillcolor("black")
t.begin_fill()

t.goto(0,180)
t.goto(120,120)
t.goto(-120,120)

t.end_fill()

t.penup()
t.goto(-130,110)
t.pendown()
t.begin_fill()
rectangle(260,20)
t.end_fill()

x_positions = [-80, -20, 40]

for x in x_positions:
    t.penup()
    t.goto(x,110)
    t.pendown()
    t.begin_fill()
    rectangle(40,120)
    t.end_fill()

t.penup()
t.goto(-130,-10)
t.pendown()
t.begin_fill()
rectangle(260,30)
t.end_fill()

t.penup()
t.goto(0,140)
t.pendown()
t.color("black")
t.begin_fill()
t.circle(15)
t.end_fill()

t.penup()

turtle.done()