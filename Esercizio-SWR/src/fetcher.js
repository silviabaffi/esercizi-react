const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error();
  return res.json();
};

export default fetcher;
