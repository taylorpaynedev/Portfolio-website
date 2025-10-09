const express = require('express');
const router = new express.Router();


router.route('/')   
.get((req,res)=>{
console.log("Home was accessed");
res.render('landing',{
        name: 'Taylor Payne',
        title1: 'UK',
        title2: 'Software Engineer',
        experience1: {
                company:  'Health Compnay',
                title:  'Associate Software Engineer',
                desc: ''
        },
        project1: {
                title: 'Collage Maker',
                desc: 'Started during the winter break of my Senior year at UK, I wanted to make an application \
                that allowed me to make collages of me and friends without having to do all the manual work that comes with \
                collages. This application strives to automate the process of gathering photos, removing the background, and \
                placing images together all in one easy-to-use place. Made completely in Python.',
        },
        project2: {
                title: 'Pokemon Decider Application',
                desc: 'This AI-powered application assists Pokemon trainers by recommending the optimal sixth Pokemon to add to their five-person team. \
                 It analyzes the strengths, weaknesses, and stats of the team to suggest the best fit. Made with React frontend and Flask backend.'
        },
        project3: {
                title: 'Lost in Light',
                desc: 'Created for the 2022 64x64 game jam on itch.io, Lost in Light is a 3D exploration game built in Unity with C#. \
                 Players control a small, feline creature navigating a low-resolution world while evading larger predators that lurk in the shadows. \
                The game features mechanics like stealth, optional combat, character dialogue, and exploration, with all assets created by me using Procreate and Blender.',
        },
        button1: {
                text: 'Resume',
                url: './pdf/TaylorPayneResume.pdf',
        },
        button2: {
                text: 'Transcript',
                url: './pdf/Transcript.pdf',
        },
        button3: {
                text: 'GitHub',
                url: 'https://github.com/mentaldropouts'
        },
        button4: {
                text: 'LinkedIn',
                url: 'https://www.linkedin.com/in/taylorpaynedev/'
        },


})});
router.route('/gallery')   
.get((req,res)=>{
console.log("gallery was accessed");
res.render('gallery');
});

router.route('/temp')   
.get((req,res)=>{
console.log("gallery was accessed");
res.render('temp');
});

module.exports = router;