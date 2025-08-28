import { HashLoader } from "react-spinners";

function Spinner(loading) {
  return (
    <div>
      <HashLoader
        color="#0a7bff"
        size={20}
        cssOverride={{ margin: "48px auto", textAlign: "center" }}
        loading={loading}
      />
    </div>
  );
}

export default Spinner;
