import appointment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor-small.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const MakeAppointment = () => {
  return (
    <section className="mt-36 rounded-lg" style={{ background: `url(${appointment})` }}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="lg:w-1/2 rounded-lg shadow-2xl -mt-32 hidden lg:block" />
          <div className="text-white">
            <h4 className="font-bold text-3xl text-primary mb-3">Appointment</h4>
            <h1 className="text-3xl font-bold">Make an appointment Today</h1>
            <p className="py-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
