import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import emailjs from '@emailjs/browser';

import {
    FiArrowUpRight,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiMapPin,
    FiDownload,
    FiExternalLink,
    FiMenu,
    FiX,
    FiCode,
    FiDatabase,
    FiCpu,
    FiLayers,
    FiSend
} from 'react-icons/fi';


// =========================
// PROJECTS
// =========================

const projects = [
    {
        title: 'Student Management System',
        tag: 'Featured · Live',
        desc: 'A full-stack web application for managing student records with CRUD operations, REST API integration and PostgreSQL cloud database.',
        stack: ['React.js', 'FastAPI', 'PostgreSQL', 'REST API'],
        github: 'https://github.com/kajaljtiwari/student-management',
        demo: 'https://student-management-frontend-ecru.vercel.app/',
        icon: '🎓',
        live: true
    },

    {
        title: 'AI Chatbot',
        tag: 'AI · GitHub',
        desc: 'An AI-powered chatbot built with Python and Streamlit, integrating the Groq API for interactive conversational responses.',
        stack: ['Python', 'Streamlit', 'Groq API'],
        github: 'https://github.com/kajaljtiwari/Streamlit-AI-ChatBot',
        demo: 'https://kajaljtiwari-ai-chatbot.streamlit.app/',
        icon: '🤖',
        live: true
    },

    {
        title: 'Weather App',
        tag: 'API · GitHub',
        desc: 'A weather application that uses the OpenWeather API to display real-time weather information including temperature, humidity and wind speed.',
        stack: ['Python', 'Streamlit', 'OpenWeather API'],
        github: 'https://github.com/kajaljtiwari/weather-app',
        demo: 'https://kajaljtiwari-weather-app.streamlit.app/',
        icon: '☁️',
        live: true
    },

    {
        title: 'PyLearn Learning Platform',
        tag: 'Web Application · GitHub',
        desc: 'A Python learning platform featuring user authentication, course management, topic categories, quizzes and a learning-oriented user experience.',
        stack: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
        github: 'https://github.com/kajaljtiwari/PyLearn-A-Learning-Platform-for-Python-Programming',
        demo: '#',
        icon: '🐍',
        live: false
    },

    {
        title: 'Blood Centre Management System',
        tag: 'Academic · GitHub',
        desc: 'A database-driven web application for managing blood donors and blood inventory with CRUD operations.',
        stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/kajaljtiwari/blood-centre-management-system-v2',
        demo: '#',
        icon: '🩸',
        live: false
    }
];


// =========================
// SKILLS
// =========================

const skills = [
    ['Python', 'Programming'],
    ['JavaScript', 'Programming'],
    ['Java', 'Programming'],
    ['PHP', 'Programming'],

    ['React.js', 'Frontend'],
    ['HTML & CSS', 'Frontend'],
    ['Bootstrap', 'Frontend'],

    ['FastAPI', 'Backend'],
    ['Node.js / Express.js', 'Backend'],
    ['REST APIs', 'Backend'],

    ['PostgreSQL', 'Database'],
    ['MySQL', 'Database'],
    ['MongoDB', 'Database'],

    ['Streamlit', 'Framework'],
    ['Git & GitHub', 'Tools'],
    ['Postman', 'Tools'],

    ['AI API Integration', 'AI / Apps']
];


// =========================
// APP
// =========================

