function Header() {
  return (
    <main className="-mt-[60px]" dir="ltr">
      <div className="wrapper relative overflow-hidden p-8 pt-0">
        <img src="/main1.jpg" className="w-full h-full rounded-[64px]" alt="" />
        <div className="info flex-around absolute bottom-[80px] p-2 gap-8 w-full">
          <h2 className="text-[48px] text-white font-[600]">Project Name</h2>
          <p className="text-[18px] text-white ">
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
            <br />
            aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo{" "}
            <br />
            viverra maecenas accumsan lacus vel facilisis.{" "}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Header;
