import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';
const InfoCards = () => {
    const cardInfo = [
        {
            title:'Opening Hours',
            details:'11:00 am to 6:00 pm everyday.',
            image:clock,
            bgColor:'bg-primary'
        },
        {
            title:'Visit Our Location',
            details:'Mirpur ,Dhaka-1240',
            image:marker,
            bgColor:'bg-accent'
        },
        {
            title:'Contact with us',
            details:'+8801974297726',
            image:phone,
            bgColor:'bg-secondary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                cardInfo.map((card,i) => <InfoCard key={i} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;