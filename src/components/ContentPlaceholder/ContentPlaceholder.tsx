import { ReactElement } from "react";
import { Shapes, Shape } from "../../models/data-models";
import "./ContentPlaceholder.css";

const ContentPlaceholder = ({
  shapes,
  loading,
  children,
}: {
  shapes: Shape[];
  loading: boolean;
  children: ReactElement;
}) => {
  function getShapeElement(
    {
      type,
      width,
      height = type === Shapes.LINE ? "2rem" : "15rem",
      customStyles,
    }: Shape,
    index: number
  ) {
    return (
      <div
        key={index}
        className="animated-bg"
        style={{ width, height, ...customStyles }}
      ></div>
    );
  }

  const skeletonItems = shapes.map((shape, index) => {
    return getShapeElement(shape, index);
  });

  return (
    <>{loading ? <div className="card">{skeletonItems}</div> : children}</>
  );
};

export default ContentPlaceholder;
