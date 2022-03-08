const express = require('express')

const port = 5000
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to TechBuzz Apps!')
})

app.get('/upcomingFeatures', (req, res) => {
    res.send(res.status(200).json({
        features: [
            {
                icon: 'share-outline',
                title: 'Sharing across different Notepads',
                description: 'You will be able to share Notes between this same app from among different devices.'
            },
            {
                icon: 'ios-happy-outline',
                title: 'Able to Draw',
                description: 'You will be able to Sketch on same Notes while different styles & colors.'
            },
            {
                icon: 'md-text-outline',
                title: 'Format single Word',
                description: 'You will be able to format even single word in Notes like sizing, coloring, shapes.'
            },
            {
                icon: 'videocam-outline',
                title: "Save Videos, Pdf's too",
                description: "You will be able to save and run videos and display pdf's too in your notes."
            },
            {
                icon: 'md-cog-sharp',
                title: 'Overall Formatings',
                description: 'You will get nice and good looking clickable links, websites and so much...'
            },
        ],
        status: 200
    }))
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})