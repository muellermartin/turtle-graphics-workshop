# 🌲🏰🌲
# Labyrinth der Entscheidungen
Verzweigungen und Wahrheitswerte

---

## Schildkröte auf Wanderschaft

```python
from turtle import *
from random import randint

shape("turtle")
width(3)

while True:
    x = randint(1, 2)
    if x == 1:
        left(90)
        color("indian red")
    else:
        right(90)
        color("orange")
    forward(20)
 ```

---

# ✔️️ ✖️
## Wahrheitswerte

 - manchmal entscheiden Bedingungen über den Verlauf eines Programms
 - eine Bedingung ist entweder erfüllt (wahr, engl. <code class="variable">True</code>) oder nicht erfüllt (falsch, engl. <code class="variable">False</code>)

---

## Beispiele für Bedingungen

 - `3 == 3` <span class="fragment">(<code>True</code>)</span>
 - `2 + 2 != 4` <span class="fragment">(<code>False</code>)</span>
 - `3 > 7` <span class="fragment">(<code>False</code>)</span>
 - `42 <= 10 * 10` <span class="fragment">(<code>True</code>)</span>

---

> Wofür brauche ich Bedingungen?

## Fallunterscheidungen (1)

```python
turtle_groesse = 27 # cm

if turtle_groesse <= 30:
    print("Turtle wächst noch.")
```

---

## Fallunterscheidungen (2)

```python
turtle_groesse = 27 # cm

if turtle_groesse <= 30:
    print("Turtle wächst noch.")
else:
    print("Turtle ist ausgewachsen.")
```
**Achtung**: Die Befehle nach `if` und `else` müssen eingerückt werden.

---

## Fallunterscheidungen (3)

```python
turtle_groesse = 27 # cm

if turtle_groesse <= 30:
    print("Turtle wächst noch.")
elif turtle_groesse > 45:
    print("Turtle ist riesig!")
else:
    print("Turtle ist ausgewachsen.")
```

---

## Bedingte Wiederholung
- bei der **for-Schleife** muss man vorher genau wissen, wie oft etwas wiederholt werden muss
- bei der **while-Schleife** werden Befehle so lange ausgeführt, wie die Bedingung erfüllt ist

---

## Ich bin schon groß!

```python
turtle_groesse = 27 # cm

while turtle_groesse <= 30:
    print("Turtle wächst noch.")
    turtle_groesse = turtle_groesse + 1
print("Turtle ist ausgewachsen.")
```

```sh
Turtle wächst noch.
Turtle wächst noch.
Turtle wächst noch.
Turtle wächst noch.
Turtle ist ausgewachsen.
```
<!-- .element: class="fragment" -->

Note:
- hier noch mal auf den Unterschied hinweisen, den die Einrückung hier macht

---

# 🎲
## Zufallszahlen

Zahlen zufällig bestimmen wie beim Würfeln

```python
from random import randint

# eine Zufallszahl zwischen 1 und 6
randint(1,6)
```

---

# Aufgabe 6

---

### Bunte Fußstapfen

Dieses Mal erweitern wir das Beispiel von vorhin. Ihr findet den Code unter https://c0b.de/tsnuk-2019

1. <!-- .element: class="fragment" --> Füge **zwei weitere Richtungen** hinzu. Hierzu musst du aus insgesamt **vier Zufallszahlen** auswählen.
2. <!-- .element: class="fragment" -->Füge **weitere Fallunterscheidungen** für jede weitere Richtung hinzu.
3. <!-- .element: class="fragment" -->Verändere dabei die **Farbe**, die **Richtung** und den **Winkel**.

<!-- .element: class="fragment" --> Vielleicht kannst du ja auch den zurückgelegten Weg von der Zufallszahl abhängig machen.

---

### Lösungsbeispiel

```python
from turtle import *
from random import randint

shape("turtle")
speed(9)
width(10)

while True:
    x = randint(1, 4)
    if x == 1:
        left(10)
        color("indian red")
        forward(10)
    elif x == 2:
        right(30)
        color("orange")
        forward(20)
    elif x == 3:
        left(100)
        color("green")
        forward(50)
    else:
        right(200)
        color("blue")
        forward(100)
 ```

