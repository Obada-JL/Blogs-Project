import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../AppContext";
import img2 from "./imgs/Image (2).png";
function DetailsPage() {
  const { category } = useParams();
  const { Blogs } = useContext(AuthContext);
  let currentBlog;
  Blogs.forEach((Blog) => {
    if (Blog.category === category) {
      currentBlog = Blog;
    } else {
    }
  });
  return (
    <div className="pb-5" style={{ width: "85%", marginLeft: "10%" }}>
      <div
        className="text-primary mt-2 p-2 d-inline rounded h6"
        style={{ background: "rgba(75, 107, 251, 0.2)" }}
      >
        {currentBlog.category}
      </div>
      <div className="h1 p-1 mt-3">
        The Impact of Technology on the Workplace: How Technology is Changing
      </div>
      <div className="d-flex gap-3 align-items-center h5 mt-3 mb-3">
        <img src={currentBlog.person} alt="" />
        <p
          className=" align-items-center d-flex"
          style={{ marginBlockEnd: " 0" }}
        >
          {currentBlog.name}
        </p>
      </div>
      <div>
        <img src={currentBlog.img} alt="" style={{ width: "100%" }} />
      </div>
      <p className="mt-5" style={{ fontSize: "17px", lineHeight: "1.70" }}>
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you don't plan and prepare adequately. In this blog article, we'll
        explore tips and tricks for a memorable journey and how to make the most
        of your travels. One of the most rewarding aspects of traveling is
        immersing yourself in the local culture and customs. This includes
        trying local cuisine, attending cultural events and festivals, and
        interacting with locals. Learning a few phrases in the local language
        can also go a long way in making connections and showing respect.
      </p>
      <div className="mt-3">
        <h1>Research Your Destination</h1>
        <p className="mt-2" style={{ fontSize: "17px", lineHeight: "1.70" }}>
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non
          tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper
          sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing
          vitae. Viverra adipiscing at in tellus.
        </p>
      </div>
      <div className="mt-3">
        <h1>Plan Your Itinerary</h1>
        <p className="mt-2" style={{ fontSize: "17px", lineHeight: "1.70" }}>
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey. Vitae sapien pellentesque habitant morbi
          tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper
          sit amet risus nullam eget felis. Tincidunt arcu non sodales neque
          sodales ut etiam sit amet.
        </p>
      </div>
      <div
        className="d-flex align-items-center rounded"
        style={{
          background:
            " linear-gradient(0deg, #E8E8EA, #E8E8EA),linear-gradient(0deg, #F6F6F7, #F6F6F7)",
        }}
      >
        <em className="p-5" style={{ fontSize: "20px", textAlign: "center" }}>
          “ Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy. ”
        </em>
      </div>
      <div className=" mt-5">
        <img src={img2} style={{ width: "100%" }} />
      </div>
      <div
        style={{ background: " #E8E8EA" }}
        className="p-3 d-flex flex-column align-items-center justify-content-center mt-5 rounded"
      >
        <div>Advertisement</div>
        <div style={{ fontWeight: "bold" }}>You can place ads</div>
        <div>750x100</div>
      </div>
      <div className="mt-5">
        <h1>Pack Lightly and Smartly</h1>
        <p className="mt-2" style={{ fontSize: "17px", lineHeight: "1.70" }}>
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </p>
      </div>
      <div className="mt-3">
        <h1>Stay Safe and Healthy</h1>
        <p className="mt-2" style={{ fontSize: "17px", lineHeight: "1.70" }}>
          Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy.
          This includes researching any required vaccinations or medications,
          staying hydrated, washing your hands frequently, and using sunscreen
          and insect repellent. It's also essential to keep your valuables safe
          and secure and to be aware of your surroundings at all times.
        </p>
      </div>{" "}
      <div className="mt-3">
        <h1>Immerse Yourself in the Local Culture</h1>
        <p className="mt-2" style={{ fontSize: "17px", lineHeight: "1.70" }}>
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
      </div>{" "}
      <div className="mt-3">
        <h1>Capture Memories</h1>
        <p className="mt-2" style={{ fontSize: "17px", lineHeight: "1.70" }}>
          Finally, don't forget to capture memories of your journey. Whether
          it's through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it's also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.
        </p>
      </div>{" "}
      <div className="mt-3">
        <h1>Conclusion:</h1>
        <p className="mt-2" style={{ fontSize: "17px", lineHeight: "1.70" }}>
          Traveling is an art form that requires a blend of planning,
          preparation, and spontaneity. By following these tips and tricks, you
          can make the most of your journey and create memories that last a
          lifetime. So pack your bags, embrace the adventure, and enjoy the
          ride.
        </p>
      </div>
    </div>
  );
}
export default DetailsPage;
