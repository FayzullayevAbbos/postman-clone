import { useSelector } from "react-redux";
import ResponseDefault from "./ResponseDefault";
import JSONPretty from "react-json-pretty";
const PostmanResponse = () => {
  const request = useSelector((state) =>
    state.requests.find((re) => re.id === state.currentRequest)
  );
  return (
    <div className=" border mt-[100px] h-72 overflow-y-auto ">
      {request ? (
        <JSONPretty
        className="p-5"
          mainStyle="background: #fff; color: rgb(0, 0, 0)"
          keyStyle="color: rgb(163, 21,21)"
          valueStyle="color:rgb(9, 134,88)"
          stringStyle="color: rgb(4, 81, 165)"
          booleanStyle="color:rgb(4, 81, 165); font-weight: bold "
          id="json-pretty"
          data={request?.response?.data}
        ></JSONPretty>
      ) : (
        <ResponseDefault />
      )}
    </div>
  );
};

export default PostmanResponse;
