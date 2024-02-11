import React, { useEffect, useRef, useState } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import HashLoader from "react-spinners/HashLoader";

const Report1 = () => {
  const pbi = useRef();
  const [reportConfig, setReportConfig] = useState({
    type: "report",
    embedUrl: process.env.REACT_APP_PBI_EMBED_URL1,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    id: process.env.REACT_APP_ID1,
    tokenType: models.TokenType.Aad,
    filters: [],
    settings: {
      panes: {
        filters: {
          expanded: false,
          visible: false,
        },
      },
    },
  });
  const [bootstrap, setBootstrap] = useState({
    type: "report", // Supported types: report, dashboard, tile, visual, qna and paginated report
    id: undefined,
    embedUrl: undefined,
    accessToken: undefined, // Keep as empty string, null or undefined
    tokenType: models.TokenType.Embed,
  });
  const [report, setReport] = useState();

  useEffect(() => {
    console.log("Report ", report);
    report?.on("loaded", (event) => {
      console.log("loaded");
    });
  }, [report]);

  useEffect(() => {
    console.log("Pbi ", pbi.current);
    // pbi?.current?.on("loaded", () => console.log("Report loaded"));
  }, [pbi.current]);

  const reportComponent = (
    <PowerBIEmbed
      ref={pbi}
      embedConfig={reportConfig}
      cssClassName={"report-size"}
      getEmbeddedComponent={(embedObject) => {
        setReport(embedObject);
      }}
    />
  );

  const [position, setPosition] = useState({
    position: "absolute",
    left: "-1500px",
    top: "0px",
    width: "40%",
  });

  const show = () => {
    setPosition({ ...position, left: "30px" });
  };

  const hide = () => {
    setPosition({ ...position, left: "-1500px" });
  };

  const reload = async () => {
    await report?.reload();
  };

  const [spinnerStyle, setSpinnerStyle] = useState({
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "100",
  });

  useEffect(() => {
    setTimeout(
      () => setSpinnerStyle({ ...spinnerStyle, display: "none" }),
      4500
    );
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div style={spinnerStyle}>
        <HashLoader color="#36d7b7" />
      </div>
      <div className="controls">
        <button onClick={show}>Show Report</button>
        <button onClick={hide}>Hide Report</button>
        {/* <button onClick={reload}>Reload Report</button> */}
      </div>
      <div style={{ position: "relative" }} className="report">
        <div id="target"></div>
        <h2>PBI Reports</h2>

        {/* {pbi.current && pbi.current} */}
        <div id="pbi" style={position}>
          {reportComponent}
        </div>

        {/* {report &&
        React.cloneElement(reportComponent, { embedConfig: reportConfig })}
      {report &&
        React.cloneElement(reportComponent, { embedConfig: reportConfig })} */}
        {/* <PowerBIEmbed embedConfig={bootstrap} cssClassName={"report-size"} />
      <PowerBIEmbed embedConfig={bootstrap} cssClassName={"report-size"} />

      <PowerBIEmbed
        ref={pbi}
        embedConfig={reportConfig}
        cssClassName={"report-size"}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
            ["visualClicked", () => console.log("visual clicked")],
            ["pageChanged", (event) => console.log(event)],
          ])
        }
        getEmbeddedComponent={(embeddedReport) => {
          setReport(embeddedReport);
        }}
      /> */}
      </div>
    </div>
  );
};

export default Report1;
