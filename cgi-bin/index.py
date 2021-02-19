#!/usr/bin/env python3

import cgi
import cgitb

cgitb.enable()

data = cgi.FieldStorage()
taille = int(data.getvalue("taille"))

print(
    f"""
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Jeu de KIKI</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/style.css" type="text/css" media="screen" />
        <script src="/script.js"></script>
    </head>
    <body onload="bot_create({taille})">
    <table>
"""
)
for y in range(taille):
    print("<tr>")
    for x in range(taille):
        print(f"<td id={y}--{x} class='botBoard'></td>")
    print("</tr>")
print("</table><table>")

for y in range(taille):
    print("<tr>")
    for x in range(taille):
        print(f"<td id={y}_{x} class='playerBoard' onClick='colorize(this.id)'></td>")
    print("</tr>")

print("</table></body></html>")
