import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailure,
} from "../slice/article";
import moment from "moment/moment";
import { Loader } from "../ui";

function ArticleDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { articleDetail, isLoading } = useSelector((state) => state.article);

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const response = await ArticleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(response.article));
    } catch (error) {
      dispatch(getArticleDetailFailure());
    }
  };

  useEffect(() => {
    getArticleDetail();
  }, [slug]);

  return isLoading ? (
    <Loader />
  ) : (
    articleDetail !== null && (
      <div>
        <div className="p-5 mb-4  rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{articleDetail.title}</h1>
            <p className="col-md-8 fs-4">{articleDetail.description}</p>
            <div className="d-flex gap-3">
              <p className="text-muted ">
                {" "}
                <span className="fw-bold">Created At: </span>
                {moment(articleDetail.createdAt).format("DD MMM, YYYY")}
              </p>
            </div>
            <div class="col-md-4 mt-3 mb-3">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                </svg>
                <div class="card-body">
                  <strong className="d-inline-block mb-2 text-primary text-uppercase">
                    {articleDetail.author.username}
                  </strong>
                  <p class="card-text">{articleDetail.author.bio}</p>
                </div>
              </div>
            </div>
            <div>{articleDetail.body}</div>
          </div>
        </div>
      </div>
    )
  );
}

export default ArticleDetail;
