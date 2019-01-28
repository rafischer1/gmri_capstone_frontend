import React from 'react'
import MediaQuery from 'react-responsive'
import {Container, Row} from 'react-materialize'

const FooterPage = () => {
  return <div className="FooterPage">
      <MediaQuery minDeviceWidth={951}>
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
            <div className="infoLinks">
              <a href="http://gmri.org/" rel="noopener noreferrer" target="_blank">
                Gulf of Maine Research Institute
              </a>
            </div>
            <div className="infoLinks">
              <a href="https://www.maine.gov/dacf/mgs/hazards/slr_ss/index.shtml" rel="noopener noreferrer" target="_blank">
                State of Maine GIS Department
              </a>
            </div>
            <div className="infoLinks">
              <a href="https://www.maine.gov/dacf/mgs/hazards/slr_ss/index.shtml" rel="noopener noreferrer" target="_blank">
                CSRI Sea Level Rise Resources
              </a>
            </div>
          </Row>
          <Row>
            <div className="infoLinks">
              <a href="https://www.portlandmaine.gov/2366/Stay-Connected" rel="noopener noreferrer" target="_blank">
                City of Portland - Stay Connected
              </a>
            </div>
            <div className="infoLinks">
              <a href="https://tidesandcurrents.noaa.gov/publications/techrpt83_Global_and_Regional_SLR_Scenarios_for_the_US_final.pdf" rel="noopener noreferrer" target="_blank">
                NOAA SLR Technical Report - 2017
              </a>
            </div>
            <div className="infoLinks">
              <a href=" https://www.nrcm.org/projects/climate/global-warming-air-pollution/sea-level-rise-maine/sea-level-rise-maps/" rel="noopener noreferrer" target="_blank">
                Natural Resources Council of Maine
              </a>
            </div>
          <div className="infoLinks">
            <a href="https://www.ipcc.ch/" rel="noopener noreferrer" target="_blank">
              Intergovernmental Panel on Climate Change
              </a>
          </div>
          </Row>
        </Container>

        <footer>Contact, C 2019, Fischer</footer>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 950px)">
        <div class="mediaTable">
          <span class="letter" data-letter="S">
            Sea
          </span>
          <span class="letter" data-letter="L">
            Level
          </span>
          <span class="letter" data-letter="R">
            Rise
          </span>
          <span class="letter" data-letter="I">
            Info
          </span>
        </div>
        <table>
          <tr>
            <td>Organization/Resource</td>
            <td>Link</td>
          </tr>
          <tr>
            <td>Gulf of Maine Research Institute</td>
            <td>
              <a href="http://gmri.org/" rel="noopener noreferrer" target="_blank">
                Link
              </a>
            </td>
          </tr>
          <tr>
            <td>State of Maine GIS Department</td>
            <td>
              <a href="https://www.maine.gov/dacf/mgs/hazards/slr_ss/index.shtml" rel="noopener noreferrer" target="_blank">
                Link
              </a>
            </td>
          </tr>
          <tr>
            <td>CSRI Sea Level Rise Resources</td>
            <td>
              <a href="https://gmri.maps.arcgis.com/apps/PublicGallery/index.html?appid=5b3fde19a83e4eb9b612a0df4f8e5937" rel="noopener noreferrer" target="_blank">
                Link
              </a>
            </td>
          </tr>
          <tr>
            <td>Intergovernmental Panel on Climate Change</td>
            <td>
              <a href="https://www.ipcc.ch/" rel="noopener noreferrer" target="_blank">
                Link
              </a>
            </td>
          </tr>
          <tr>
            <td>NOAA Instagram</td>
            <td>
              <a href=" https://www.instagram.com/noaa/" rel="noopener noreferrer" target="_blank">
                Link
              </a>
            </td>
          </tr>
        </table>

        <footer>Contact, C 2019, Fischer</footer>
      </MediaQuery>
    </div>;
}

export default FooterPage;



{/* <table>
  <tbody>
    <tr>
      <td>Organization/Resource</td>
      <td>Link</td>
    </tr>
    <tr>
      <td>Gulf of Maine Research Institute</td>
      <td>
        <a href="http://gmri.org/" rel="noopener noreferrer" target="_blank">
          Link
                </a>
      </td>
    </tr>
    <tr>
      <td>State of Maine GIS Department</td>
      <td>
        <a href="https://www.maine.gov/dacf/mgs/hazards/slr_ss/index.shtml" rel="noopener noreferrer" target="_blank">
          Link
                </a>
      </td>
    </tr>
    <tr>
      <td>CSRI Sea Level Rise Resources</td>
      <td>
        <a href="https://gmri.maps.arcgis.com/apps/PublicGallery/index.html?appid=5b3fde19a83e4eb9b612a0df4f8e5937" rel="noopener noreferrer" target="_blank">
          Link
                </a>
      </td>
    </tr>
    <tr>
      <td>Intergovernmental Panel on Climate Change</td>
      <td>
        <a href="https://www.ipcc.ch/" rel="noopener noreferrer" target="_blank">
          Link
                </a>
      </td>
    </tr>
  </tbody>
</table> */}



 
