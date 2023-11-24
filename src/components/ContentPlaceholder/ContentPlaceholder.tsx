interface SkeletonStructure {
  type: "sqaure" | "circle" | "rectangle" | "text";
  count: number;
}
const ContentPlaceholder = ({
  skeletonList,
}: {
  skeletonList: SkeletonStructure[];
}) => {
  const skeletons = [];
  for (let i = 0; i < skeletonList.length; i++) {
    skeletons.push(
      <div className={`skeleton ${skeletonList[i].type}`} key={i}></div>
    );
  }
  return <div>{skeletons}</div>;
};

export default ContentPlaceholder;
