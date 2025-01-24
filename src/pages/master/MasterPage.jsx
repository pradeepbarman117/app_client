import { useOutlet } from "react-router-dom";
import Master from "../../components/master/Master";

const MasterPage = () => {
  const outlet = useOutlet();

  return outlet || <Master />;
};

export default MasterPage;