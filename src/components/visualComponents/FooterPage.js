import React from 'react'
import MediaQuery from 'react-responsive'

const FooterPage = () => {
  return <div className="FooterPage">
    <MediaQuery minDeviceWidth={951}>
      <div class="foo">
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
          <td>
           
              Link
          
          </td>
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
      </table>
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
          <td>
           
              Link
          
          </td>
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
      </table>
      <footer>Contact, C 2019, Fischer</footer>
    </MediaQuery>
    </div>;
}

export default FooterPage;



 
