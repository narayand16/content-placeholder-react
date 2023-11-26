export enum Shapes {
  SQAURE = "sqaure",
  CIRCLE = "circle",
  RECTANGLE = "rectangle",
  LINE = "line",
}
export interface PhotoDetail {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Shape {
  type: Shapes.CIRCLE | Shapes.RECTANGLE | Shapes.SQAURE | Shapes.LINE;
  width: string;
  height: string;
  customStyles: Record<string, string>;
}

export const DEFAULT_SKELETON: Shape[] = [
  {
    type: Shapes.RECTANGLE,
    width: "25rem",
    height: "15rem",
    customStyles: { marginBottom: "1rem" },
  },
  {
    type: Shapes.LINE,
    width: "100%",
    height: "2rem",
    customStyles: { marginBottom: "1rem", borderRadius: "0.25rem" },
  },
  {
    type: Shapes.LINE,
    width: "70%",
    height: "2rem",
    customStyles: { marginBottom: "1rem", borderRadius: "0.25rem" },
  },
];

export const API_URL = "https://jsonplaceholder.typicode.com/photos/1";

// used for testing purpose
// {
//   type: Shapes.SQAURE,
//   width: "5rem",
//   height: "5rem",
//   customStyles: { marginBottom: "1rem" },
// },
// {
//   type: Shapes.CIRCLE,
//   width: "10rem",
//   height: "10rem",
//   customStyles: { marginBottom: "1rem", borderRadius: "50%" },
// },
