import axios from 'axios';
const Page = async () => {
  const res = await axios.get(
    'https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details'
  );
  await new Promise((r) => setTimeout(r, 5000));
  const data = res.data;
  return <div>{data.name}</div>;
};
export default Page;
