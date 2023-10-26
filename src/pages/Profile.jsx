import { useNavigate } from "react-router-dom";
import { auth } from "./../firebase";

const Profile = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;
  return (
    <div className="flex flex-wrap gap-2 justify-around">
      <div className=" ">
        <p>
          Welcome <em className="text-decoration-underline">{user?.email}</em>.
          You are logged in!
        </p>
      </div>
    </div>
  );
};

export default Profile;
