# 💬
# Turtles Taufe
Verwendung von Variablen

---

### Variablen und ihre Verwendung

```python
name = "Turtoise"
print(name)
```

```sh
Turtoise
```
<!-- .element class="fragment" -->

```python
name = "Turtle"
print(name)
```
<!-- .element class="fragment" -->

```sh
Turtle
```
<!-- .element class="fragment" -->

---

![hallo = 9](images/variables.svg) <!-- .element: style="background:#505050; padding: 1rem" -->

- <!-- .element class="fragment" --> Variable als Behälter mit Namen, in dem Werte gespeichert werden können
-<!-- .element class="fragment" -->  diese Werte können später wieder mit dem Namen des Behälters abgerufen werden

Note:
- Werte:
	- Damit Werte von Variablennamen unterschieden werden können, müssen einige besonders geschrieben werden wie z.B. Zeichenketten in Anführungsstrichen `"`

---

## Regeln für Variablennamen

- <!-- .element class="fragment" --> Groß- und Kleinschreibung wird unterschieden
- <!-- .element class="fragment" --> Unterstrich `_` erlaubt
- <!-- .element class="fragment" --> Zahlen erlaubt (aber nicht als erstes Zeichen)
- <!-- .element class="fragment" --> Sonderzeichen und Umlaute sollte man vermeiden

---

# 📐
### Ein gleichseitiges Dreieck (1)

```python
forward(100)
left(120)
forward(100)
left(120)
forward(100)
```

---

# 📐
### Ein gleichseitiges Dreieck (2)

```python
laenge = 100
winkel = 120

forward(laenge)
left(winkel)
forward(laenge)
left(winkel)
forward(laenge)
```

---

# Aufgabe 4

---

## Variables Rechteck

Zeichnet ein Rechteck, bei dem wir ganz einfach die Länge und Breite ändern können.

1. <!-- .element class="fragment" --> Beginnt damit, ein Rechteck zu zeichnen. Es soll mit Farbe ausgefüllt sein.
2. <!-- .element class="fragment" --> Ersetzt Breiten- und Höhenangaben danach durch zwei Variablen.
3. <!-- .element class="fragment" --> Probiert unterschiedliche Breiten und Höhen aus.
4. <!-- .element class="fragment" --> Wenn ihr möchtet, könnt ihr nun noch die Farbe des Rechtecks verändern.

Note:
- weiterführende Aufgabe: mit anderen Werten für die Variablen herumexperimentieren, ein Rechteck zeichnen und danach ein genau doppelt so großes Rechteck darum herum zeichnen - wie könnte man das möglichst einfach lösen?

---

### Lösungsbeispiel

```python
from turtle import *
shape("turtle")

hoehe = 80
breite = 50
winkel = 90

color("indian red")
begin_fill()
forward(breite)
left(winkel)
forward(hoehe)
left(winkel)
forward(breite)
left(winkel)
forward(hoehe)
end_fill()
```
