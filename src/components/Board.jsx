import './Board.css'

const POSTS = [
  { id: 5, title: '공지사항: 서비스 점검 안내', author: '관리자', date: '2026-07-08', views: 128 },
  { id: 4, title: 'React 19 업그레이드 후기', author: '김개발', date: '2026-07-07', views: 54 },
  { id: 3, title: '디자인 시스템 적용 가이드 공유합니다', author: '이디자인', date: '2026-07-05', views: 87 },
  { id: 2, title: '게시판 UI 피드백 부탁드려요', author: '박기획', date: '2026-07-03', views: 32 },
  { id: 1, title: '첫 게시글입니다. 잘 부탁드립니다!', author: '홍길동', date: '2026-07-01', views: 12 },
]

function Board() {
  return (
    <section className="board">
      <div className="board__header">
        <h2 className="board__title">게시판</h2>
        <button type="button" className="board__write-btn">글쓰기</button>
      </div>

      {/* PC / 태블릿: 표 형태 */}
      <table className="board__table board__table--desktop">
        <thead>
          <tr>
            <th className="board__col-id">번호</th>
            <th className="board__col-title">제목</th>
            <th className="board__col-author">작성자</th>
            <th className="board__col-date">작성일</th>
            <th className="board__col-views">조회수</th>
          </tr>
        </thead>
        <tbody>
          {POSTS.map((post) => (
            <tr key={post.id}>
              <td className="board__col-id">{post.id}</td>
              <td className="board__col-title">{post.title}</td>
              <td className="board__col-author">{post.author}</td>
              <td className="board__col-date">{post.date}</td>
              <td className="board__col-views">{post.views}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 모바일: 카드 리스트 형태 */}
      <ul className="board__list board__list--mobile">
        {POSTS.map((post) => (
          <li key={post.id} className="board__list-item">
            <div className="board__list-row">
              <span className="board__list-id">No.{post.id}</span>
              <span className="board__list-date">{post.date}</span>
            </div>
            <p className="board__list-title">{post.title}</p>
            <div className="board__list-row board__list-row--bottom">
              <span className="board__list-author">{post.author}</span>
              <span className="board__list-views">조회 {post.views}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Board
