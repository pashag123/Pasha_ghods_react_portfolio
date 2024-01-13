import Image from '../../assets/witcherme.jpg';
import './About.css'

function About() {
    return (
        <div style={styles.container}>
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
                <p style={styles.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus sit accusantium autem ab explicabo voluptatem soluta nemo facere, aliquam dicta voluptatum hic eaque, nam ipsa expedita quia. Cupiditate, tenetur.
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
        marginTop: '5rem',
        padding: '2rem',
        backgroundColor: '#f0f0f0',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.08)',
        borderRadius: '15px',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
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
        fontSize: '1.2rem',
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