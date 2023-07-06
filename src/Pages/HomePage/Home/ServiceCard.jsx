/* eslint-disable react/prop-types */
const ServiceCard = ({card}) => {
    const {image,title,details} = card
  return (
    <div className="card w-full shadow-xl mt-4">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt=""
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
