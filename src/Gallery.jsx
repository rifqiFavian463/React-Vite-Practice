export function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

export default function Gallery() {
  return (
    <picture>
      <figcaption>Amazing Scientist</figcaption>
      <Profile />
      <Profile />
    </picture>
  );
}
