// コンポーネント名は大文字から始める
function Profiele() {
  return (
    <img 
      src="https://i.imgur.com/MK3eW3As.jpg" 
      alt="Katherine Johnson" 
    />
  );
}

function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profiele />
      <Profiele />
      <Profiele />
    </section>
  )
}

export default Gallery