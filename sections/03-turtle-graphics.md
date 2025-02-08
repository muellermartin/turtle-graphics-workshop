# 🐢
# Turtle Graphics

Einführung in die Schildkrötenwelt

---

# 🖌

- Turtle: engl. für **Schildkröte**
- <!-- .element: class="fragment" -->vorhandener Baustein in Python
- <!-- .element: class="fragment" -->Prinzip eines **programmierbaren Pinsels**: es wird eine Schildkröte bewegt, die Linien zieht


Note:
- Vorteil: man kann mit wenig Aufwand Zeichenschritte sehr oft hintereinander wiederholen lassen (z. B. fünzig Kreise zeichnen)
- Ursprung: vor vierzig Jahren hat ein Mathematiker sich diese Grafiken ausgedacht, wahrscheinlich weil es toll fand wie sich Schildkröten bewegen und wie sie dabei Spuren im Sand hinterlassen

---

## Lasst die Schildkröten frei!

```python
# Den Baustein für Schildkröten laden
from turtle import *

# Aussehen festlegen
shape("turtle")
```

Note:
- Diese Befehle werden immer gebraucht, um mit der Schildkröte malen zu können
- Raute, "Gatter", "Gartenzaun": Leitet Kommentar ein (alls dahinter wird vom Compiler ignoriert)

---

## Die leere Schildkrötenwelt

![](images/09-extras/turtle_world.png) <!-- .element style="max-height: 500px" -->

---

## Beispiel

```
# Schildkroetenwelt laden
from turtle import *

# Aussehen festlegen
shape("turtle")

# 100 Schritte nach vorn gehen
forward(100)
```

---

## Befehle (1)

- <!-- .element class="fragment" --> 50 Schritte geradeaus gehen:
  `forward(50)`
- <!-- .element class="fragment" --> Um 90° nach links drehen:
  `left(90)`
- <!-- .element class="fragment" --> Um 90° nach rechts drehen:
  `right(90)`

Note:
- Zahlen bei forward() haben andere Bedeutung (Semantik) als bei left() und right()

---

## Achtung, Drehwurm!

<iframe src="includes/angle-demo" width="400px" height="400px"></iframe>

Note:
- Wenn die interaktive Grafik nicht lädt: Seite neuladen!

---

# Aufgabe 1

---

## Ein Quadrat malen

1. <!-- .element class="fragment" --> Verwendet die Befehle, um die Welt für die Schildkröte zu laden:

```python
from turtle import *

shape("turtle")
```
<!-- .element class="fragment" -->

2. <!-- .element class="fragment" --> Nutzt die Befehle `forward(`<span class="variable">Schritte</span>`)`, `left(`<span class="variable">Schritte</span>`)` oder `right(`<span class="variable">Schritte</span>`)`, um ein Quadrat zu zeichnen.
   Ersetzt dabei <span class="variable">Schritte</span> durch eine beliebige Zahl.

Note:
- was ist ein Quadrat? Was macht ein Quadrat aus?
- weiterführende Aufgabe: Rechteck, mehrere Vierecke ineinander verschachteln (immer wieder zu home() zurückkehren und verschiedene Seitenlängen ausprobieren)

---

## Lösungsbeispiel

```python
from turtle import *

shape("turtle")

forward(100)
left(90)
forward(100)
left(90)
forward(100)
left(90)
forward(100)
```

Note:
- Frage: Was verändert sich, wenn man right(90) statt left(90) verwendet?

