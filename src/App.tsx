import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";

interface PhotoDetail {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PhotoDetail>();

  async function getData() {
    setLoading(true);
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos/1"
    );
    const data = await response.json();
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => getData(), 5000);
  }, []);

  return (
    <>
      {/* <h3>Content Placeholder</h3> */}
      <Loader loading={loading}>
        <div className="card">
          {/* <p>I am going to loaded here</p> */}
          <img src={data?.thumbnailUrl} alt="thumbnail" />
          <p>{data?.title}</p>
        </div>
      </Loader>
    </>
  );
}

export default App;
