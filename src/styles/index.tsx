import Loader from "react-loader-spinner";
import colors from "src/styles/colors";

export const LoaderSpinner = () => {
  return (
    <div>
      <Loader
        color={colors.primary}
        height={100}
        width={100}
        type="ThreeDots"
      />
    </div>
  );
};
