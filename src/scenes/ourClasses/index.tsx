import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";


const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Build strength and sculpt your physique with our Weight Training Classes. Led by expert instructors, these sessions focus on a variety of exercises to help you gain muscle mass and enhance overall strength. Elevate your fitness journey with targeted workouts designed for optimal results.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description: "Immerse yourself in the tranquility of our Yoga Classes. Designed to foster balance, flexibility, and mindfulness, these sessions provide a holistic approach to well-being. Join us for a rejuvenating experience that combines physical postures, breathwork, and relaxation techniques.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description: "Strengthen your core and define your abs with our Ab Core Classes. Led by experienced trainers, these sessions target your abdominal muscles through effective exercises. Embrace the challenge and achieve a toned midsection while improving overall stability and posture.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description: "Embark on an exhilarating fitness journey with our Adventure Classes. From outdoor activities to dynamic challenges, these sessions bring a sense of excitement to your workouts. Join us for an adventurous and fun-filled approach to staying active and healthy.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description: "Experience a diverse range of workouts with our Fitness Classes. Tailored to suit various fitness levels and preferences, these sessions offer a well-rounded approach to health and vitality. Join our community and explore the joy of staying fit in a motivating environment.",
    image: image5,
  },
  {
    name: "Training Classes",
    description: "Take your fitness to the next level with our Training Classes. Guided by knowledgeable instructors, these sessions provide targeted training to enhance your endurance, agility, and overall performance. Join us for a transformative training experience designed to unlock your full potential.",
    image: image6,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5" >
              Discover our diverse fitness classes on the
              site, designed to cater to all levels and preferences.
              From invigorating cardio to soothing yoga,
              our expert-led sessions offer a personalized and convenient
              way to achieve your fitness goals. Join us on the site for
              a transformative fitness experience tailored just for you.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default OurClasses;