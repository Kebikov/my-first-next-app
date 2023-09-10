import img from '../../source/img/1200.jpg';
import Image from 'next/image';

export const metadata = {
    title: 'About',
    description: 'Info about the company',
}

//-- About 
const About = () => {
    return(
        <div className="about">
            <h1 style={{marginBottom: '2000px'}}>About</h1>
            <Image 
                src={img} 
                alt='img' 
                width={300} 
                height={300} 
                className='some-class' 
                priority 
            />
        </div>
    )
}

export default About;