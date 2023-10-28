import useIsMobile from "../../hooks/useIsMobile";
import Layout from "../../components/Layout";
import Image from "next/image";
import ProgrammingLanguagesList from "../../components/ProgrammingLanguagesList";
import TechnologiesList from "../../components/TechnologiesList";
import SoftwareList from "../../components/SoftwareList";

function Service() {
  const isMobile = useIsMobile();

  return (
    <Layout>
      <div
        id="aboutDiv"
        className="flex flex-col bg-[#1A1A1A] w-full  min-h-screen"
      >
        <div className="flex mt-20 ml-10 relative w-full">
          <h1 className="text-white text-3xl font-bold my-auto">
            Take a look at the services catalogue
          </h1>
        </div>
        <div className="flex my-10 mx-auto w-1/2 bg-[#454545] rounded-xl">
          <div className="grid grid-cols-2 gap-4 mx-auto py-10 w-5/6 h-3/4 my-auto">
            {renderGridItem(
              "/images/design.svg",
              "UI/UX Design",
              "Design beautiful and user-friendly interfaces"
            )}
            {renderGridItem(
              "/images/programming.svg",
              "Full Stack Web Development",
              "Develop and maintain efficient web solutions"
            )}
            {renderGridItem(
              "/images/server.svg",
              "Web Service Maintenance",
              "Keep your web services up and running"
            )}
            {renderGridItem(
              "/images/cybersecurity.svg",
              "Web Application Security",
              "Ensure your applications are secure"
            )}
          </div>
        </div>
        <div className="flex justify-end w-full -ml-10">
          <h1 className="text-white text-3xl font-bold my-auto">
            Look at what my tech stack
          </h1>
        </div>
        <div className="flex flex-col p-10 w-full">
          <p className="text-white m-4">
            Throughout the years, I have studied the following programming
            languages:
          </p>
          <ProgrammingLanguagesList />
          <p className="text-white m-4">
            Additionally, I have been introduced to different technologies,
            which I have been implementing in my everyday work:
          </p>
          <TechnologiesList />
          <p className="text-white m-4">
            Furthermore, throughout my University course, I have been taught
            different software to an introductory level:
          </p>
          <SoftwareList />
        </div>
      </div>
    </Layout>
  );
}

function renderGridItem(imgSrc, title, description) {
  return (
    <div className="flex flex-col hover:cursor-pointer bg-[#d1d1d1] p-4 hover:bg-[#ebebeb] transition-all duration-300 border-2 border-transparent hover:border-black">
      {" "}
      <Image src={imgSrc} alt={title} width={40} height={40} className="mb-4" />
      <h2 className="text-lg font-extrabold mb-2 flex-grow">{title}</h2>
      <p className="text-sm text-black font-semibold">{description}</p>
    </div>
  );
}

export default Service;
