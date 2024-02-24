import { fetchProfile } from "../page";

const page = async() => {
  //const [items, setItems] = useState([]);
  const API = process.env.NEXT_PUBLIC_BACKEND_API;
  const {profile , imageUrl} = await fetchProfile()
  // useEffect(() => {
  //   fetch(API)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((result) => {
  //       setItems(result.profile);
  //     });
  // }, []);

  return (
    <div>
      <iframe src={profile?.profile?.pdf} width="100%" height="700px"></iframe>
    </div>
  );
};

export default page;