
import Image from '../../assets/animatedMe.jpg';
import './About.css'

function About() {
    return (
        <div className="about" style={styles.container}>
            <div style={styles.imageContainer}>
                <img src={Image} style={styles.image} alt="Pasha Ghods" />
            </div>
            <div style={styles.textContainer}>
                <h1 style={styles.header}>
                    Pasha Ghods
                </h1>
                <h2 style={styles.subtitle}>
                    Full Stack Web Developer/Software Engineer
                </h2>
                <h3 style={styles.subtitle}>
                    HTML5, CSS3, JavaScript, NodeJS, MySQL, React
                </h3>
                <p style={styles.paragraph}>
                    Born and raised in Los Angeles, I have embraced the dynamic and innovative spirit of the city in my journey as a Full Stack Web Developer and Software Engineer. My technical proficiency spans HTML5, CSS3, JavaScript, NodeJS, MySQL, and React, equipping me to craft responsive and user-focused digital solutions. Driven by a passion for problem-solving and continuous learning, I explore cutting-edge technologies to refine my skills. With a keen eye for detail and a flair for creativity, I am enthusiastic about collaborating on projects that require fresh perspectives and robust execution. As I step into the tech industry, I am excited to bring my unique insights and make a meaningful impact.
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '2rem',
        backgroundColor: 'darkgrey',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)',
        borderRadius: '15px',
        margin: "0 25px",
        marginTop: "2.5rem",
        marginBottom: "1rem"

    },

    imageContainer: {
        flexBasis: '40%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flexBasis: '60%',
        textAlign: 'left',
    },
    header: {
        color: '#2c3e50',
        fontSize: '2.8rem',
        marginBottom: '1rem',
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#34495e',
        fontSize: '1.8rem',
        fontWeight: '300',
        marginBottom: '2rem',
    },
    paragraph: {
        color: '#2c3e50',
        fontSize: '1rem',
        lineHeight: '1.8',
        textAlign: 'justify',
    },
    image: {
        borderRadius: '50%',
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        border: '5px solid #34495e',
    }
};







export default About