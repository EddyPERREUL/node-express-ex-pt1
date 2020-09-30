import express from 'express'
import axios from 'axios'

/* 7. Ecrivez un script testServer.js qui se connectera aux différentes url de votre serveur et qui affichera dans la console les messages récupérés. testServer.js utilisera le package axios pour éffectuer les requêtes HTTP sur votre serveur express
 */

let home = await axios
    .get('http://localhost:7777/')
    .then((res) => console.log(res.data))

let aboutme = await axios
    .get('http://localhost:7777/aboutme')
    .then((res) => console.log(res.data))

let aboutyou = await axios
    .get('http://localhost:7777/aboutyou')
    .then((res) => console.log(res.data))

let age = await axios
    .get('http://localhost:7777/vote/12')
    .then((res) => console.log(res.data))

let palindrome = await axios
    .get('http://localhost:7777/palindromequi/ana')
    .then((res) => console.log(res.data))

let oddtest = await axios
    .get('http://localhost:7777/oddtest/5')
    .then((res) => console.log(res.data))
