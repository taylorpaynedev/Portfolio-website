const express = require('express');
const router = new express.Router();


router.route('/music')
.get((req, res) => {
    console.log("Music page was accessed");
    res.render('music', {
        name: 'Taylor Payne',
        currentYear: new Date().getFullYear()
    });
});

router.route('/')   
.get((req,res)=>{
console.log("Home was accessed");
res.render('landing',{
        name: 'Taylor Payne',
        title1: 'Software Engineer',
        title2: 'Dog Lover',
        aboutme: 'Hello! I am a Software Engineer based in London, KY. I graduated from the University of Kentucky in 2024 with a Bachelor\'s degree in Computer Science.',
                experiences: [
                        {
                                company: 'Health Company',
                                title: 'Associate Software Engineer',
                                location: 'Remote',
                                timeframe: 'June 2024 - Present',
                                desc: 'Full Stack development of Route optimization and Scheduling Applications/Systems'
                        },
                        {
                                company: 'University of Kentucky',
                                title: 'Undergraduate Research',
                                location: 'Lexington, KY',
                                timeframe: 'Aug 2023 - December 2023',
                                desc: 'Researched Health Datasets and usages of Machine Learning to improve diagnosis accuracy and speed.'
                        }
                ],
        project1: {
                title: 'Collage Maker',
                desc: ' This application strives to automate the process of gathering photos, removing the background, and \
                placing images together all in one easy-to-use place. You can connect a Pinterest or Google Photos account to \
                import photos directly, or upload from your device. The app uses AI to remove backgrounds and an algorithm to place them optimally. \
                Built entirely with Python.',
        },
        project2: {
                title: 'Pokemon Decider Application',
                desc: 'This AI-powered application assists Pokemon trainers by recommending the optimal sixth Pokemon to add to their five-person team. \
                 It analyzes the strengths, weaknesses, and stats of the team to suggest the best fit. Utilizes a React frontend and  a Flask backend.'
        },
        project3: {
                title: 'Lost in Light',
                desc: 'Created for the 2022 64x64 Game Jam, Lost in Light is an atmospheric 3D exploration game built in Unity with C#. \
                Players guide a small, feline creature through a haunting low-resolution world, using stealth and optional combat mechanics to survive. \
                Features dynamic lighting, character dialogue, and original artwork - all assets handcrafted by me using Procreate and Blender.'
        },
        button1: {
                text: 'Resume',
                url: './pdf/TaylorPayneResume.pdf',
        },
        button2: {
                text: 'GitHub',
                url: 'https://github.com/taylorpaynedev'
        },
        button3: {
                text: 'LinkedIn',
                url: 'https://www.linkedin.com/in/taylorpaynedev/'
        },


})});


module.exports = router;