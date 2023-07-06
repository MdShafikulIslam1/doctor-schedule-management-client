/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const InfoCard = ({card}) => {
  const {title,bgColor,image,details} = card;
  return (
    <div className={`card card-side shadow-xl ${bgColor} p-4 text-white`}>
      <figure>
        <img src={image} alt="" className="w-full " />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default InfoCard;
