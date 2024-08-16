import { Link } from "react-router-dom";
import "./Error.css";

export const Error = () => {
  return (
    <section className="page-404">
      <div className="page-container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four-zero-four-bg">
                <Link to={"/"}>
                  <h1 className="text-center">404</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
