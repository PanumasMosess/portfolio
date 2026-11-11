import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section
        id="portfolio"
        style={{
          background: "#ebeeee",
          paddingTop: "90px",
          paddingBottom: "60px",
        }}
      >
        <div className="row">
          <div className="twelve columns collapsed">
            <h1
              style={{
                textAlign: "center",
                marginBottom: "48px",
                color: "#313131",
              }}
            >
              Check Out Some of My Works.
            </h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="columns portfolio-item"
                      style={{
                        background: "#fff",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        minHeight: "150px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        className="item-wrap"
                        style={{ textAlign: "center" }}
                      >
                        <div className="portfolio-item-meta">
                          {/* ชื่อโปรเจกต์เป็นลิงก์คลิกได้ */}
                          <h5>
                            {item.github !== "private git" ? (
                              <a
                                href={item.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#11ABB0",
                                  textDecoration: "none",
                                  position:
                                    "relative" /* บังคับให้อยู่เลเยอร์บน */,
                                  zIndex: 99 /* ให้อยู่หน้าสุด */,
                                  pointerEvents:
                                    "auto" /* บังคับให้รับการคลิกเสมอ */,
                                }}
                              >
                                {item.name}
                              </a>
                            ) : (
                              <span style={{ color: "#313131" }}>
                                {item.name}
                              </span>
                            )}
                          </h5>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#666",
                              marginTop: "10px",
                            }}
                          >
                            {item.description}
                          </p>

                          {/* แจ้งเตือนกรณีเป็น Private Git */}
                          {item.github === "private git" && (
                            <span
                              style={{
                                fontSize: "12px",
                                color: "#999",
                                fontStyle: "italic",
                                display: "block",
                                marginTop: "5px",
                              }}
                            >
                              (Private Repository)
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
