import { ReactElement } from "react";
import { Shapes, Shape } from "../../models/data-models";
import "./ContentPlaceholder.css";

const ContentPlaceholder = ({
  shapes,
  loading,
  children,
  customClass = "animated-bg",
}: {
  shapes: Shape[];
  loading: boolean;
  children: ReactElement;
  customClass?: string;
}) => {
  function getShapeElement(
    {
      type,
      width = "100%",
      height = type === Shapes.LINE ? "2rem" : "15rem",
      customStyles,
    }: Shape,
    index: number
  ) {
    return (
      <div
        key={index}
        className={customClass}
        style={{ width, height, ...customStyles }}
      ></div>
    );
  }

  const skeletonItems = shapes.map((shape, index) =>
    getShapeElement(shape, index)
  );

  return (
    <>{loading ? <div className="card">{skeletonItems}</div> : children}</>
  );
};

export default ContentPlaceholder;
