import React, { Component } from "react";

class About extends Component {
//  constructor(props){
  //  super(props);
    //this.state = {size: 3}
//  }
  //render() {
    //let rows = [];
    //for (var i = 0; i < this.state.size; i++){
      //let rowID = `row${i}`
      //let cell = []
      //for (var idx = 0; idx < this.state.size; idx++){
        //let cellID = `cell${i}-${idx}`
        //cell.push(<td key={cellID} id={cellID}></td>)
      //}
      //rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    //}
    return (
      <div>
        <h1 className="text-center pt-5 pl-2">
          About P<span style={{ color: "#5685d1" }}>x</span>PUC
        </h1>

        <div className="jumbotron pb-5">
          <p className="lead">
            The P<span style={{ color: "#5685d1" }}>x</span>PUC team is made up
            of a subset of members from Grief to Action (G2A) , a working group
            at the University of Pittsburgh's Center for Analytical Approaches.{" "}
          </p>
          <p className="lead">
            Our team is made up of students, staff, and community members who
            came together this summer in the wake of George Floyd's murder to
            use data analysis to address structural racism in Pittsburgh and
            beyond.
          </p>
        </div>

        <div className="jumbotron pt-0 bg-white">
          <hr className="my-4 border-top border-secondary" />
          <p className="lead">
            The aim of this project is to analyze police union contracts and the
            barriers they pose to holding police officers accountable, as well
            as to demystify the police misconduct investigation process.
          </p>
          <p className="lead">
            Our search tool allows users to easily look up information in these
            contracts, and helps them to become more familiar with some of the
            problematic language used within them and break this information
            down.
          </p>
          <hr className="my-4 border-top border-secondary" />
        </div>

        <>
      <div>
        <table style={{float: 'left'}}>
          <tbody><tr>
              <th colSpan={4}>Meet the Team</th>
            </tr>
            <tr>
              <td rowSpan={2}><a href="http://www.yurulin.com" target="_blank">Yu-Ru Lin</a></td>
              <td>  Associate Professor at the University of Pittsburgh</td>
            </tr>
            <tr>
              <td>  Lead of the <a href="https://picsolab.github.io" target="_blank">PISCO Lab</a></td>
            </tr>
            <tr>
              <td rowSpan={2}><a href>Name</a></td>
              <td>  Title</td>
            </tr>
            <tr>
              <td>  Other</td>
            </tr>
          </tbody></table>
      </div>

      <div>
        <table style={{float: 'left'}}>
          <tbody><tr>
              <th colSpan={4}>Relevant Resources</th>
            </tr>
            <tr rowSpan={3}>
              <td><a href="https://www.joincampaignzero.org" target="_blank"><img src="camp_zero.jpg" alt="Campaign Zero" width={80} height={80} /></a></td>
              <td>  Campaign Zero: A comprehensive platform of research-based policy solutions to end police brutality in America.</td>
            </tr>
            <tr rowSpan={3}>
              <td><a href="https://openpolice.org" target="_blank"><img src="open_pol.jpg" alt="Open Police" width={120} height={60} /></a></td>
              <td>  Open Police: Prepare, file, and track reports of police conduct because your story is too important to be ignored.</td>
            </tr>
            <tr rowSpan={3}>
              <td><a href="https://www.grieftoaction.org/PBB/" target="_blank"><img src="412conn.jpg" alt="412 Connect" width={100} height={60} /></a></td>
              <td>  412 Connect: promote and increase the visibility of Black-owned businesses in Pittsburgh and to expand their business presence on and around the University of Pittsburgh campus and the Pittsburgh community.</td>
            </tr>
          </tbody></table>
      </div>
    </>


      </div>

    );
  }
}
export default About;
