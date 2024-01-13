import Image from '../../assets/witcherme.jpg';
import './About.css'

function About() {
    return (
        <>

            <div className="container text-center mt-5">
                <h1>
                    Pasha Ghods
                </h1>
                <p>
                    Full Stack Web Developer/Software Engineer
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus delectus sit accusantium autem ab explicabo voluptatem soluta nemo facere, aliquam dicta voluptatum hic eaque, nam ipsa expedita quia. Cupiditate, tenetur.
                </p>


                <img src={Image} className='rounded-circle img-fluid mt-3' />
            </div>




        </>
    );
}






export default About