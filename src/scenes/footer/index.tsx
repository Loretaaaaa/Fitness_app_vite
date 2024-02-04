
import Logo from '@/assets/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="Logo" src={Logo} />
          <p className="my-5">
            Evogym, your fitness destination for transformation and innovation.
            Experience top-notch facilities, personalized programs,
            and a thriving community. Join us on the journey to a stronger,
            healthier you.</p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">More...</h4>
          <p className="my-5">Explore our classes designed for your fitness journey.</p>
          <p className="my-5">Stay informed about promotions.</p>
          <p className="my-5">Connect with fellow fitness enthusiasts</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Visit our gym location or send us an email. We're here to help you on your fitness journey and provide the support you need.</p>
          <p>(+374)100-200</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer;