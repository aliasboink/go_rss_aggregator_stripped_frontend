export const load = async () => {
  const response = await fetch('http://localhost:8080/v1/posts');
  const posts = await response.json();
  return { posts };
}