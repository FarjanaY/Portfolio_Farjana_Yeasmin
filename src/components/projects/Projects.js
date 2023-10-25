import React from "react";
import Title from "../layouts/Title";
import doctorProject from "../../assets/images/projects/smart_doc_projects.jpg";
import covidProject from "../../assets/images/projects/covid-19_project.jpg";
import todoProject from "../../assets/images/projects/todo_app_project .jpg";
//import magazineProject from "../../assets/images/projects/tech_magazine_project.jpg";
import exerciseTracker from "../../assets/images/projects/exerciseTracker.PNG";
import momentsChronicles from "../../assets/images/projects/moments_chronicles.PNG";
//import chatProject from '../../assets/images/projects/chat_projects.jpg'
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-5 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="My Projects" des="___What I have done___" />
      </div>
      <div className="grid grid-cols-1 pt-5 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-6">
        <ProjectsCard
          title="Moments Chronicles"
          des="With a passion for photography, I've embarked on a journey to present my photography through this immersive online platform. Here functionalities I have added are, user registration, user login, edit and delete own post and account, and posts can be sorted by user and categories."
          src={momentsChronicles}
          gitLink="https://github.com/FarjanaY/Moments_Chronicles_MERN.git"
          webLink="https://moments-chronicles-mern-front-end.onrender.com/"
        />
        <ProjectsCard
          title="Exercise Tracker App"
          des="A user-friendly MERN-stack application that enables individuals to easily track and manage their daily fitness routines. Features include adding exercises & users, also only existing users has ability to update & delete exercises."
          src={exerciseTracker}
          gitLink="https://github.com/FarjanaY/Exercise_Tracker_App_Mern_Deploy.git"
          webLink="https://exercise-tracker-app-mern-deploy-client.vercel.app/"
        />

        <ProjectsCard
          title="Smart Doctor App"
          des=" Smart doctor app helps doctors schedule and get appointments. 3 sections are available with dashboards & login (admin,
            doctor & patient). Patients can get appointments by login & medicines through delivery by completing their payment."
          src={doctorProject}
          gitLink="https://github.com/FarjanaY/Smart-Doctor-App_HTML.git"
          webLink="https://smart-doctor-app-html.vercel.app/"
        />
        <ProjectsCard
          title="ToDo List Project"
          des=" The To-Do List project is built to keep track of the tasks and
          able to enter the tasks that the user needs to do. Once they
          are done with their tasks they can also remove and tick them."
          src={todoProject}
          gitLink="https://github.com/FarjanaY/ToDo-List-JS-"
          webLink="https://farjanay.github.io/ToDo-List-JS-/"
        />
        <ProjectsCard
          title="Chat Application"
          des=" This a simple chatting application where any added user can
          chat with other added users, and delete and search users.
          Admin can add and delete any user. Also, a user can enter by
          signing. "
          src={""}
          gitLink="https://github.com/FarjanaY/Node-Chat-Applicaiton"
          webLink="https://github.com/FarjanaY"
        />
        <ProjectsCard
          title="COVID-19 (Corona-Virus)"
          des="Simple html & CSS project for describing corona virus."
          src={covidProject}
          gitLink="https://github.com/FarjanaY/COVID-19-Corona-Virus-"
          webLink="https://farjanay.github.io/COVID-19-Corona-Virus-/"
        />
      </div>
    </section>
  );
};

export default Projects;
