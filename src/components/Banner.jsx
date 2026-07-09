import './Banner.css'

function Banner() {
  return (
    <section className="banner">
      <span className="banner__eyebrow">WELCOME</span>
      <h1 className="banner__title">hi, claude!</h1>
      <p className="banner__subtitle">
        React + Vite로 만든 3단 구성 페이지 — 배너, 게시판, 프로필을 한 화면에 담았습니다.
      </p>
    </section>
  )
}

export default Banner
