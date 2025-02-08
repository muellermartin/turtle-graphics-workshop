# 🌊
# Ein Schildkrötensee

Flächen füllen

---

```python
# Form beginnen
begin_fill()

# Farbe setzen und zeichnen
color("blue")
forward(100)
left(90)
forward(50)
left(90)
forward(100)
left(90)
forward(50)

# Form schliessen
end_fill()
```

Note:
- was fehlt hier? (import und shape)

---

- Alle Linien der Fläche, die man farbig füllen möchte, müssen zwischen `begin_fill()` und `end_fill()` gezeichnet werden
- <!-- .element class="fragment" --> **Quizfrage: Was passiert bei folgendem Code?**

```python
begin_fill()
color("blue")
forward(100)
left(90)
forward(50)
end_fill()
```
<!-- .element class="fragment" -->

---

# Aufgabe 3

---

## Ein anderer Baum

# 🌳

1. <!-- .element class="fragment" --> Zeichnet noch einen Baum, diesmal aber mit einem Rechteck als Stamm.
2. <!-- .element class="fragment" --> Malt eine Baumkrone mit einem Kreis.
3. <!-- .element class="fragment" --> Füllt alle Flächen mit einer anderen Farbe.

Note:
- weiterführende Aufgabe: andere Farben ausprobieren, rechteckige Krone zeichnen, bunte Buchstaben (E, T, H) zeichne H) zeichnen

---

## Lösungsbeispiel

```python
from turtle import *
shape("turtle")

# Stamm als braun gefülltes Rechteck zeichnen
begin_fill()
color("brown")
forward(20)
left(90)
forward(100)
left(90)
forward(20)
end_fill()

# Zurückgehen, damit die Krone mittig auf dem Stamm sitzt
left(180)
forward(10)

# Krone als grün gefüllten Kreis zeichnen
begin_fill()
color("green")
circle(100)
end_fill()
```

Note:
- Trick beim Stamm: nur drei Linien zeichnen und dann automatische Verbindungslinie des Endpunktes mit dem Ausgangspunktes nutzen, wenn man end_fill() eingibt

