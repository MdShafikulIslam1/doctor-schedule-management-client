import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const serviceCardInfo = [
        {
            title:'Fluoride Treatment',
            details:'Fluoride treatment is particularly beneficial for individuals at higher risk of tooth decay, such as children, individuals with dry mouth conditions, people with a history of cavities, and those with braces or dental restorations',
            image:fluoride,
            bgColor:'bg-primary'
        },
        {
            title:'Cavity Filling',
            details:'f sdfskjdflsd;fls fsdf sdfks dfks dfsdf ksdf sdfk  ',
            image:cavity,
            bgColor:'bg-accent'
        },
        {
            title:'Teeth Whitening',
            details:'lsdflksdl fsdf sdfj f sdf sfks dflksmfsdf',
            image:whitening,
            bgColor:'bg-secondary'
        },
    ]
    return (
        <div className="text-center mt-12">
            <h1 className="text-3xl font-bold text-[#19D3AE] tracking-widest">Our Services</h1>
            <p className='text-lg font-medium mt-2 tracking-wide'>Services that We Provide</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    serviceCardInfo.map((card,i) => <ServiceCard key={i} card = {card}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;