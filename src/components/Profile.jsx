import './Profile.css'

function Profile() {
  return (
    <section className="profile">
      <div className="profile__card">
        <div className="profile__avatar" aria-hidden="true">홍</div>
        <div className="profile__info">
          <span className="profile__eyebrow">PROFILE</span>
          <h2 className="profile__name">홍길동</h2>
          <ul className="profile__meta">
            <li>
              <span className="profile__meta-label">전화번호</span>
              <span className="profile__meta-value">010-1234-5678</span>
            </li>
            <li>
              <span className="profile__meta-label">이메일</span>
              <span className="profile__meta-value">abcd@abcd.com</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Profile
