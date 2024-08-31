import Form from "./Form";
import backgroundImage from "../assets/jpg/beach.jpg";

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center h-screen -mt-20 flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Form />
    </section>
  );
}
