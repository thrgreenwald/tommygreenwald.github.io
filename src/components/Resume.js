import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Topline from "../assets/resume/toplinelogo.png"
import CloudTruth from "../assets/resume/cloudtruthlogo.png"
import Glasswing from "../assets/resume/glasswinglogo.png"
import UBS from "../assets/resume/ubslogo.jpeg"
import IBM from "../assets/resume/ibmlogo.jpeg"
import PA from "../assets/resume/palogo.png"
import Peraton from "../assets/resume/peratonlogo.png"

import ResumeSection from "./ResumeSection.js"

const sections = [
  [Topline, "Associate Consultant", "January - September 2022", ["Conduct commercial due diligence on and perform growth strategy projects for business-to-business (B2B) software-as-a-service (SaaS) technology companies, ranging from mid/growth stage to Fortune 500 size",
"Carry out market sizing, revenue modeling, survey drafting, competitive analysis, granular product-level research on software offerings, and data analysis on an array of qualitative and quantitative data",
"Lead frequent interviews with market participants and client customers to better understand their buying habits and problems faced with current software to inform product strategy and roadmap",
"Present findings to company C-suite and private equity (PE) clients"]],
[CloudTruth, "Product Analyst", "July - November 2021", ["Analyze product to find potential integrations with third parties allowing entrance into new markets",
"Build new product integrations to third parties by conducting research and writing technical documents",
"Interface with Chief Product Officer and product team frequently to assess product roadmap"]],
[Glasswing, "Venture Capital Analyst Co-op", "January - November 2021", ["Source and screen potential investment opportunities including first pitches with founders",
"Conduct technical due diligence for potential AI/ML and other deep tech investments",
"Provide support to existing portfolio companies with growth strategy and acquiring customers",
"Built investment thesis centered around serverless computing and its enablers"]],
[UBS, "Group Technology Summer Analyst", "July - August 2020", ["Analyzed the Cash Order Management system within Electronic Trading Technology to find inefficiencies",
"Developed python scripts to streamline onboarding new clients to the UBS alternative trading system, which is responsible for the most daily volume of any alternative trading system (dark pool) in the world",
"Managed team of five for intern challenge project focused on global company search engine"]],
[IBM, "Full Stack Software Development Intern", "June - August 2019", ["Collaborated with Agile team developing Watson Knowledge Catalog from ground up",
"Developed front end in React.js with Redux and utilized open source IBM Carbon library",
"Developed back-end-for-front-end (BFF) microservice in Node.js and Express.js",
"Led intern hackathon project using Watson APIs for sentiment analysis of live Reddit data"]],
[PA, "Full Stack Software Development Co-op", "January - May 2019", ["Collaborated with a Scrum team developing a customer-facing energy intelligence platform",
"Developed front end in JavaScript using React.js, jQuery, and HTML/CSS",
"Developed back end microservice architecture using Java and Spring",
"Took leadership role in recruiting and interviewing new candidates for co-op"]],
[Peraton, "Software Engineering Intern", "May - August 2018", ["Integrated distributed data structures with MongoDB in Python for DARPA XD3 Extreme DDoS Defense Team",
"Developed asynchronous code using Python Asyncio concurrency module",
"Tested code in large-scale testing environment with Docker containers and virtual machines"]]
]

function Resume() {
  return (
    <Grid container 
    spacing={0} 
    direction="row" 
    justifyContent="center"
    alignItems="center"
    sx = {{
      border: 1,
      borderColor: "grey.600",
      borderRadius: "10%",
      boxShadow: 12,
      paddingBottom: "4vh"
    }}
    >
      {sections.map((section) => (
        <ResumeSection img={section[0]} title={section[1]} date={section[2]} bullets={section[3]} />
      ))}
    </Grid>
  );
}

export default Resume;