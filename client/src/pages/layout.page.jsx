import SideBar from "../components/sideBar.component";
import TopNavBar from "../components/topNav.component";
import "../css/layout.page.css";

const Layout = ({ Page_Name }) => {
  return (
    <>
      <div class="flex">
        <SideBar />

        <div class="flex-1">
          <TopNavBar />
          {/* main components */}
          <div className="home layoutMainContent" id="home">
            <Page_Name />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
