import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { colorScale, countries, missingCountries } from "./Countries";

function Worldmap() {
  return (
    <div style={{ width: "584px", height: "324px" }}>
      <VectorMap
        map={worldMill}
        containerStyle={
          {
            // width: "700px",
            // height: "600px",
          }
        }
        backgroundColor="#9a9a9a"
        markers={missingCountries}
        markerStyle={{
          initial: {
            fill: "",
          },
        }}
        series={{
          regions: [
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max: 100,
            },
          ],
        }}
        onRegionTipShow={function reginalTip(event, label, code) {
          return label.html(`
                  <div style="background-color: #9a9a9a"; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                    <p>
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    <p>
                    ${countries[code]}
                    </p>
                    </div>`);
        }}
        onMarkerTipShow={function markerTip(event, label, code) {
          return label.html(`
                  <div style="background-color:  #9a9a9a"; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px>
                    <p style="color: black !important;">
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    </div>`);
        }}
      />
    </div>
  );
}

export default Worldmap;
