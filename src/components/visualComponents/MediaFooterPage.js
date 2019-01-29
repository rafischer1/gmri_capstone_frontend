import React from 'react'
import { Container, Row } from 'react-materialize'

const MediaFooterPage = () => {
  return <div className="mediaFooterPage">
    <div className="foo">
      <span className="letter" data-letter="S">
        Sea
          </span>
      <span className="letter" data-letter="L">
        Level
          </span>
      <span className="letter" data-letter="R">
        Rise
          </span>
      <span className="letter" data-letter="I">
        Info
          </span>
    </div>
    <Container style={{ display: "flex" }}>
      <Row>
        <div className="mediaInfoLinks">
          <a href="http://gmri.org/" rel="noopener noreferrer" target="_blank">
            Gulf of Maine Research Institute
              </a>
        </div>
        <br />
        <div className="mediaInfoLinks">
          <a href="https://www.maine.gov/dacf/mgs/hazards/slr_ss/index.shtml" rel="noopener noreferrer" target="_blank">
            State of Maine GIS Department
              </a>
        </div>
        <br />
        <div className="mediaInfoLinks">
          <a href="https://www.maine.gov/dacf/mgs/hazards/slr_ss/index.shtml" rel="noopener noreferrer" target="_blank">
            CSRI Sea Level Rise Resources
              </a>
        </div>
        <br />
        <div className="mediaInfoLinks">
          <a href="https://www.portlandmaine.gov/2366/Stay-Connected" rel="noopener noreferrer" target="_blank">
            City of Portland - Stay Connected
              </a>
        </div>
        <br />
        <div className="mediaInfoLinks">
          <a href="https://tidesandcurrents.noaa.gov/publications/techrpt83_Global_and_Regional_SLR_Scenarios_for_the_US_final.pdf" rel="noopener noreferrer" target="_blank">
            NOAA SLR Technical Report - 2017
              </a>
        </div>
        <br />
        <div className="mediaInfoLinks">
          <a href=" https://www.nrcm.org/projects/climate/global-warming-air-pollution/sea-level-rise-maine/sea-level-rise-maps/" rel="noopener noreferrer" target="_blank">
            Natural Resources Council of Maine
              </a>
        </div>
        <br />
        <div className="mediaInfoLinks">
          <a href="https://www.ipcc.ch/" rel="noopener noreferrer" target="_blank">
            Intergovernmental Panel on Climate Change
              </a>
        </div>
      </Row>
    </Container>

    <footer>Contact, C 2019, Fischer</footer>
  </div>;
}

export default MediaFooterPage;