function App() {

    const [dark, setDark] = useState(false);

    const [open, setOpen] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });


    // =========================
    // DARK MODE
    // =========================

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
    }, [dark]);


    // =========================
    // SMOOTH SCROLL
    // =========================

    const go = (id) => {

        document
            .getElementById(id)
            ?.scrollIntoView({
                behavior: 'smooth'
            });

        setOpen(false);
    };


    // =========================
    // CONTACT FORM
    // =========================

    const submit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            alert('Message sent successfully!');

            setForm({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('Email sending failed:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    return (

        <div className="site">


            {/* =========================
                NAVBAR
            ========================= */}

            <nav className="navbar navbar-expand-lg fixed-top nav-glass">

                <div className="container">

                    <button
                        className="brand btn p-0"
                        onClick={() => go('home')}
                    >
                        KjT<span>.</span>
                    </button>


                    <div
                        className={`nav-links ${open ? 'show' : ''}`}
                    >

                        {[
                            ['home', 'Home'],
                            ['about', 'About'],
                            ['skills', 'Skills'],
                            ['projects', 'Projects'],
                            ['contact', 'Contact']
                        ].map(([id, title]) => (

                            <button
                                key={id}
                                onClick={() => go(id)}
                            >
                                {title}
                            </button>

                        ))}


                        <button
                            className="theme"
                            onClick={() => setDark(!dark)}
                            aria-label="Toggle theme"
                        >
                            {dark ? '☀' : '☾'}
                        </button>

                    </div>


                    <button
                        className="mobile-menu"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <FiX /> : <FiMenu />}
                    </button>

                </div>

            </nav>



            <main>


                {/* =========================
                    HERO SECTION
                ========================= */}

                <section
                    id="home"
                    className="hero"
                >

                    <div className="container">

                        <div className="row align-items-center g-5">


                            <div className="col-lg-7">


                                <div className="eyebrow">
                                    MCA STUDENT
                                </div>


                                <h1>

                                    Hi, I'm{' '}

                                    <span>
                                        Kajal Tiwari.
                                    </span>

                                    <br />

                                    I build practical web applications
                                    and software solutions.

                                </h1>


                                <p className="hero-copy">

                                    I’m an MCA student and aspiring software
                                    developer with hands-on experience in
                                    Python, JavaScript, React.js, FastAPI,
                                    PHP, REST APIs, and databases.

                                    I enjoy building practical,
                                    user-focused applications and learning
                                    new technologies to solve real-world
                                    problems.

                                </p>


                                <div className="hero-actions">

                                    <button
                                        className="btn-primary-custom"
                                        onClick={() => go('projects')}
                                    >

                                        View My Work

                                        <FiArrowUpRight />

                                    </button>


                                    <a
                                        className="btn-outline-custom"
                                        href="/Kajal-Tiwari-Resume.pdf"
                                        download
                                    >

                                        Download Resume

                                        <FiDownload />

                                    </a>

                                </div>


                                <div className="socials">

                                    <a
                                        href="https://github.com/kajaljtiwari"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="GitHub"
                                    >
                                        <FiGithub />
                                    </a>


                                    <a
                                        href="https://linkedin.com/in/kajaljtiwari310"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="LinkedIn"
                                    >
                                        <FiLinkedin />
                                    </a>


                                    <a
                                        href="#contact"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            go('contact');
                                        }}
                                        aria-label="Contact me"
                                    >

                                        <FiMail />
                                    </a>

                                </div>

                            </div>



                            {/* HERO CODE CARD */}

                            <div className="col-lg-5">

                                <div className="hero-card">

                                    <div className="code-top">

                                        <span></span>
                                        <span></span>
                                        <span></span>

                                        <b>
                                            developer.js
                                        </b>

                                    </div>


                                    <pre>
                                        {`const kajal = {
  role: "Software Developer",
  stack: [
    "Python",
    "React",
    "FastAPI",
    "PostgreSQL"
  ],
  focus: "Practical solutions",
  learning: true
};`}
                                    </pre>


                                    <div className="status">

                                        <i></i>

                                        Open to opportunities

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>



                {/* =========================
                    ABOUT SECTION
                ========================= */}

                <section
                    id="about"
                    className="section"
                >

                    <div className="container">


                        <div className="section-head">

                            <span>
                                01 — ABOUT
                            </span>

                            <h2>
                                Turning learning into{' '}
                                <em>
                                    real projects.
                                </em>
                            </h2>

                        </div>



                        <div className="row g-5">


                            <div className="col-lg-7">

                                <p className="lead">

                                    I'm an MCA student passionate about
                                    building useful software and learning
                                    how technology can solve real-world
                                    problems.

                                </p>


                                <p>

                                    My development journey spans frontend
                                    interfaces, backend APIs, databases
                                    and AI-powered applications.

                                    I enjoy taking an idea from a simple
                                    requirement to a working application
                                    and continuously improving it through
                                    debugging and practical experimentation.

                                </p>


                                <p>

                                    I’m continuously developing my technical
                                    skills through projects, coursework and
                                    hands-on practice, with the goal of
                                    growing into a strong software developer.

                                </p>

                            </div>



                            <div className="col-lg-5">


                                <div className="fact-grid">

                                    <div>

                                        <strong>
                                            MCA
                                        </strong>

                                        <small>
                                            Currently pursuing
                                        </small>

                                    </div>


                                    <div>

                                        <strong>
                                            Full Stack
                                        </strong>

                                        <small>
                                            React + FastAPI
                                        </small>

                                    </div>


                                    <div>

                                        <strong>
                                            APIs
                                        </strong>

                                        <small>
                                            REST integration
                                        </small>

                                    </div>


                                    <div>

                                        <strong>
                                            AI
                                        </strong>

                                        <small>
                                            Practical applications
                                        </small>

                                    </div>

                                </div>


                                <div className="location">

                                    <FiMapPin />

                                    Amravati, Maharashtra, India

                                </div>

                            </div>

                        </div>

                    </div>

                </section>



                {/* =========================
                    SKILLS SECTION
                ========================= */}

                <section
                    id="skills"
                    className="section section-alt"
                >

                    <div className="container">


                        <div className="section-head">

                            <span>
                                02 — SKILLS
                            </span>

                            <h2>

                                Tools I use to{' '}

                                <em>
                                    build.
                                </em>

                            </h2>

                        </div>



                        <div className="skill-grid">

                            {skills.map(([skill, category]) => (

                                <div
                                    className="skill"
                                    key={skill}
                                >


                                    <div className="skill-icon">

                                        {category === 'Programming'
                                            ? <FiCode />
                                            : category === 'Database'
                                                ? <FiDatabase />
                                                : category === 'AI / Apps'
                                                    ? <FiCpu />
                                                    : <FiLayers />
                                        }

                                    </div>


                                    <div>

                                        <strong>
                                            {skill}
                                        </strong>

                                        <small>
                                            {category}
                                        </small>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>



                {/* =========================
                    PROJECTS SECTION
                ========================= */}

                <section
                    id="projects"
                    className="section"
                >

                    <div className="container">


                        <div className="section-head">

                            <span>
                                03 — PROJECTS
                            </span>

                            <h2>

                                Selected work &{' '}

                                <em>
                                    experiments.
                                </em>

                            </h2>


                            <p>

                                A collection of academic and personal
                                projects built while learning and applying
                                software development technologies.

                            </p>

                        </div>



                        <div className="project-grid">

                            {projects.map((project, index) => (

                                <article
                                    className={`project ${index === 0
                                            ? 'featured'
                                            : ''
                                        }`}
                                    key={project.title}
                                >


                                    <div className="project-visual">

                                        <span className="project-emoji">
                                            {project.icon}
                                        </span>


                                        <span className="project-tag">
                                            {project.tag}
                                        </span>

                                    </div>



                                    <div className="project-body">


                                        <h3>
                                            {project.title}
                                        </h3>


                                        <p>
                                            {project.desc}
                                        </p>


                                        <div className="chips">

                                            {project.stack.map(
                                                technology => (

                                                    <span
                                                        key={technology}
                                                    >
                                                        {technology}
                                                    </span>

                                                )
                                            )}

                                        </div>



                                        <div className="project-links">


                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                            >

                                                <FiGithub />

                                                GitHub

                                            </a>



                                            {project.live ? (

                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >

                                                    <FiExternalLink />

                                                    Live Demo

                                                </a>

                                            ) : (

                                                <span className="repo-note">

                                                    GitHub Repository

                                                </span>

                                            )}

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    </div>

                </section>



                {/* =========================
                    EDUCATION SECTION
                ========================= */}

                <section className="section journey">

                    <div className="container">


                        <div className="section-head">

                            <span>
                                04 — EDUCATION
                            </span>

                            <h2>

                                My learning{' '}

                                <em>
                                    journey.
                                </em>

                            </h2>

                        </div>



                        <div className="timeline">


                            <div className="timeline-item">

                                <b>
                                    2025 — 2027
                                </b>

                                <h3>
                                    Master of Computer Applications (MCA)
                                </h3>

                                <p>
                                    P. R. Pote Patil College of Engineering
                                    and Management, Amravati
                                </p>

                            </div>



                            <div className="timeline-item">

                                <b>
                                    2022 — 2025
                                </b>

                                <h3>
                                    Bachelor of Computer Applications (BCA)
                                </h3>

                                <p>
                                    Smt. Radhadevi Goenka College for Women,
                                    Akola
                                </p>

                            </div>

                        </div>

                    </div>

                </section>



                {/* =========================
                    CONTACT SECTION
                ========================= */}

                <section
                    id="contact"
                    className="section contact"
                >

                    <div className="container">


                        <div className="contact-box">


                            <div>


                                <span className="eyebrow">
                                    05 — CONTACT
                                </span>


                                <h2>

                                    Let's build something{' '}

                                    <em>
                                        useful.
                                    </em>

                                </h2>


                                <p>

                                    I'm open to internship opportunities,
                                    entry-level software development roles,
                                    practical development work and
                                    collaborations.

                                </p>
<div className="contact-list">

    <a
        href="mailto:kajaljtiwari.310@gmail.com"
        onClick={() => {
            window.location.href = "mailto:kajaljtiwari.310@gmail.com";
        }}
    >
        <FiMail />
        <span>kajaljtiwari.310@gmail.com</span>
    </a>

    <a
        href="https://www.google.com/maps/search/?api=1&query=Amravati,Maharashtra,India"
        target="_blank"
        rel="noreferrer"
    >
        <FiMapPin />
        <span>Amravati, Maharashtra</span>
    </a>

</div>
                            </div>



                            <form onSubmit={submit}>


                                <input
                                    required
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            name: e.target.value
                                        })
                                    }
                                />


                                <input
                                    required
                                    type="email"
                                    placeholder="Your email"
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            email: e.target.value
                                        })
                                    }
                                />


                                <textarea
                                    required
                                    rows="5"
                                    placeholder="Tell me about the opportunity..."
                                    value={form.message}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            message: e.target.value
                                        })
                                    }
                                />


                                <button
                                    className="btn-primary-custom"
                                    type="submit"
                                >

                                    Send Message

                                    <FiSend />

                                </button>


                            </form>

                        </div>

                    </div>

                </section>

            </main>



            {/* =========================
                FOOTER
            ========================= */}

            <footer>

                <div className="container">

                    <span>
                        © {new Date().getFullYear()} Kajal Tiwari
                    </span>

                    <span>
                        Built with React · Designed for impact
                    </span>

                </div>

            </footer>

        </div>
    );
}


createRoot(
    document.getElementById('root')
).render(
    <App />
);