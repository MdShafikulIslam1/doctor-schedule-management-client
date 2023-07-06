import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:w-1/2 rounded-lg shadow-2xl"
        />
        <div>
          <span className="text-4xl font-bold ">Care your health getting our service  </span>
          <span></span>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
         <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
