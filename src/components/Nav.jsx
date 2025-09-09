const Links = ["الرئيسية", "خدماتنا", "من نحن", "مشاريعنا"];

function Nav() {
  return (
    <nav className="md:container h-[120px] m-auto bg-amber-100 rounded-[68px] relative z-10">
      <div className="flex-around p-3 h-full">
        <div className="logo">
          <img src="/logo.png" alt="" width={160} />
        </div>
        {Links.map((link) => (
          <div className="text-[32px] font-[700]">
            <a href={`#${link}`}>{link}</a>
          </div>
        ))}
        <div className="login text-[32px] font-[700] bg-[#3067D5] text-white p-4 px-10  rounded-[68px]">
          <a href="#">sign in</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
