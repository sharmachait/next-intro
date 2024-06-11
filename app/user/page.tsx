import axios from 'axios';
const Page = async () => {
  const res = await axios.get('http://localhost:3000/api/user');
  await new Promise((r) => setTimeout(r, 5000));
  const data = res.data;
  return <div>{data.name}</div>;
};
export default Page;
