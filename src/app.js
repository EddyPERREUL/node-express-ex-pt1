import express from 'express'
import fs from 'fs'

/* Créer une programme app.js qui utilise express. Cette application devra tourner sur localhost et le port 7777. Avec votre navigateur en se connectant sur http://localhost:7777.
 */

const app = express()

const IP_Host = 'localhost'
const PORT = 7777

//1. message 'Exercices express partie 1' Pour cela il faudra créer une route qui manage le path '/'
app.get('/', (req, res) => {
    res.send(`<h1>Exercices express partie 1</h1>`)
})

//2. Ajouter une route /aboutme qui retournera à l'utilisateur des informations à propos de vous
app.get('/aboutme', (req, res) => {
    let content = fs.readFileSync('./aboutme.txt', 'utf-8')
    res.send(`
    <h1> about me </h1>
    <article> ${content} </article>
    `)
})

/*3. Ajouter une route /aboutyou qui retournera à l'utilisateur des informations le concernant comme:
son ip
son user agent, c'est la version de son navigateur. Cette information peut être extraite depuis la propriété headers de la requête de l'utilisateur
*/

app.get('/aboutyou', (req, res) => {
    let ipUsers = req.ip
    let userAgent = req.headers['user-agent']
    //let userAgent = req.headers['user-agent']
    res.send(`
    <h1>about you</h1>
    <p><strong>Votre adresse IP :</strong> ${ipUsers}</p>
    <p><strong>Votre navigateur :</strong> ${userAgent}</p>
    `)
})

/* 4. 
Ajouter une route /vote qui contient 1 paramètre qui correspondera à l'age. En fonction de l'age passé en paramètre on retournera les messages suivants dans le navigateur:

si age < 18, par example http://localhost:7777/age/17, on devra retourner 'trop jeune pour voter'
si age >= 18, par example http://localhost:7777/age/19, on devra retrouver 'Vous pouvez voter'
*/
app.get('/vote/:age', (req, res) => {
    let age = req.params.age
    if (!isNaN(age)) {
        if (age <= 18) {
            res.send(`Trop jeune pour voter`)
        } else {
            res.send(`Vous pouvez voter`)
        }
    }
    res.send(`Veuillez entrer un nombre`)
})

/* 5. Ajouter une route /palindromequi prendra un mot en paramètre. Un message devra être retourné à l'utilisateur si le mot est un palindrome. Vous pouvez vous inspirer de la correction de l'exercice: https://github.com/AbsoluteVirtueXI/alyra-courses/blob/master/exercices/node/correction-exercices-cmd/palindromeChecker.js
 */
app.get('/palindromequi/:word', (req, res) => {
    let word = req.params.word
    if (isNaN(word)) {
        if (word === word.split('').reverse().join('')) {
            res.send(`${word} est un palindrome`)
        } else {
            res.send(`${word} n'est pas un palindrome`)
        }
    }
    res.send(`Veuillez entrer un mot`)
})

/* 6. Ajouter une route /oddtest qui prendra un nombre en paramètre. Un message devra être retourné pour indiquer que le nombre passé en paramètre est pair ou impair

si le nombre est pair, par example http://localhost:7777/oddtest/2, on devra retourner 'pair'
si le nombre est impair, par example http://localhost:7777/oddtest/19, on devra retrouver 'impair'
Vous pouvez vous inspirer de la correction de l'exercice: https://github.com/AbsoluteVirtueXI/alyra-courses/blob/master/exercices/node/correction-exercices-cmd/oddTest.js
*/
app.get('/oddtest/:nb', (req, res) => {
    let nb = req.params.nb
    if (!isNaN(nb)) {
        if (nb % 2 === 0) {
            res.send(`${nb} est pair`)
        }
        res.send(`${nb} est impair`)
    }
    res.send(`Veuillez entrer un nombre`)
})

// function launch serveur
app.listen(PORT, IP_Host, () => {
    console.log(`server started at http://${IP_Host}:${PORT}`)
})
