# 🏃
# Lauf, Turtle!
Schleifen und Berechnungen

---

### Nochmal, bitte!

```python
# für jedes i von 1 bis unter 4:
for i in range(1, 4):
    print(i)
```
```
1
2
3
```
<!-- .element: class="fragment" -->

* <!-- .element class="fragment" --> Mit Schleifen können wir Dinge wiederholt tun.
* <!-- .element class="fragment" --> **Achtung**: Die Befehle in der Schleife müssen eingerückt werden.

---

### Beispiel: Eine einfache Schleife

```python
for i in range(1,3):
  forward(100)
  left(90)
```

1. <!-- .element: class="fragment" --> Der erste Schleifendurchlauf beginnt mit `i` = 1.
2. <!-- .element: class="fragment" --> Turtle geht 100 Schritte nach vorn.
3. <!-- .element: class="fragment" --> Turtle dreht sich nach links.
4. <!-- .element: class="fragment" --> Der zweite Schleifendurchlauf beginnt mit `i` = 2.
5. <!-- .element: class="fragment" --> Turtle geht 100 Schritte nach vorn.
6. <!-- .element: class="fragment" --> Turtle dreht sich nach links.
7. <!-- .element: class="fragment" --> Wir sind am Ende der Schleife angekommen.

---

### Mathematische Berechnungen

```python
>>> 12 + 3
15
>>> 4 - 6
-2
>>> 3 * 4
12
>>> 9 / 3
3
```

---

# Aufgabe 5

---

### Ein Achteck

Zeichnet ein Achteck.

1. <!-- .element: class="fragment" --> Schreibt eine Schleife, in der alle Kanten gezeichnet werden.
2. <!-- .element: class="fragment" --> Vergesst nicht, euch nach jedem Schleifendurchlauf im richtigen Winkel zu drehen.

> <!-- .element: class="fragment" --> **Tipp**: Der Winkel zwischen zwei Kanten beträgt *360 Grad ÷ Anzahl der Kanten*

---

### Lösungsbeispiel

```python
from turtle import *
shape("turtle")

groesse = 80
kantenzahl = 8

for i in range(1, kantenzahl + 1):
    left(360 / kantenzahl)
    forward(groesse)
```