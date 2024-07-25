import { Spin } from "antd";
import './loader.css';

export default function Loader() {
  return (
    <div className="loader-container">
      <Spin className="spinner" size="large" />
    </div>
  );
}
