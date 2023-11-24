import { ReactElement } from "react";
import "./Loader.css";

function Loader({
  loading,
  children,
}: {
  loading: boolean;
  children: ReactElement;
}) {
  return (
    <>
      {loading ? (
        <div className="card">
          <div className={"card-img " + (loading ? "animated-bg" : "")}></div>
          <p
            className={
              "card-title " + (loading ? "animated-bg animated-bg-text" : "")
            }
          ></p>
          <p
            className={
              "card-description " + loading
                ? "animated-bg animated-bg-text"
                : ""
            }
          ></p>
          <span
            className={loading ? "animated-bg animated-bg-text" : ""}
          ></span>
        </div>
      ) : (
        children
      )}
    </>
  );
}

export default Loader;
