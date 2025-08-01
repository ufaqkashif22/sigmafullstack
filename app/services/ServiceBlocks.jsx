import img1 from "@/public/images/61232-web-design-lottie-animation.gif";
import img2 from "@/public/images/services2.gif";
import img3 from "@/public/images/services3.gif";
import img4 from "@/public/images/service4.gif";
import ServiceFeature from "./ServiceFeature";

const ServiceBlocks = () => {
  return (
    <div>
        <section className="px-6 md:px-20 bg-white">
            <ServiceFeature
              title="React Websites"
              text="When it comes to building user interfaces for web applications, nothing beats the accessibility, speed, and scalability made possible by the open-source JavaScript package React.JS. We offer scalable and dynamic user interfaces that are feature-rich and visually appealing."
              imageSrc={img1}
              reverse={false}
            />
            <ServiceFeature
              title="Custom Websites"
              text="We use a methodical, structured approach to assisting our clients in reaching their goals. Our secret is creating website designs that are geared towards the needs of the client. As part of a more comprehensive strategy, we always include digital marketing in the process of developing custom websites."
              imageSrc={img2}
              reverse={true}
            />
            <ServiceFeature
              title="WordPress"
              text="With its reputation as the best Content Management System (CMS), WordPress is the platform of choice for many website developers. No matter the scope of the project, we can create a high-quality WordPress site that will help you reach your business objectives and connect with your target audience."
              imageSrc={img3}
              reverse={false}
            />
            <ServiceFeature
              title="SEO"
              text="Consumers today rely heavily on a brand’s digital presence before making a purchase decision. Thus, we’ve integrated our expert SEO services to ensure that your business exhibits digital behavior that not just Google but also your customers like."
              imageSrc={img4}
              reverse={true}
            />
          </section>
    </div>
  )
}

export default ServiceBlocks
