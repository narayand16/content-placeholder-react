import { useEffect, useState } from "react";
import "./App.css";
import { API_URL, DEFAULT_SKELETON, PhotoDetail } from "./models/data-models";
import ContentPlaceholder from "./components/ContentPlaceholder/ContentPlaceholder";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PhotoDetail>();

  async function getData() {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = (await response.json()) as PhotoDetail;
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => getData(), 10000);
  }, []);

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Content Placeholder</h3>
      <ContentPlaceholder loading={loading} shapes={DEFAULT_SKELETON}>
        <div className="card">
          <img className="card-img" src={data?.thumbnailUrl} alt="thumbnail" />
          <p>{data?.title}</p>
          <p>{data?.title}</p>
        </div>
      </ContentPlaceholder>
    </>
  );
}

export default App;
