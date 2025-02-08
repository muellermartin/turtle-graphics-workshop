# 🏳️‍🌈 Bunte 🏳️‍🌈 Schildkrötenparade

Von Farben und Formen

---

![](images/04-parade/simple-circle.png) <!-- .element style="height: 150px" -->

```python
from turtle import *

shape("turtle")

# Linienfarbe auf Blau aendern
color("blue")
forward(100)

# Linienbreite ändern
width(5)
circle(50)
```

---

## Farben

Farben haben englische Namen

<table>
  <tr>
    <td class="black">black</td>
    <td class="gray">gray</td>
    <td class="white">white</td>
  </tr>
  <tr>
    <td class="red">red</td>
    <td class="tomato">tomato</td>
    <td class="salmon">salmon</td>
  </tr>
  <tr>
    <td class="blue">blue</td>
    <td class="cornflowerblue">cornflower blue</td>
    <td class="deepskyblue">deep sky blue</td>
  </tr>
  <tr>
    <td class="green">green</td>
    <td class="forestgreen">forest green</td>
    <td class="limegreen">lime green</td>
  </tr>
  <tr>
    <td class="yellow">yellow</td>
    <td class="gold">gold</td>
    <td class="orange">orange</td>
  </tr>
</table>

---

## Linien

`width(`<span class="variable">Breite</span>`)`

Wobei <span class="variable">Breite</span> die Linienstärke in Pixeln angibt.

(Beispiel: `width(20)`).

---

## Kreise

`circle(`<span class="variable">Radius</span>`)`

Wobei <span class="variable">Radius</span> den Radius in Pixeln angibt.

(Beispiel: `circle(50)`)

- <!-- .element class="fragment" --> **Blickrichtung** der Schildkröte ist wichtig
- <!-- .element class="fragment" --> Kreis wird **gegen den Uhrzeigersinn** abgelaufen (oder im Uhrzeigersinn, wenn der Radius negativ ist)
- <!-- .element class="fragment" --> Schildkröte kommt am Startpunkt raus

---

# Aufgabe 2

---

# 🌳

## Einen Baum zeichnen

Erstellt einen Baum mit einem dicken braunen Stamm und einer runden grünen Baumkrone.

Note:
- Tipp: Achtet darauf, wohin die Schildkröte schaut, wenn sie den Kreis zu zeichnen beginnt.
- erweiterte Aufgabe: Tannenbaum zeichnen

---

## Lösungsbeispiel

```python
from turtle import *
shape("turtle")

# Stamm als breite braune Linie zeichnen
color("brown")
width(20)
left(90)
forward(100)

# Baumkrone als Kreis mit grünem Rand zeichnen
color("green")
right(90)
circle(100)
```
